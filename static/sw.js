self.addEventListener('install', function(e) {
  console.log('Service Worker installato');
  e.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/flowers',
        '/static/style.css',
        '/static/manifest.json',
        '/static/script.js',
        '/static/icons/icon-192.png',
        '/static/icons/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
