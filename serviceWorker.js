let CACHE_NAME = 'TodoList';
const urlsToCache = ['/TodoList/', '/TodoList/index.html'];
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(response => {
        if (response) {
            return response;
        }
        return fetch(e.request);
    }));
    self.skipWaiting();
});