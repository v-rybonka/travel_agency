$(document).ready(function(){
	$('.slider').slick({
		speed: 500,
		fade: true,
		mobileFirst: true,
		
	}
	);
	
});

$(document).ready(function () {
	$('.travel-gallery').slick({
		arrows:true,
		adaptiveHeight:true,
		slidesToShow: 3,
		infinite: true,
		vertical: true,
		
		})
})


const swiper = new Swiper('.feedback-swiper', {
	// Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperTripSection = new Swiper('.offer-swiper', {
		// Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})