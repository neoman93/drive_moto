$(function () {
	$(".banner-section__slider").slick({
		dots: true,
		prevArrow: '<button class="banner-section__slider-btn banner-section__slider-ptnprev"><img src="images/arrov-left.svg" alt="Arrow Prev"></button>',
		nextArrow: '<button class="banner-section__slider-btn banner-section__slider-ptnnext"><img src="images/arrov-right.svg" alt="Arrow Next"></button>',
	});

	$(".tab").on("click", function (e) {
		e.preventDefault();

		$($(this).siblings()).removeClass("tab--active");
		$($(this).parent().siblings().find("div")).removeClass("tabs-content--active");

		$(this).addClass("tab--active");
		$($(this).attr("href")).addClass("tabs-content--active");
	});

	$(".product-item__favorite").on("click", function (e) {
		e.preventDefault();
		$(this).toggleClass("product-item__favorite--added");
	});

	$(".product-slider").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="product-slider__slider-btn product-slider__slider-ptnprev"><img src="images/arrov-black-left.svg" alt="Arrow Prev"></button>',
		nextArrow: '<button class="product-slider__slider-btn product-slider__slider-ptnnext"><img src="images/arrov-black-right.svg" alt="Arrow Next"></button>',
	});

	$(".filter__item-drop").on("click", function () {
		$(this).toggleClass("filter__item-drop--active");
		$(this).next().slideToggle(200);
	});

	$(".js-range-slider").ionRangeSlider({
		grid: false,
		type: "double",
		min: 100000,
		max: 500000,
	});

	$(".filter-style").styler();
});
