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
