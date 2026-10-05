"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Loader2, Trash2, Plus } from "lucide-react";
import { getGalleryItems, addGalleryItem, deleteGalleryItem, type GalleryItem } from "@/lib/firebase";

export default function AdminGallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");
  const [adding, setAdding] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function load() {
    setFetching(true);
    getGalleryItems()
      .then(setItems)
      .catch((err) => setError(err instanceof Error ? err.message : "Could not load gallery."))
      .finally(() => setFetching(false));
  }

  useEffect(load, []);

  async function handleAdd(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAdding(true);
    setError("");
    const form = new FormData(e.currentTarget);
    try {
      await addGalleryItem({
        title: String(form.get("title") || ""),
        imageUrl: String(form.get("imageUrl") || ""),
        category: String(form.get("category") || ""),
      });
      (e.target as HTMLFormElement).reset();
      load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not add photo.");
    } finally {
      setAdding(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Remove this photo from the gallery?")) return;
    setDeletingId(id);
    try {
      await deleteGalleryItem(id);
      setItems((its) => its.filter((i) => i.id !== id));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Could not delete photo.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div>
      <form onSubmit={handleAdd} className="rounded-2xl border border-forest/10 bg-white p-6">
        <h3 className="font-display text-lg text-forest-dark">Add a Photo</h3>
        <p className="mt-1 text-xs text-ink/50">
          Paste a link to an already-hosted image. Don&apos;t have one? Upload your photo free at{" "}
          <a href="https://imgbb.com/" target="_blank" rel="noopener noreferrer" className="text-gold-dark underline hover:text-forest-dark">
            imgbb.com
          </a>{" "}
          — no account needed — then copy its <strong>&quot;Direct link&quot;</strong> (ends in .jpg/.png) and paste it below.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <input
            name="title"
            placeholder="Title (e.g. Sigiriya Sunrise)"
            required
            className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none sm:col-span-1"
          />
          <input
            name="imageUrl"
            placeholder="Image URL (https://...)"
            required
            type="url"
            className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none sm:col-span-1"
          />
          <input
            name="category"
            placeholder="Category (e.g. Sigiriya, Kandy)"
            className="rounded-lg border border-forest/20 px-4 py-2.5 text-sm focus:border-gold focus:outline-none sm:col-span-1"
          />
        </div>
        <button
          type="submit"
          disabled={adding}
          className="mt-4 flex items-center gap-2 rounded-full bg-forest px-6 py-2.5 text-sm font-medium text-white hover:bg-forest-light disabled:opacity-70"
        >
          {adding ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
          Add Photo
        </button>
        {error && <p className="mt-3 rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-700">{error}</p>}
      </form>

      <div className="mt-8">
        <p className="text-sm text-ink/60">{items.length} photos in gallery</p>

        {fetching && (
          <div className="mt-6 flex items-center gap-2 text-sm text-ink/60">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading...
          </div>
        )}

        {!fetching && (
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-xl border border-forest/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.imageUrl} alt={item.title} className="h-32 w-full object-cover" />
                <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/70 via-transparent to-transparent p-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <button
                    onClick={() => handleDelete(item.id)}
                    disabled={deletingId === item.id}
                    aria-label="Delete photo"
                    className="ml-auto rounded-full bg-white/90 p-1.5 text-red-500 hover:bg-white"
                  >
                    {deletingId === item.id ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    ) : (
                      <Trash2 className="h-3.5 w-3.5" />
                    )}
                  </button>
                  <p className="truncate text-xs font-medium text-white">{item.title}</p>
                </div>
              </div>
            ))}
            {items.length === 0 && (
              <p className="col-span-full py-10 text-center text-sm text-ink/50">
                No photos added yet — the public gallery will show the default illustration placeholders until you add some.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
