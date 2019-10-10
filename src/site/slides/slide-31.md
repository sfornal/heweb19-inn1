---
title: slide 31
color: blue
type: code
---
### Abstraction

```javascript
// This is a utility function for a common task
// Returns a Promise
function stash(cacheName, request, response) {
  caches.open(cacheName)
    .then(cache => {
      return cache.put(request, response)
    })
}
```
