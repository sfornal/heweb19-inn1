---
title: slide 22
color: blue
type: code
---
### Setting Up

Define your caches…

```javascript
// In your sw.js file
const VER = 'v1';
const ASSET_CACHE = 'assetCache_' + VER;
// Add other caches later
const CACHE_LIST = [ ASSET_CACHE ]

const FILES_TO_CACHE = [ '/css/style.css', '/js/core.js' ] // etc.
```
