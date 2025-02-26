$(document).ready(function(){
	$('.slider').slick({
		speed: 500,
		fade: true,
		appendArrows: $('.slider__toggle'),
		mobileFirst: true,
		responsive:[
			{
				breakpoint: 1151,
				settings: {
					slidesToShow: 2.1,
					fade: false,
				}
},{
				breakpoint: 1440,
				settings: {
					slidesToShow: 2.7,
					fade: false,
				}
},{
				breakpoint: 1920,
				settings: {
					slidesToShow: 3.1,
					fade: false,
				}
}
		]
		
	}
	);
	
});

$(document).ready(function (){
	$('.travel-gallery').slick({
		appendArrows: $('.travel-gallery__toggle'),
		slidesToShow: 3,
		speed:500,
		mobileFirst: true,
		infinite: true,
		vertical: true,
		responsive:[
			{
				breakpoint: 1151,
				settings: {
					// centerMode:true,
					slidesToShow: 4,
					fade: false,
					vertical: false,
					initialSlide: 1,
					autoplay: true,
					autoplaySpeed: 2000,
					
					
				}
}
		]
		})
})


const swiper = new Swiper('.feedback-swiper', {
	// Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
	},
	loop: true,
  // Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
            spaceBetween: 10,
		},
		768: {
			slidesPerView: 1.4,
			spaceBetween: 32
		},
		1152: {
			slidesPerView: 2.17,
			spaceBetween: 32
		},
		// when window width is >= 480px
		1440: {
			slidesPerView: 2.43,
			spaceBetween: 32
		},
		// when window width is >= 640px
		1920: {
			slidesPerView: 2.9,
			spaceBetween: 32
		}
	}
});

const swiperSpecialOffer = new Swiper('.offer-swiper', {
		// Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
	},
	loop: true,
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		1152: {
			slidesPerView: 3,
			spaceBetween: 32,
		}
	}
})

const swiperTripSection = new Swiper('.trip-plan-swiper', {
	// navigation: {
    // nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
	// },
	loop: true,
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		1152: {
			slidesPerView: 2.3,
			spaceBetween: 32,
		},
		1440: {
			slidesPerView: 2.8,
			spaceBetween: 32,
		},
		1920: {
			slidesPerView: 3.8,
			spaceBetween: 32,
		}
	}
})
