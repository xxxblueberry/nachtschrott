const CACHE = "nachtschrott-stage9-1";
self.addEventListener("install", (event) =>
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) =>
        cache.addAll([
          "./",
          "./index.html",
          "./manifest.webmanifest",
          "./icon.svg",
          "./icon-192.png",
          "./icon-512.png",
          "./licenses/pixelfx-LICENSE.txt",
        ]),
      )
      .then(() => self.skipWaiting()),
  ),
);
self.addEventListener("activate", (event) =>
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k.startsWith("nachtschrott-") && k !== CACHE)
            .map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  ),
);
self.addEventListener("fetch", (event) => {
  if (
    event.request.method !== "GET" ||
    new URL(event.request.url).origin !== location.origin
  )
    return;
  // HTML is always network-first and bypasses the HTTP cache, so a new deploy wins when online.
  const isPage =
    event.request.mode === "navigate" ||
    /\/(index\.html)?$/.test(new URL(event.request.url).pathname);
  event.respondWith(
    (isPage ? fetch(event.request.url, { cache: "no-store", credentials: "same-origin" }) : fetch(event.request))
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() =>
        caches
          .match(event.request)
          .then(
            (response) =>
              response ||
              (event.request.mode === "navigate"
                ? caches.match("./index.html")
                : Response.error()),
          ),
      ),
  );
});
