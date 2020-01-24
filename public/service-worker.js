const CACHE_NAME = 'v1'
const urlsToCache = [
  '/',
  'https://use.typekit.net/jzw6tzs.css'
]

self.addEventListener('install', event => {
  const preLoaded = caches.open(CACHE_NAME)
    .then(cache => cache.addAll(urlsToCache))
  event.waitUntil(preLoaded)
})

self.addEventListener('fetch', event => {
  const response = caches.match(event.request)
    .then(match => match || fetch(event.request))
  event.respondWith(response)
})
