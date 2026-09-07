const CACHE='grupos-pequenos-v10';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg','./assets/logo-itin.png','./assets/grupo-casa.jpeg','./assets/oracion-cuidado.jpeg','./assets/evaluacion.jpeg','./assets/jesus-discipulos.jpeg','./assets/formacion-lider.jpeg','./assets/grupo-participacion.jpeg','./assets/supervision.jpeg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(x=>x||fetch(e.request).then(r=>{const q=r.clone();caches.open(CACHE).then(c=>c.put(e.request,q));return r}).catch(()=>caches.match('./index.html'))))});
