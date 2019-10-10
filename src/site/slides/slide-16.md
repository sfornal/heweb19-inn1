---
title: slide 16
color: blue
type: code
---
### Fetch Handling

```javascript
/* In /sw.js at your site root */
self.addEventListener('fetch', function(event) {
    var request = event.request;
    event.respondWith( fetch(request) );
}); //end of listener
```
