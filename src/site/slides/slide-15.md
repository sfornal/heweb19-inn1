---
title: slide 15
color: blue
type: general
---
### What Can My Service Worker Do Now

You can listen for events! Very specifically, the `fetch` event.

This gives you the opportunity to _interrupt_ the browser every time it tries to get a resource for your page.

You can make a decision about how to handle that request, or just let the browser do it the normal way
