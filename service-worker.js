var cacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './Formulario.html',
        './acompanhar-incidentes.html',

        './assets/css/formulario.css',
        './assets/css/layout.css',
        './assets/css/incidentes.css',

        './formulario.json',
        './assets/js/script.js',
        './assets/js/script-formulario.js',

        './assets/img/incidentes/img-01.jpg',
        './assets/img/incidentes/img-02.jpg',
        './assets/img/incidentes/img-03.jpg',
        './assets/img/incidentes/img-04.jpg',
        './assets/img/incidentes/img-05.jpg',
        './assets/img/incidentes/img-06.jpg',
        './assets/img/incidentes/img-07.jpg',

        './assets/img/icon-48-48.png',
        './assets/img/icon-72-72.png',
        './assets/img/icon-96-96.png',
        './assets/img/icon-144-144.png',
        './assets/img/icon-192-192.png',
        './assets/img/icon-512-512.png',

        './assets/img/icons-00.webp',
        './assets/img/icons-01.webp',
        './assets/img/icons-02.webp',
        './assets/img/icons-03.webp',
        './assets/img/Logo-1.webp'
      ]))
  );
});
self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
  caches.match(event.request)
    .then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
   );*/

});

