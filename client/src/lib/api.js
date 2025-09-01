// use env base and always return JSON
const BASE = import.meta.env.VITE_API_BASE || "";
export async function fetchJSON(path, options = {}) {
  const url = path.startsWith("http") ? path : `${BASE}${path}`;
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API ${res.status} ${res.statusText} :: ${text}`);
  }
  return res.json();
}
