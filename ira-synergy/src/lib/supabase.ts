import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase environment variables are missing. Database integrations will run on local mock fallbacks.");
}

// Fallback to placeholder dummy URL/key during build time if credentials are not configured,
// which prevents @supabase/supabase-js from throwing a validation error and crashing the build.
const dummyUrl = "https://placeholder-project-ref.supabase.co";
const dummyKey = "placeholder-anon-key";

// Use a custom fetch with a short timeout so that slow/unreachable Supabase
// never blocks page rendering. Pages will fall back to static data instantly.
const FETCH_TIMEOUT_MS = process.env.NODE_ENV === "development" ? 800 : 2000;

function fetchWithTimeout(url: string | URL | Request, options?: RequestInit): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  return fetch(url, {
    ...options,
    signal: controller.signal,
  }).finally(() => clearTimeout(timeout));
}

export const supabase = createClient(
  supabaseUrl || dummyUrl,
  supabaseAnonKey || dummyKey,
  {
    global: {
      fetch: fetchWithTimeout,
    },
  }
);

/**
 * Helper to race a Supabase query against a timeout.
 * Returns null if the query takes longer than `ms` milliseconds,
 * letting callers fall back to static data immediately.
 */
export async function withTimeout<T>(
  promise: Promise<T>,
  ms: number = FETCH_TIMEOUT_MS
): Promise<T | null> {
  try {
    const result = await Promise.race([
      promise,
      new Promise<null>((resolve) => setTimeout(() => resolve(null), ms)),
    ]);
    return result;
  } catch {
    return null;
  }
}
