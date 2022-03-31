$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        800: {
            items: 3
        },
        1100: {
            items: 4
        },
        1400: {
            items: 5
        }
    }
})