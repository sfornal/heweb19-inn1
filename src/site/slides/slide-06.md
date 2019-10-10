---
title: slide 06
color: blue
type: code
---
### Registering a Service Worker

```javascript
if (navigator.serviceWorker) { /* Feature check */
    navigator.serviceWorker.register('/sw.js')
        .then(function(registration) { /* It worked */})
        .catch(function(error) { /* It didn't */ });
}
```
