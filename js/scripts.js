(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		$('.vertical-text-slider').slick({
			vertical: true,
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 500,
			arrows: false
		});

		$('.hero-img-wrpper').slick({
			fade: true,
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 500,
			arrows: false
		});




		$('.accordion-header').click(function() {
            var $item = $(this).parent();
            // Close previously active item
            $('.accordion-item.active').not($item).removeClass('active');

            // Toggle the clicked item
            $item.toggleClass('active');
        });

		$('.accordiontwo-header').click(function() {
            var $item = $(this).parent();
            // Close previously active item
            $('.accordiontwo-item.show').not($item).removeClass('show');

            // Toggle the clicked item
            $item.toggleClass('show');
        });

		$('.parents-spece').owlCarousel({
			items: 1,
			margin: 24,
			nav: true,
			navText: ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
			autoplay: true,
			loop: true,
			autoplayTimeout: 4000,
			smartSpeed: 1000,
			responsive: {
				992 : {
					items: 3
				},
				768: {
					items: 2
				},
				0: {
					items: 1,
					margin: 10
				}
			}
		});

		$('.worksheet-mobile').owlCarousel({
			items: 1,
			margin: 10,
			nav: true,
			navText: ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
			autoplay: true,
			loop: true,
			autoplayTimeout: 4000,
			smartSpeed: 1000,
		});

		$('.small-articles').owlCarousel({
			items: 1,
			margin: 10,
			nav: true,
			navText: ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
			autoplay: true,
			loop: true,
			autoplayTimeout: 4000,
			smartSpeed: 1000,
		});

		$('.smpre-school').owlCarousel({
			items: 1,
			margin: 10,
			nav: true,
			navText: ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
			autoplay: false,
			loop: true,
			autoplayTimeout: 4000,
			smartSpeed: 1000,
		});

		$('.small-cbse').owlCarousel({
			items: 1,
			margin: 10,
			nav: true,
			navText: ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
			autoplay: false,
			loop: true,
			autoplayTimeout: 4000,
			smartSpeed: 1000,
		});

		$('.sm-icse').owlCarousel({
			items: 1,
			margin: 10,
			nav: true,
			navText: ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
			autoplay: false,
			loop: true,
			autoplayTimeout: 4000,
			smartSpeed: 1000,
		});

		$('.sm-boarding').owlCarousel({
			items: 1,
			margin: 10,
			nav: true,
			navText: ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
			autoplay: false,
			loop: true,
			autoplayTimeout: 4000,
			smartSpeed: 1000,
		});

		
		  


		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);