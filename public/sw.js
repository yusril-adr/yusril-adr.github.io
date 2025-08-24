const CACHE_NAME = 'yusril-adr-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Essential resources to cache immediately
const staticAssets = [
  '/',
  '/manifest.json',
  '/images/favicon/web-app-manifest-192x192.png',
  '/images/favicon/web-app-manifest-512x512.png',
  '/images/icon.png',
  '/images/me.png',
  '/images/me-color.png',
  '/images/me-2.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(staticAssets);
      })
      .catch((error) => {
        console.error('Failed to cache static assets:', error);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - implement cache strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle same-origin requests
  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(request));
  }
});

// Cache First Strategy - for static assets
async function cacheFirst(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const fetchResponse = await fetch(request);
    
    // Cache successful responses
    if (fetchResponse.status === 200) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, fetchResponse.clone());
    }
    
    return fetchResponse;
  } catch (error) {
    console.error('Fetch failed, serving offline fallback:', error);
    
    // Return cached version or offline fallback
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // For HTML requests, return the cached home page as fallback
    if (request.headers.get('accept').includes('text/html')) {
      return caches.match('/');
    }
    
    // For other requests, return a basic offline response
    return new Response('Offline - Content not available', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}