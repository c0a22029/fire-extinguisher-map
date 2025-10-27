const CACHE_NAME = 'fire-extinguisher-map-v1';

self.addEventListener('install', (event) => {
  console.log('Service Worker インストール完了');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});