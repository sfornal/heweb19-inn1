---
title: slide 27
color: blue
type: general
---
### Activate Event

```javascript
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys() // Returns a Promise
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(name => {
                        if ( !CACHE_LIST.includes(name)) {
                            return caches.delete(name) // A Promise
                        }
                    }) //end of map()
                ) //end of Promise.all
            }) // End of keys Promise
            .then(() => clients.claim()) // This is cool!
    ) //end of waitUntil
})
```
