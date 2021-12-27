'use strict';

let goTopBtn = document.querySelector('.header-arrow');

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
    }
}

goTopBtn.addEventListener('click', backToTop);