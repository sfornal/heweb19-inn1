---
title: slide 23
color: blue
type: code
---
### Install Event

Tell the service worker that it's not done installing until everything is cached

```javascript
self.addEventListener('install', event => {
  event.waitUntil( /* A Promise is fulfilled */ )
})
```
