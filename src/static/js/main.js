$(document).ready(function() {
	svg4everybody({});

	let sandwich = function () {
  		$(document).on("click",".catalog-nav__header", function () {
  			let sandwich = $(this).find(".sandwich"),
  				catalog = $(this).parent();
			sandwich.toggleClass("sandwich--active");
			catalog.toggleClass("catalog-nav--active");
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

	let locationChoose = function () {
		$(document).on('click','.location-question__btn',function () {
			let answer = $(this).data('location');
			$(this).closest('.location-question').hide();
			if (answer === 'no') {
				$(this).closest('.location__body').addClass('is-location-choose');
			}
		});
		$(document).on('click','.location-choose__item',function () {
			$(this).closest('.location').removeClass('is-location-choose');
		});
		$(document).on('click','.location__header',function () {
			$(this).siblings('.location__body').addClass('is-location-choose');
		});
	};

	let popupLink = function () {
		$('.js-popup-link').magnificPopup({
			showCloseBtn: false
		});
		$(document).on('click','.popup__close', function () {
			$.magnificPopup.close()
		});
	};

	let formValidate = function () {
		$('form').each(function () {
			$(this).on('submit', function () {
				$(this).validate({
					rules: {
						name: 'required',
						phone: 'required',
						"requ-textarea": 'required',
						passworld: 'required'
					},
					messages: {
						name: 'Введите корректное имя',
						phone: 'Введите корректный номер',
						"requ-textarea": 'Заполните поле',
						passworld: 'Введите корректный пароль'
					},
					errorPlacement: function (error, element) {
							element.attr("placeholder", error[0].outerText);
						}
				});

				if ($(this).valid()) {
					let wrap = $(this)[0].closest('.hide-on-success');
					if (wrap) {
						$(wrap).siblings('.show-on-success').show();
						$(wrap).hide();
					}
				}
				return false;
			});
		});
	};

	sandwich();
	popularCategoriesSlider();
	productPrevSlider();
	locationChoose();
	popupLink();
	formValidate();
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