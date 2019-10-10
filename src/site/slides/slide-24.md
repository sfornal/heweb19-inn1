---
title: slide 24
color: blue
type: code
---
### Install Event, Part 2

```javascript
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(ASSET_CACHE)
            .then(myCache => {
                return myCache.addAll( FILES_TO_CACHE )
            }) //end of open Promise
            .then(() => self.skipWaiting()) // This is cool!
    ) //end of waitUntil
})
```
