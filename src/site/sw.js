const VER = 'v2'
const CACHE = 'heweb19-inn1' + VER
const FILES = [
    '/index.html',
    '/css/styles.css',
    '/images/celebrate.gif',
    '/images/librarian_dog.jpg',
]

self.addEventListener('install', event => {
    const primeCache = async () => {
        const cache = await caches.open(CACHE)
        await cache.addAll(FILES)
        return self.skipWaiting()
    }
    event.waitUntil(primeCache())
})

self.addEventListener('activate', event => {
    const purgeCaches = async () => {
        const names = await caches.keys()
        await Promise.all(names.map(name => {
            if (name !== CACHE) {
                return caches.delete(name)
            }
        }))
        return clients.claim()
    }
    event.waitUntil(purgeCaches())
})

self.addEventListener('fetch', (event) => {
    const req = event.request
    event.respondWith(
        caches.match(req)
            .then(resp => {
                if (resp) {
                    event.waitUntil(
                        fetch(req)
                            .then(resp => {
                                caches.open(CACHE)
                                    .then(cache => {
                                        return cache.put(req, resp)
                                    })
                            })
                    )
                    return resp
                }
                else {
                    return fetch(req)
                        .then(resp => {
                            const copy = resp.clone()
                            event.waitUntil(
                                caches.open(CACHE)
                                    .then(cache => {
                                        return cache.put(req, copy)
                                    })
                            )
                            return resp
                        })
                        .catch(() => caches.match('/index.html'))
                }
            })
    )
})
