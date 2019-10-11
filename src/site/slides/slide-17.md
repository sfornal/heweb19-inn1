---
title: slide 17
color: blue
type: code
---
### Fetch Handling Revised

If the _user agent_ supports service workers, it also supports ES2015 syntax.

Safe to use arrow functions, `const` and `let`, etc.

```javascript
self.addEventListener('fetch', event => {
  const request = event.request
  event.respondWith( fetch(request) )
})
```
