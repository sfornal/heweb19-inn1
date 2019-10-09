---
title: slide 23
color: blue
type: general
---
### Install Event

We need to tell the service worker that we aren't done installing until we populate our cache.

```javascript
self.addEventListener('install', event => {
    event.waitUntil( /* A Promise is fulfilled */ )
})
```
