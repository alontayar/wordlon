self.addEventListener('install', e=>{
  e.waitUntil(caches.open('wordlon-v4').then(c=>c.addAll(['./','./index.html','./manifest.webmanifest','./words-5-clean.txt','./Normal0.93-Regular.woff','./Normal0.93-Medium.woff','./Normal0.93-Bold.woff'])));
});
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)));
});