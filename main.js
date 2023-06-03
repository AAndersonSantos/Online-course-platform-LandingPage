$('#carousel-1').owlCarousel({
    loop:true,
    margin: 40,
    autoplay: false,
    autoplayTimeout:6000,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('#carousel-2').owlCarousel({
    loop:true,
    margin: 10,
    autoplay: false,
    autoplayTimeout:6000,
    nav:false,
    responsive:{
        1000:{
            items:1
        }
    }
})