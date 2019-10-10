---
title: slide 29
color: blue
type: code
---
### Fetch Handling Revised, Part 4

```javascript
// This is inside the fetch event listener
if (request.headers.get('Accept').includes('image')) {
    fetchEvent.respondWith(
        caches.match(request)
        .then(response => {
            if (response) { //It's in the cache!
                fetchEvent.waitUntil(
                    fetch(request) // Grab a fresh copy
                    .then(responseFromFetch => {
                        return stash(IMAGE_CACHE, request, responseFromFetch)
                    })
                )
                return responseFromCache
            }
```
