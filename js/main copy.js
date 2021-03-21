$(function () {
	$(".banner-section__slider").slick({
		dots: true,
		prevArrow: '<button class="banner-section__slider-btn banner-section__slider-ptnprev"><img src="images/arrov-left.svg" alt="Arrow Prev"></button>',
		nextArrow: '<button class="banner-section__slider-btn banner-section__slider-ptnnext"><img src="images/arrov-right.svg" alt="Arrow Next"></button>',
	});

	$(".tab").on("click", function (e) {
		e.preventDefault();
		$(".tab").removeClass("tab--active");
		$(".tabs-content").removeClass("tabs-content--active");

		$(this).addClass("tab--active");
		$($(this).attr("href")).addClass("tabs-content--active");
	});

	$(".product-item__favorite").on("click", function (e) {
		e.preventDefault();
		$(".product-item__favorite").toggleClass("product-item__favorite--added");
	});

	$(".product-slider").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="banner-section__slider-btn banner-section__slider-ptnprev"><img src="images/arrov-black-left.svg" alt="Arrow Prev"></button>',
		nextArrow: '<button class="banner-section__slider-btn banner-section__slider-ptnnext"><img src="images/arrov-black-right.svg" alt="Arrow Next"></button>',
	});
});
