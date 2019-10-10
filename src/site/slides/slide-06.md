---
title: slide 06
color: blue
type: code
---
### Registering a Service Worker

```javascript
/* Feature check */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      /* It worked */
    })
    .catch(function(error) {
      /* It didn't */
    });
}
```
