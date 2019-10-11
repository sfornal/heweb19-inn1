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
      .then(resp => { // Got it, so cache it
        event.waitUntil(stash(PAGE_CACHE, request, resp.clone()))
        return resp
      })
      .catch(() => { // Network failed, fall back to cache
        caches.match(request)
          .then(resp => {
            return resp || caches.match('/offline/')
          })
      })
  )
}
```
