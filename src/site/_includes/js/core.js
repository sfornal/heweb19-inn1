'use strict';
(function(d) {
    var toggleButton = d.getElementById('toggle');
    var previousButton = d.getElementById('previous');
    var nextButton = d.getElementById('next');

    var prev = function() {
        var cur = d.querySelector('.current');
        var prev = cur.previousSibling;

        if (prev !== null) {
            prev.classList.add('current');
            cur.classList.remove('current');
        }
    };
    var next = function() {
        var cur = d.querySelector('.current');
        var next = cur.nextSibling;

        if (next !== null) {
            next.classList.add('current');
            cur.classList.remove('current');
        }
    };

    var toggleShow = function() {
        if (d.body.classList.contains('no-slideshow')) {
            d.body.classList.remove('no-slideshow');
            d.body.classList.add('slideshow');
            toggleButton.innerHTML = 'Stop Slide Show';
        }
        else {
            d.body.classList.remove('slideshow');
            d.body.classList.add('no-slideshow');
            toggleButton.innerHTML = 'Start Slide Show';
        }
    };

    d.addEventListener('keydown', function(evt) {
        var LEFT_ARROW = 37,
            RIGHT_ARROW = 39,
            M_KEY = 77;

        switch (evt.which) {
            case RIGHT_ARROW :
                next();
                break;
            case LEFT_ARROW :
                prev();
                break;
            case M_KEY :
                toggleShow();
                break;
        }
    });

    toggleButton.onclick = toggleShow;
    previousButton.onclick = prev;
    nextButton.onclick = next;

})(document);

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
    .then(function(registration) { console.log('Service worker registered: ', registration) })
    .catch(function(err) { console.error('Service worker not registered: ', err) });
}
