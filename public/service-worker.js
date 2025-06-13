/* eslint-disable no-restricted-globals */

self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  self.registration.unregister().then(() => {
    return self.clients.matchAll();
  }).then(clients => {
    clients.forEach(client => client.navigate(client.url));
  });
});


