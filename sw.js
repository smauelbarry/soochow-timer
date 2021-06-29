var cacheName = 'hello-pwa';
var filesToCache = [
    '/',
    '/index.html',
    '/css/main.css',
    '/js/main.js',
    '/audio/bell2.pm3',
    '/images/bell.png',
    '/images/bg.jpg',
    '/images/pause.png',
    '/images/play.png',
    '/images/restart.png',
    '/images/soochowtitle.gif',
    '/images/stop.png',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
    self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
