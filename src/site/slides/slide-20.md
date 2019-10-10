---
title: slide 20
color: blue
type: code
---
### Fetch Handling Revised, Part 2

```javascript
self.addEventListener('fetch', event => {
    const request = event.request
    event.respondWith(
        caches.match(request) //Returns a promise for a Response
            .then(response => {
                if (response) { // Annoying!
                    return response
                }
                else {
                    return fetch( request )
                }
            }) //End of then
    ) //End of respondWith
})
```
