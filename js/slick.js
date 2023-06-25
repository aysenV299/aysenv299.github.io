$('.sections__inner').slick({
    infinite: true,
        speed: 1200,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
        ]
});