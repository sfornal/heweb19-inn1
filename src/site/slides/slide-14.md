---
title: slide 14
color: blue
type: general
---
### Redundant

* The Service Worker is not controlling the site
* Can happen for one of three reasons:
  1. Installation event failed
  2. Activation event failed
  3. Service worker was replaced by a new service worker
* If there was a previously active service worker, it will resume control
