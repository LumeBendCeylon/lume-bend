"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Loader2, Trash2, Plus, Pencil, X, ChevronDown, ChevronUp } from "lucide-react";
import {
  getCustomToursAdmin,
  addCustomTour,
  updateCustomTour,
  deleteCustomTour,
  getCategories,
  addCategory,
  deleteCategory,
  type CustomTour,
  type CustomItineraryDay,
  type CustomTourFAQ,
  type Category,
} from "@/lib/firebase";
import { tours as builtInTours, DEFAULT_CATEGORIES } from "@/lib/data";

const MOTIFS = ["rock", "sun", "leaf", "temple", "mountain", "wave"];

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function emptyDay(n: number): CustomItineraryDay {
  return { day: n, title: "", morning: "", afternoon: "", evening: "", overnight: "" };
}

function linesToArray(text: string): string[] {
  return text.split("\n").map((l) => l.trim()).filter(Boolean);
}

export default function AdminTours() {
  const [tours, setTours] = useState<CustomTour[]>([]);
  const [fetching, setFetching] = useState(true);
  const [listError, setListError] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [editing, setEditing] = useState<CustomTour | null>(null);
  const [showFullBuilder, setShowFullBuilder] = useState(false);

  const [extraCategories, setExtraCategories] = useState<Category[]>([]);
  const [addingCategory, setAddingCategory] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [seedMessage, setSeedMessage] = useState("");

  const CATEGORIES = [...DEFAULT_CATEGORIES.map((c) => c.name), ...extraCategories.map((c) => c.name)];

  // Controlled sub-sections that need add/remove rows
  const [days, setDays] = useState<CustomItineraryDay[]>([]);
  const [faqs, setFaqs] = useState<CustomTourFAQ[]>([]);

  function load() {
    setFetching(true);
    setListError("");
    getCustomToursAdmin()
      .then(setTours)
      .catch((err) => setListError(err instanceof Error ? err.message : "Could not load tours."))
      .finally(() => setFetching(false));
    getCategories().then(setExtraCategories);
  }

  useEffect(load, []);

  async function handleAddCategory(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAddingCategory(true);
    const form = new FormData(e.currentTarget);
    const name = String(form.get("categoryName") || "").trim();
    const motif = String(form.get("categoryMotif") || "sun");
    const imageUrl = String(form.get("categoryImageUrl") || "").trim() || undefined;
    if (!name) {
      setAddingCategory(false);
      return;
    }
    try {
      await addCategory({ name, motif, imageUrl });
      (e.target as HTMLFormElement).reset();
      const cats = await getCategories();
      setExtraCategories(cats);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Could not add category.");
    } finally {
      setAddingCategory(false);
    }
  }

  async function handleDeleteCategory(id: string) {
    if (!confirm("Remove this tour type? Existing tours keep their category text but it will no longer be a filterable main type.")) return;
    try {
      await deleteCategory(id);
      setExtraCategories((c) => c.filter((x) => x.id !== id));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Could not remove category.");
    }
  }

  async function handleImportBuiltIn() {
    if (!confirm(`Import all ${builtInTours.length} built-in tours into Firestore so you can edit them here? Tours already imported (matching slug) will be skipped.`)) return;
    setSeeding(true);
    setSeedMessage("");
    const existingSlugs = new Set(tours.map((t) => t.slug));
    const toImport = builtInTours.filter((t) => !existingSlugs.has(t.slug));
    let count = 0;
    try {
      for (const t of toImport) {
        await addCustomTour({
          slug: t.slug,
          title: t.title,
          category: t.category,
          duration: t.duration,
          price: t.price,
          blurb: t.blurb,
          motif: t.motif,
          imageUrl: t.imageUrl,
          highlights: t.highlights,
          heroTitle: t.heroTitle,
          intro: t.intro,
          overview: t.overview,
          bestFor: t.bestFor,
          groupSize: t.groupSize,
          physicalLevel: t.physicalLevel,
          destinationsCovered: t.destinationsCovered,
          itinerary: t.itinerary,
          hotelRecommendation: t.hotelRecommendation,
          transportation: t.transportation,
          meals: t.meals,
          included: t.included,
          excluded: t.excluded,
          optionalExperiences: t.optionalExperiences,
          tourFaqs: t.tourFaqs,
        });
        count++;
      }
      setSeedMessage(`Imported ${count} tour${count === 1 ? "" : "s"} (${existingSlugs.size} were already imported and skipped).`);
      load();
    } catch (err) {
      setSeedMessage(err instanceof Error ? err.message : "Import failed partway through — re-run to continue (already-imported tours are skipped).");
    } finally {
      setSeeding(false);
    }
  }

  function startEdit(t: CustomTour) {
    setEditing(t);
    setDays(t.itinerary && t.itinerary.length > 0 ? t.itinerary : []);
    setFaqs(t.tourFaqs ?? []);
    setShowFullBuilder(Boolean(t.itinerary && t.itinerary.length > 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetForm(formEl?: HTMLFormElement) {
    formEl?.reset();
    setEditing(null);
    setDays([]);
    setFaqs([]);
    setShowFullBuilder(false);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setSaveError("");
    const form = new FormData(e.currentTarget);
    const title = String(form.get("title") || "");
    const slug = editing?.slug || slugify(title);

    const payload = {
      slug,
      title,
      category: String(form.get("category") || ""),
      duration: String(form.get("duration") || ""),
      price: String(form.get("price") || ""),
      blurb: String(form.get("blurb") || ""),
      motif: String(form.get("motif") || "sun"),
      imageUrl: String(form.get("imageUrl") || "") || undefined,
      highlights: String(form.get("highlights") || "")
        .split(",")
        .map((h) => h.trim())
        .filter(Boolean),
      // Full itinerary fields — only meaningful once "Add full itinerary" is expanded
      heroTitle: String(form.get("heroTitle") || "") || undefined,
      intro: String(form.get("intro") || "") || undefined,
      overview: String(form.get("overview") || "") || undefined,
      bestFor: String(form.get("bestFor") || "") || undefined,
      groupSize: String(form.get("groupSize") || "") || undefined,
      physicalLevel: String(form.get("physicalLevel") || "") || undefined,
      destinationsCovered: String(form.get("destinationsCovered") || "") || undefined,
      hotelRecommendation: String(form.get("hotelRecommendation") || "") || undefined,
      transportation: String(form.get("transportation") || "") || undefined,
      meals: String(form.get("meals") || "") || undefined,
      included: linesToArray(String(form.get("included") || "")),
      excluded: linesToArray(String(form.get("excluded") || "")),
      optionalExperiences: linesToArray(String(form.get("optionalExperiences") || "")),
      itinerary: showFullBuilder && days.length > 0 ? days : undefined,
      tourFaqs: showFullBuilder && faqs.length > 0 ? faqs : undefined,
    };

    try {
      if (editing) {
        await updateCustomTour(editing.id, payload);
      } else {
        await addCustomTour(payload);
      }
      resetForm(e.target as HTMLFormElement);
      load();
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Could not save tour.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this tour listing?")) return;
    setDeletingId(id);
    try {
      await deleteCustomTour(id);
      setTours((t) => t.filter((x) => x.id !== id));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Could not delete tour.");
    } finally {
      setDeletingId(null);
    }
  }

  function updateDay(index: number, field: keyof CustomItineraryDay, value: string) {
    setDays((d) => d.map((day, i) => (i === index ? { ...day, [field]: value } : day)));
  }

  function addDay() {
    setDays((d) => [...d, emptyDay(d.length + 1)]);
  }

  function removeDay(index: number) {
    setDays((d) => d.filter((_, i) => i !== index).map((day, i) => ({ ...day, day: i + 1 })));
  }

  function addFaq() {
    setFaqs((f) => [...f, { q: "", a: "" }]);
  }

  function updateFaq(index: number, field: keyof CustomTourFAQ, value: string) {
    setFaqs((f) => f.map((item, i) => (i === index ? { ...item, [field]: value } : item)));
  }

  function removeFaq(index: number) {
    setFaqs((f) => f.filter((_, i) => i !== index));
  }

  return (
    <div>
      {/* Main tour category management */}
      <div className="rounded-2xl border border-forest/10 bg-white p-6">
        <h3 className="font-display text-lg text-forest-dark">Main Tour Types</h3>
        <p className="mt-1 text-xs text-ink/50">
          The 9 built-in types (Luxury, General, Family, etc.) are always available. Add a
          brand-new one here if you need a category outside those — or type an{" "}
          <strong>existing</strong> name (e.g. exactly &quot;Luxury Tours&quot;) with just a photo
          URL to set that card&apos;s photo without creating a duplicate.
        </p>
        <form onSubmit={handleAddCategory} className="mt-4 flex flex-wrap gap-3">
          <input
            name="categoryName"
            placeholder="Category name (new, or an existing one to set its photo)"
            required
            className="flex-1 rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
          />
          <select name="categoryMotif" className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none">
            {MOTIFS.map((m) => (
              <option key={m} value={m}>{m} illustration</option>
            ))}
          </select>
          <input
            name="categoryImageUrl"
            type="url"
            placeholder="Photo URL (optional)"
            className="flex-1 rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            disabled={addingCategory}
            className="flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-white hover:bg-forest-light disabled:opacity-70"
          >
            {addingCategory ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
            Save Type
          </button>
        </form>
        {extraCategories.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {extraCategories.map((c) => (
              <span key={c.id} className="flex items-center gap-2 rounded-full bg-mist px-3 py-1.5 text-xs text-forest-dark">
                {c.name}{c.imageUrl && " · has photo"}
                <button onClick={() => handleDeleteCategory(c.id)} className="text-red-400 hover:text-red-600" aria-label="Remove category">
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* One-time import of the built-in tours so they become editable here */}
      <div className="mt-4 rounded-2xl border border-forest/10 bg-white p-6">
        <h3 className="font-display text-lg text-forest-dark">Edit the Original Built-in Tours</h3>
        <p className="mt-1 text-xs text-ink/50">
          The 45 tours your site launched with live in code, so they don&apos;t appear below by
          default. Click this once to copy them into Firestore — after that, they&apos;ll show in
          the list below with full Edit/Delete controls, and your edits will override the
          built-in version on the live site.
        </p>
        <button
          onClick={handleImportBuiltIn}
          disabled={seeding}
          className="mt-4 flex items-center gap-2 rounded-full border border-forest px-5 py-2.5 text-sm font-medium text-forest-dark hover:bg-forest hover:text-white disabled:opacity-70"
        >
          {seeding ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
          Import Built-in Tours for Editing
        </button>
        {seedMessage && <p className="mt-3 text-xs text-forest">{seedMessage}</p>}
      </div>

      <form onSubmit={handleSubmit} className="mt-4 rounded-2xl border border-forest/10 bg-white p-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg text-forest-dark">
            {editing ? `Edit Tour — ${editing.title}` : "Add a Tour"}
          </h3>
          {editing && (
            <button
              type="button"
              onClick={() => resetForm()}
              className="flex items-center gap-1 text-xs text-ink/50 hover:text-forest-dark"
            >
              <X className="h-3.5 w-3.5" /> Cancel edit
            </button>
          )}
        </div>

        {/* Basic fields — always shown, matches a "sub-tour" card in listings */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            name="title"
            defaultValue={editing?.title}
            placeholder="Tour title (e.g. 6 Day Beach Escape)"
            required
            className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
          />
          <select
            name="category"
            defaultValue={editing?.category ?? ""}
            required
            className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
          >
            <option value="">Select category (Main Tour Type)</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <input
            name="duration"
            defaultValue={editing?.duration}
            placeholder="Duration (e.g. 6 Days / 5 Nights)"
            required
            className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
          />
          <input
            name="price"
            defaultValue={editing?.price}
            placeholder="Price (e.g. From $1,500 pp)"
            required
            className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
          />
          <select
            name="motif"
            defaultValue={editing?.motif ?? "sun"}
            className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
          >
            {MOTIFS.map((m) => (
              <option key={m} value={m}>{m} illustration</option>
            ))}
          </select>
          <input
            name="highlights"
            defaultValue={editing?.highlights.join(", ")}
            placeholder="Highlights, comma-separated"
            className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
          />
          <input
            name="imageUrl"
            type="url"
            defaultValue={editing?.imageUrl}
            placeholder="Photo URL (optional — leave blank to use the illustration)"
            className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none sm:col-span-2"
          />
          <p className="text-xs text-ink/45 sm:col-span-2">
            No link yet? Upload the photo free at{" "}
            <a href="https://imgbb.com/" target="_blank" rel="noopener noreferrer" className="text-gold-dark underline hover:text-forest-dark">
              imgbb.com
            </a>{" "}
            (no account needed), then copy its <strong>&quot;Direct link&quot;</strong> here.
          </p>
        </div>
        <textarea
          name="blurb"
          defaultValue={editing?.blurb}
          placeholder="Short description (shown on the tour card)"
          rows={2}
          required
          className="mt-4 w-full rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none"
        />

        {/* Toggle: full itinerary builder */}
        <button
          type="button"
          onClick={() => setShowFullBuilder((v) => !v)}
          className="mt-5 flex items-center gap-2 text-sm font-medium text-forest-dark hover:text-gold-dark"
        >
          {showFullBuilder ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          {showFullBuilder ? "Hide full itinerary builder" : "Add full itinerary (gives this tour its own /tours page, like the built-in tours)"}
        </button>

        {showFullBuilder && (
          <div className="mt-5 space-y-5 border-t border-forest/10 pt-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input name="heroTitle" defaultValue={editing?.heroTitle} placeholder="Hero title (big heading on the tour page)" className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none sm:col-span-2" />
              <textarea name="intro" defaultValue={editing?.intro} placeholder="Intro paragraph" rows={2} className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none sm:col-span-2" />
              <textarea name="overview" defaultValue={editing?.overview} placeholder="Overview paragraph" rows={2} className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none sm:col-span-2" />
              <input name="bestFor" defaultValue={editing?.bestFor} placeholder="Best For (e.g. Couples, families)" className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none" />
              <input name="groupSize" defaultValue={editing?.groupSize} placeholder="Group Size" className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none" />
              <input name="physicalLevel" defaultValue={editing?.physicalLevel} placeholder="Physical Level" className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none" />
              <input name="destinationsCovered" defaultValue={editing?.destinationsCovered} placeholder="Destinations Covered (e.g. Colombo → Kandy → Ella)" className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none" />
            </div>

            {/* Day-by-day itinerary */}
            <div>
              <div className="flex items-center justify-between">
                <h4 className="font-display text-base text-forest-dark">Day-by-Day Itinerary</h4>
                <button type="button" onClick={addDay} className="flex items-center gap-1 text-xs font-medium text-forest-dark hover:text-gold-dark">
                  <Plus className="h-3.5 w-3.5" /> Add Day
                </button>
              </div>
              <div className="mt-3 space-y-3">
                {days.map((day, i) => (
                  <div key={i} className="rounded-xl bg-mist p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-forest-dark">Day {day.day}</span>
                      <button type="button" onClick={() => removeDay(i)} className="text-red-400 hover:text-red-600">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <input
                      value={day.title}
                      onChange={(e) => updateDay(i, "title", e.target.value)}
                      placeholder="Day title (e.g. Sigiriya Rock Fortress)"
                      className="mt-2 w-full rounded-lg border border-forest/20 px-3 py-2 text-sm focus:border-gold focus:outline-none"
                    />
                    <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      <textarea value={day.morning} onChange={(e) => updateDay(i, "morning", e.target.value)} placeholder="Morning" rows={2} className="rounded-lg border border-forest/20 px-3 py-2 text-sm focus:border-gold focus:outline-none" />
                      <textarea value={day.afternoon} onChange={(e) => updateDay(i, "afternoon", e.target.value)} placeholder="Afternoon" rows={2} className="rounded-lg border border-forest/20 px-3 py-2 text-sm focus:border-gold focus:outline-none" />
                      <textarea value={day.evening} onChange={(e) => updateDay(i, "evening", e.target.value)} placeholder="Evening" rows={2} className="rounded-lg border border-forest/20 px-3 py-2 text-sm focus:border-gold focus:outline-none" />
                      <input value={day.overnight} onChange={(e) => updateDay(i, "overnight", e.target.value)} placeholder="Overnight (hotel/location)" className="rounded-lg border border-forest/20 px-3 py-2 text-sm focus:border-gold focus:outline-none" />
                    </div>
                  </div>
                ))}
                {days.length === 0 && <p className="text-xs text-ink/50">No days added yet — click &quot;Add Day&quot;.</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <input name="hotelRecommendation" defaultValue={editing?.hotelRecommendation} placeholder="Hotel Recommendation" className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none" />
              <input name="transportation" defaultValue={editing?.transportation} placeholder="Transportation" className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none" />
              <input name="meals" defaultValue={editing?.meals} placeholder="Meals" className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <label className="mb-1 block text-xs text-ink/50">Included (one per line)</label>
                <textarea name="included" defaultValue={editing?.included?.join("\n")} rows={4} className="w-full rounded-lg border border-forest/20 px-3 py-2 text-sm focus:border-gold focus:outline-none" />
              </div>
              <div>
                <label className="mb-1 block text-xs text-ink/50">Excluded (one per line)</label>
                <textarea name="excluded" defaultValue={editing?.excluded?.join("\n")} rows={4} className="w-full rounded-lg border border-forest/20 px-3 py-2 text-sm focus:border-gold focus:outline-none" />
              </div>
              <div>
                <label className="mb-1 block text-xs text-ink/50">Optional Experiences (one per line)</label>
                <textarea name="optionalExperiences" defaultValue={editing?.optionalExperiences?.join("\n")} rows={4} className="w-full rounded-lg border border-forest/20 px-3 py-2 text-sm focus:border-gold focus:outline-none" />
              </div>
            </div>

            {/* FAQs */}
            <div>
              <div className="flex items-center justify-between">
                <h4 className="font-display text-base text-forest-dark">Tour FAQs</h4>
                <button type="button" onClick={addFaq} className="flex items-center gap-1 text-xs font-medium text-forest-dark hover:text-gold-dark">
                  <Plus className="h-3.5 w-3.5" /> Add FAQ
                </button>
              </div>
              <div className="mt-3 space-y-2">
                {faqs.map((faq, i) => (
                  <div key={i} className="flex gap-2 rounded-xl bg-mist p-3">
                    <div className="flex-1 space-y-2">
                      <input value={faq.q} onChange={(e) => updateFaq(i, "q", e.target.value)} placeholder="Question" className="w-full rounded-lg border border-forest/20 px-3 py-2 text-sm focus:border-gold focus:outline-none" />
                      <textarea value={faq.a} onChange={(e) => updateFaq(i, "a", e.target.value)} placeholder="Answer" rows={2} className="w-full rounded-lg border border-forest/20 px-3 py-2 text-sm focus:border-gold focus:outline-none" />
                    </div>
                    <button type="button" onClick={() => removeFaq(i)} className="self-start text-red-400 hover:text-red-600">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
                {faqs.length === 0 && <p className="text-xs text-ink/50">No FAQs added yet.</p>}
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={saving}
          className="mt-5 flex items-center gap-2 rounded-full bg-forest px-6 py-2.5 text-sm font-medium text-white hover:bg-forest-light disabled:opacity-70"
        >
          {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
          {editing ? "Save Changes" : "Add Tour"}
        </button>
        {saveError && <p className="mt-3 rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-700">{saveError}</p>}
      </form>

      <div className="mt-8">
        <p className="text-sm text-ink/60">{tours.length} admin-added tours</p>

        {fetching && (
          <div className="mt-6 flex items-center gap-2 text-sm text-ink/60">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading...
          </div>
        )}

        {listError && <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{listError}</p>}

        {!fetching && !listError && (
          <div className="mt-4 space-y-3">
            {tours.map((t) => (
              <div key={t.id} className="flex items-start justify-between gap-4 rounded-2xl border border-forest/10 bg-white p-5">
                <div className="min-w-0">
                  <p className="text-xs text-gold-dark">{t.category}</p>
                  <p className="font-medium text-forest-dark">{t.title}</p>
                  <p className="mt-1 text-xs text-ink/50">{t.duration} · {t.price} · /tours/{t.slug}</p>
                  <p className="mt-2 text-sm text-ink/70">{t.blurb}</p>
                  {t.itinerary && t.itinerary.length > 0 && (
                    <p className="mt-1 text-xs text-forest">✓ Full itinerary ({t.itinerary.length} days)</p>
                  )}
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    onClick={() => startEdit(t)}
                    aria-label="Edit tour"
                    className="rounded-full border border-forest/15 p-2 text-forest-dark transition-colors hover:border-gold hover:text-gold-dark"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(t.id)}
                    disabled={deletingId === t.id}
                    aria-label="Delete tour"
                    className="rounded-full border border-red-200 p-2 text-red-500 transition-colors hover:bg-red-50 disabled:opacity-50"
                  >
                    {deletingId === t.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Trash2 className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            ))}
            {tours.length === 0 && (
              <p className="py-10 text-center text-sm text-ink/50">No admin-added tours yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
