---
title: slide 28
color: blue
type: general
---
### Caching Strategies Revisited

Fine tune `fetch` event handling to create a different strategy for images.

1. If it's in the cache, return it
   * Also, grab & cache a fresh copy from the network
2. If it's not in the cache, get it from the network
   * And cache it
