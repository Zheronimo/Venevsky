$(document).ready(function() {
	svg4everybody({});

	let sandwich = function () {
  		$(document).on("click",".sandwich", function () {
		$(this).toggleClass("sandwich--active");
		});
	};

	let popularCategoriesSlider = function () {
		if ($(window).width() < 768) {
			$('.js-categories-prev').slick({
				slidesToShow: 2,
				slidesToScroll: 1,
			});
		}
	};

	let productPrevSlider = function () {
		let slideCount = $('.product-slider__count'),
				prodSlider = $('.js-product-slider');
		prodSlider.on('init afterChange', function (event, slick, currentSlide, nextSlide){
			let i = (currentSlide ? currentSlide : 0) + 1;
			slideCount.text('Страница ' + i + ' из ' + slick.slideCount);
		});

		prodSlider.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: ".slider-nav--prev",
			nextArrow: ".slider-nav--next",
			infinite: false,
		});
	};

	sandwich();
	popularCategoriesSlider();
	productPrevSlider();
});

let popularCategoriesSlider = function () {
	let sliderElement = $('.js-categories-prev');

	if ($(window).width() < 768 && !(sliderElement.hasClass('slick-initialized'))) {
		sliderElement.slick({
			slidesToShow: 2,
			slidesToScroll: 1,
		});
	} else if ($(window).width() > 768 && sliderElement.hasClass('slick-initialized')) {
		sliderElement.slick('unslick')
	}
}

$(window).on('resize', function () {
	popularCategoriesSlider();
});


//Полифил для IE11
(function () {
	if (!Element.prototype.closest) {
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector; 
	}
})();