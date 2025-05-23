
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('calc-cache').then((cache) => {
      return cache.addAll([
        '/', '/index.html',
        '/css/style.css',
        '/js/script.js',
        '/manifest.json',
        '/assets/click.mp3',
        '/assets/icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
