$(function() {
	var lastScrollTop = 0;
	$(window).scroll(function (event) {
		var st = window.pageYOffset;

		if (!$("body").hasClass("menu-opened") && st >= 0) {
			if (st > lastScrollTop) {
				if (st > $("header").offset().top + $("header").height() + 40) {
					$("header").removeClass("header--fixed");
					$("header").offset({
						top: st - $("header").height() - 60,
					});
				}

				if ($("header").hasClass("header--fixed")) {
					$("header").removeClass("header--fixed");
					$("header").offset({
						top: st,
					});
				}
			} else {
				if (!$("header").hasClass("header--fixed") && st < $("header").offset().top) {
					$("header").removeAttr("style");
					$("header").addClass("header--fixed");
				}
			}
		} else {
			$("header").removeAttr("style");
			$("header").addClass("header--fixed");
		}

		if (st <= 20) {
			$("header").removeAttr("style");
			$("header").removeClass("header--fixed");
		}

		if (st > 20) {
			$("header").addClass("header--black");
		} else {
			$("header").removeClass("header--black");
		}

		lastScrollTop = st;
	});

	$(".burguer-menu").on("click", function () {
		if (!$("body").hasClass("submenu-opened")) {
			$("body").toggleClass("menu-opened");

			if (!$("body").hasClass("menu-opened")) {
				$(".header").removeClass("header--fixed");
				$(".header").offset({
					top: $(window).scrollTop(),
				});
			}
		} else {
			$("body").removeClass("submenu-opened");
			$("body").addClass("menu-opened");
		}
	});

	$('.face__change--btn').on('click', function() {
		$('.about--photo').toggleClass('face__active');
	});

	$('.item--action').on('click', function() {
		// $(this).next('.item--detais').addClass('item--detais__active');
		$(this).next('.item--detais').fadeIn(200);
		$(this).next('.item--detais').find('.carousel__slides').slick('setPosition');
	});

	$('.item--background').on('click', function() {
		$(this).closest('.item--detais').fadeOut(200);
	});

	$('.slide--content').zoom();

	year = new Date().getFullYear();

	$('#current--year').text(year);
});