 $(document).ready(function () {
            $(".testi2.owl-carousel").owlCarousel({
                autoplay: false,
                lazyLoad: !0,
                loop: true,
                dots:true,
                autoplayHoverPause: false,
                nav: true,
                margin: 30,
                responsiveClass: !0,
                autoHeight: !0,
                autoplayTimeout: 2000,
                navText: [
                    '<img src="img/Arrow_prev.png">',
                    '<img src="img/Arrow_next.png">'
                ],
                smartSpeed: 1200,
                               responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1180: {
                        items: 1
                    },
                   
                   
                }
            })
        })