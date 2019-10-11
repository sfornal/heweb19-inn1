---
title: slide 30
color: blue
type: code
---
### Fetch Handling Revised, Part 5

Continued…

```javascript
      else {
        return fetch(request)
          .then(fResp => {
            fetchEvent.waitUntil(
              stash(IMG_CACHE, request, fResp.clone())
            )
            return fResp
          })
      }
    })
  )
}
```
