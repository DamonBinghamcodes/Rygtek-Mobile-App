self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('rygtek-cache-v1').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/script.js',
                '/Public/Rygtek Logo.png',
                '/working-load-limit.html',
                '/angle-dimensions.html',
                '/load-weight.html',
                '/crane-signals.html',
                '/inspection-records.html',
                '/contact.html'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
