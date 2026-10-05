import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  serverTimestamp,
  type Firestore,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  updateProfile,
  type Auth,
  type User,
} from "firebase/auth";

// Fill these in with your Firebase project's config, ideally via
// environment variables (see .env.local.example). The site will still
// build and render without them — only the contact form, login/signup
// and dashboards require valid credentials at runtime.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Add the email addresses that should have admin access to
// NEXT_PUBLIC_ADMIN_EMAILS in .env.local, comma-separated,
// e.g. NEXT_PUBLIC_ADMIN_EMAILS=you@goldenpalmceylon.com,partner@goldenpalmceylon.com
export const ADMIN_EMAILS = (process.env.NEXT_PUBLIC_ADMIN_EMAILS || "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

export function isAdminEmail(email?: string | null) {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase());
}

function getFirebaseApp(): FirebaseApp | null {
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) return null;
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

function getDb(): Firestore | null {
  const app = getFirebaseApp();
  return app ? getFirestore(app) : null;
}

export function getFirebaseAuth(): Auth | null {
  const app = getFirebaseApp();
  return app ? getAuth(app) : null;
}

const CONFIG_ERROR =
  "Firebase is not configured yet. Add your project credentials to .env.local (see .env.local.example).";

export type InquiryPayload = {
  fullName: string;
  email: string;
  whatsapp: string;
  country: string;
  arrivalDate: string;
  departureDate: string;
  travelers: string;
  tourType: string;
  message: string;
  pickupLocation?: string;
  nationality?: string;
  adults?: string;
  children?: string;
};

export type Inquiry = InquiryPayload & {
  id: string;
  userId: string | null;
  createdAt: Date | null;
};

/**
 * Saves a tour inquiry to the `inquiries` collection in Firestore.
 * Throws if Firebase credentials are not configured or the write fails,
 * so the caller can show an appropriate error to the visitor.
 */
export async function submitInquiry(payload: InquiryPayload, userId: string | null = null) {
  const db = getDb();
  if (!db) throw new Error(CONFIG_ERROR);
  await addDoc(collection(db, "inquiries"), {
    ...payload,
    userId,
    createdAt: serverTimestamp(),
  });
}

/** Fetches all enquiries submitted by a given signed-in user's email. */
export async function getInquiriesByEmail(email: string): Promise<Inquiry[]> {
  const db = getDb();
  if (!db) throw new Error(CONFIG_ERROR);
  const q = query(collection(db, "inquiries"), where("email", "==", email), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => {
    const data = d.data();
    return {
      id: d.id,
      fullName: data.fullName ?? "",
      email: data.email ?? "",
      whatsapp: data.whatsapp ?? "",
      country: data.country ?? "",
      arrivalDate: data.arrivalDate ?? "",
      departureDate: data.departureDate ?? "",
      travelers: data.travelers ?? "",
      tourType: data.tourType ?? "",
      message: data.message ?? "",
      pickupLocation: data.pickupLocation ?? "",
      nationality: data.nationality ?? "",
      adults: data.adults ?? "",
      children: data.children ?? "",
      userId: data.userId ?? null,
      createdAt: data.createdAt?.toDate?.() ?? null,
    };
  });
}

/** Fetches every enquiry — used by the admin dashboard only. */
export async function getAllInquiries(): Promise<Inquiry[]> {
  const db = getDb();
  if (!db) throw new Error(CONFIG_ERROR);
  const q = query(collection(db, "inquiries"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => {
    const data = d.data();
    return {
      id: d.id,
      fullName: data.fullName ?? "",
      email: data.email ?? "",
      whatsapp: data.whatsapp ?? "",
      country: data.country ?? "",
      arrivalDate: data.arrivalDate ?? "",
      departureDate: data.departureDate ?? "",
      travelers: data.travelers ?? "",
      tourType: data.tourType ?? "",
      message: data.message ?? "",
      pickupLocation: data.pickupLocation ?? "",
      nationality: data.nationality ?? "",
      adults: data.adults ?? "",
      children: data.children ?? "",
      userId: data.userId ?? null,
      createdAt: data.createdAt?.toDate?.() ?? null,
    };
  });
}

/** Creates a customer account with email/password and sets their display name. */
export async function signUp(name: string, email: string, password: string): Promise<User> {
  const auth = getFirebaseAuth();
  if (!auth) throw new Error(CONFIG_ERROR);
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  if (name) await updateProfile(credential.user, { displayName: name });
  return credential.user;
}

export async function signIn(email: string, password: string): Promise<User> {
  const auth = getFirebaseAuth();
  if (!auth) throw new Error(CONFIG_ERROR);
  const credential = await signInWithEmailAndPassword(auth, email, password);
  return credential.user;
}

export async function signOutUser() {
  const auth = getFirebaseAuth();
  if (!auth) return;
  await firebaseSignOut(auth);
}

export function subscribeToAuthChanges(callback: (user: User | null) => void) {
  const auth = getFirebaseAuth();
  if (!auth) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
}

export type { User };

// ---------------------------------------------------------------------
// Guest reviews (public collection: "reviews")
// ---------------------------------------------------------------------

export type ReviewPayload = {
  name: string;
  country: string;
  rating: number; // 1–5
  tourTitle: string;
  comment: string;
  imageUrls?: string[];
};

export type Review = ReviewPayload & {
  id: string;
  createdAt: Date | null;
};

/** Submits a guest review to the public `reviews` collection. Anyone can write; there is no login requirement. */
export async function submitReview(payload: ReviewPayload) {
  const db = getDb();
  if (!db) throw new Error(CONFIG_ERROR);
  await addDoc(collection(db, "reviews"), {
    ...payload,
    createdAt: serverTimestamp(),
  });
}

/** Fetches the most recent guest reviews for display on the Reviews page and homepage. */
export async function getReviews(maxCount = 20): Promise<Review[]> {
  const db = getDb();
  if (!db) return [];
  try {
    const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"), limit(maxCount));
    const snap = await getDocs(q);
    return snap.docs.map((d) => {
      const data = d.data();
      return {
        id: d.id,
        name: data.name ?? "",
        country: data.country ?? "",
        rating: data.rating ?? 5,
        tourTitle: data.tourTitle ?? "",
        comment: data.comment ?? "",
        imageUrls: Array.isArray(data.imageUrls) ? data.imageUrls : [],
        createdAt: data.createdAt?.toDate?.() ?? null,
      };
    });
  } catch {
    // Firestore not configured, or no reviews collection yet — fail quietly
    // so pages can fall back to curated testimonials.
    return [];
  }
}

/** Admin-only: permanently deletes a review. Requires the signed-in user's UID to exist in the `admins` collection (see firestore.rules). */
export async function deleteReview(id: string) {
  const db = getDb();
  if (!db) throw new Error(CONFIG_ERROR);
  await deleteDoc(doc(db, "reviews", id));
}

// ---------------------------------------------------------------------
// Gallery (public read, admin-only write: collection "gallery")
// ---------------------------------------------------------------------

export type GalleryItemPayload = {
  title: string;
  imageUrl: string;
  category: string;
};

export type GalleryItem = GalleryItemPayload & {
  id: string;
  createdAt: Date | null;
};

export async function getGalleryItems(): Promise<GalleryItem[]> {
  const db = getDb();
  if (!db) return [];
  try {
    const q = query(collection(db, "gallery"), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    return snap.docs.map((d) => {
      const data = d.data();
      return {
        id: d.id,
        title: data.title ?? "",
        imageUrl: data.imageUrl ?? "",
        category: data.category ?? "",
        createdAt: data.createdAt?.toDate?.() ?? null,
      };
    });
  } catch {
    return [];
  }
}

/** Admin-only: adds a gallery photo by image URL (no file upload — paste a hosted image link). */
export async function addGalleryItem(payload: GalleryItemPayload) {
  const db = getDb();
  if (!db) throw new Error(CONFIG_ERROR);
  await addDoc(collection(db, "gallery"), { ...payload, createdAt: serverTimestamp() });
}

/** Admin-only: removes a gallery photo. */
export async function deleteGalleryItem(id: string) {
  const db = getDb();
  if (!db) throw new Error(CONFIG_ERROR);
  await deleteDoc(doc(db, "gallery", id));
}

// ---------------------------------------------------------------------
// Categories (public read, admin-only write: collection "categories")
// Lets an admin add a brand-new MAIN tour type (e.g. "Beach Tours") on
// top of the 9 built-in ones (DEFAULT_CATEGORIES in lib/data.ts).
// ---------------------------------------------------------------------

export type CategoryPayload = { name: string; motif: string; imageUrl?: string };
export type Category = CategoryPayload & { id: string };

export async function getCategories(): Promise<Category[]> {
  const db = getDb();
  if (!db) return [];
  try {
    const snap = await getDocs(collection(db, "categories"));
    return snap.docs.map((d) => {
      const data = d.data();
      return {
        id: d.id,
        name: (data.name as string) ?? "",
        motif: (data.motif as string) ?? "sun",
        imageUrl: (data.imageUrl as string) || undefined,
      };
    });
  } catch {
    return [];
  }
}

export async function addCategory(payload: CategoryPayload) {
  const db = getDb();
  if (!db) throw new Error(CONFIG_ERROR);
  await addDoc(collection(db, "categories"), stripUndefined(payload));
}

export async function deleteCategory(id: string) {
  const db = getDb();
  if (!db) throw new Error(CONFIG_ERROR);
  await deleteDoc(doc(db, "categories", id));
}

// ---------------------------------------------------------------------
// Custom tours (public read, admin-only write: collection "customTours")
// These supplement the built-in tours defined in src/lib/data.ts and
// support the SAME full itinerary structure (day-by-day plan, hotel,
// meals, included/excluded, FAQs) so they get a real /tours/[slug] page
// just like the hand-written tours.
// ---------------------------------------------------------------------

export type CustomItineraryDay = {
  day: number;
  title: string;
  morning: string;
  afternoon: string;
  evening: string;
  overnight: string;
};

export type CustomTourFAQ = { q: string; a: string };

export type CustomTourPayload = {
  slug: string;
  title: string;
  category: string;
  duration: string;
  price: string;
  blurb: string;
  motif: string; // "mountain" | "wave" | "temple" | "rock" | "leaf" | "sun"
  imageUrl?: string; // optional real photo URL; falls back to the Motif illustration when unset
  highlights: string[];
  heroTitle?: string;
  intro?: string;
  overview?: string;
  bestFor?: string;
  groupSize?: string;
  physicalLevel?: string;
  destinationsCovered?: string;
  itinerary?: CustomItineraryDay[];
  hotelRecommendation?: string;
  transportation?: string;
  meals?: string;
  included?: string[];
  excluded?: string[];
  optionalExperiences?: string[];
  tourFaqs?: CustomTourFAQ[];
};

export type CustomTour = CustomTourPayload & {
  id: string;
  createdAt: Date | null;
};

function mapCustomTourDoc(id: string, data: Record<string, unknown>): CustomTour {
  return {
    id,
    slug: (data.slug as string) ?? id,
    title: (data.title as string) ?? "",
    category: (data.category as string) ?? "",
    duration: (data.duration as string) ?? "",
    price: (data.price as string) ?? "",
    blurb: (data.blurb as string) ?? "",
    motif: (data.motif as string) ?? "sun",
    imageUrl: (data.imageUrl as string) || undefined,
    highlights: Array.isArray(data.highlights) ? (data.highlights as string[]) : [],
    heroTitle: data.heroTitle as string | undefined,
    intro: data.intro as string | undefined,
    overview: data.overview as string | undefined,
    bestFor: data.bestFor as string | undefined,
    groupSize: data.groupSize as string | undefined,
    physicalLevel: data.physicalLevel as string | undefined,
    destinationsCovered: data.destinationsCovered as string | undefined,
    itinerary: Array.isArray(data.itinerary) ? (data.itinerary as CustomItineraryDay[]) : undefined,
    hotelRecommendation: data.hotelRecommendation as string | undefined,
    transportation: data.transportation as string | undefined,
    meals: data.meals as string | undefined,
    included: Array.isArray(data.included) ? (data.included as string[]) : undefined,
    excluded: Array.isArray(data.excluded) ? (data.excluded as string[]) : undefined,
    optionalExperiences: Array.isArray(data.optionalExperiences) ? (data.optionalExperiences as string[]) : undefined,
    tourFaqs: Array.isArray(data.tourFaqs) ? (data.tourFaqs as CustomTourFAQ[]) : undefined,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createdAt: (data.createdAt as any)?.toDate?.() ?? null,
  };
}

/** Public, fails quietly (returns []) — safe for site-facing pages like /tours and the homepage. */
export async function getCustomTours(): Promise<CustomTour[]> {
  const db = getDb();
  if (!db) return [];
  try {
    const q = query(collection(db, "customTours"), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    return snap.docs.map((d) => mapCustomTourDoc(d.id, d.data()));
  } catch {
    return [];
  }
}

/** Admin-only: same as getCustomTours but throws on failure, so the dashboard can show the real error instead of silently appearing empty. */
export async function getCustomToursAdmin(): Promise<CustomTour[]> {
  const db = getDb();
  if (!db) throw new Error(CONFIG_ERROR);
  const q = query(collection(db, "customTours"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => mapCustomTourDoc(d.id, d.data()));
}

/** Looks up a single custom tour by its slug — used by /tours/[slug] for admin-added tours not known at build time. */
export async function getCustomTourBySlug(slug: string): Promise<CustomTour | null> {
  const db = getDb();
  if (!db) return null;
  try {
    const q = query(collection(db, "customTours"), where("slug", "==", slug), limit(1));
    const snap = await getDocs(q);
    if (snap.empty) return null;
    const d = snap.docs[0];
    return mapCustomTourDoc(d.id, d.data());
  } catch {
    return null;
  }
}

/** Firestore rejects `undefined` field values outright — this recursively drops them (and any within nested objects/arrays) before a write. */
function stripUndefined<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((v) => stripUndefined(v)) as unknown as T;
  }
  if (value && typeof value === "object" && !(value instanceof Date)) {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (v !== undefined) out[k] = stripUndefined(v);
    }
    return out as T;
  }
  return value;
}

export async function addCustomTour(payload: CustomTourPayload) {
  const db = getDb();
  if (!db) throw new Error(CONFIG_ERROR);
  await addDoc(collection(db, "customTours"), { ...stripUndefined(payload), createdAt: serverTimestamp() });
}

export async function updateCustomTour(id: string, payload: CustomTourPayload) {
  const db = getDb();
  if (!db) throw new Error(CONFIG_ERROR);
  await updateDoc(doc(db, "customTours", id), stripUndefined(payload));
}

export async function deleteCustomTour(id: string) {
  const db = getDb();
  if (!db) throw new Error(CONFIG_ERROR);
  await deleteDoc(doc(db, "customTours", id));
}
