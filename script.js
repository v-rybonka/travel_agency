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