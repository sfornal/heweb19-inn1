---
title: slide 30
color: blue
type: general
---
### Fetch Handling Revised, Part 5

```javascript
            else {
                return fetch(request)
                .then(responseFromFetch => {
                    fetchEvent.waitUntil(
                        stash(IMAGE_CACHE, request, responseFromFetch.clone())
                    )
                    return responseFromFetch
                })
            }
        })
    )
}
```
