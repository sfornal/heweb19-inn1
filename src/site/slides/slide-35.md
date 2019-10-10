---
title: slide 35
color: blue
type: code
---
### Fetch Handling Revised, Part 6

```javascript
// This is inside the event listener
if (request.headers.get('Accept').includes('text/html')) {
  event.respondWith(
    fetch(request)
      .then(response => { // Got it, so cache it
        event.waitUntil(stash(PAGE_CACHE, request, response.clone()))
        return response
      })
      .catch(() => { // Network failed, fall back to cache
        caches.match(request)
          .then(response => {
            return response || caches.match('/offline/')
          })
      })
  )
}
```
