ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400,
});

ScrollReveal().reveal('.main-title, .section-title', { delay: 180, origin: 'left' });
ScrollReveal().reveal('.sec-01 .image', { delay: 400, origin: 'bottom' });
ScrollReveal().reveal('.text-box', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.media-icons i', { delay: 400, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.sec-02 .image, .sec-03 .image', { delay: 400, origin: 'top' });
ScrollReveal().reveal('.sec-02 .info', { delay: 400, origin: 'right' });
ScrollReveal().reveal('.media-info li', { delay: 400, origin: 'left', interval: 200 });
