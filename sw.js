self.addEventListener('install', e=>{
  e.waitUntil(caches.open('wordlon-v2').then(c=>c.addAll(['./','./index.html','./manifest.webmanifest','./words-5-clean.txt'])));
});
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)));
});