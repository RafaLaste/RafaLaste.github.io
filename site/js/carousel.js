$(function() {
	 $('.carousel__slides').each(function() {
		let that = this;
		
		$(this).slick({
			arrows: true,
			dots: true,
			swipe: false,
  			autoplay: true,
  			autoplaySpeed: 8000,
			prevArrow: '<span class="slide-arrow prev-arrow"></span>',
 			nextArrow: '<span class="slide-arrow next-arrow"></span>',
			infinite: true,
			slidesToShow: 1,
	 		slidesToScroll: 1,
	 		centerMode: true,
	 		centerPadding: '0',
	 		responsive: [
	 		{
	 			breakpoint: 960,
	 			settings: {
	 				swipe: true
	 			}
	 		}
	 		]
	 	});
	});
});