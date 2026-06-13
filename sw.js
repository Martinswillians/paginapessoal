// ── Service Worker — WAM.dev Portfolio ─────────────────
// Provides basic offline support via cache-first strategy

const CACHE_NAME = 'wam-portfolio-v1';
const CACHE_URLS = [
  './',
  './index.html',
  './cv.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css'
];

// ── INSTALL — pre-cache core assets ──────────────────────
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CACHE_URLS).catch(function(err) {
        console.warn('[SW] Cache addAll failed (non-critical):', err);
      });
    })
  );
  self.skipWaiting();
});

// ── ACTIVATE — clean old caches ──────────────────────────
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

// ── FETCH — cache-first, fallback to network, fallback to offline page ──
self.addEventListener('fetch', function(event) {
  // Skip non-GET requests and external API calls (GitHub, GA4, forms, etc.)
  if (event.request.method !== 'GET') return;

  var url = event.request.url;
  var skipDomains = [
    'api.github.com',
    'api.web3forms.com',
    'api.callmebot.com',
    'googletagmanager.com',
    'google-analytics.com',
    'thum.io',
    'openstreetmap.org',
    'hits.sh'
  ];
  if (skipDomains.some(function(d) { return url.indexOf(d) !== -1; })) {
    return; // let these go straight to network, no caching
  }

  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) return cached;

      return fetch(event.request).then(function(response) {
        // Cache successful same-origin or font/css responses
        if (response && response.status === 200) {
          var responseClone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      }).catch(function() {
        // Offline fallback for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
