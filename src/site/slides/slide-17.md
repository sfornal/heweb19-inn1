---
title: slide 17
color: blue
type: general
---
### Fetch Handling Revised

If the _user agent_ supports service workers, it also supports ES2015 syntax, so we may as well write it that way. It's fun!

```javascript
self.addEventListener('fetch', event => {
    const request = event.request
    event.respondWith( fetch(request) )
})
```
