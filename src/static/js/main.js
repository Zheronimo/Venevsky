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

	let reviewLine = function () {
		$(document).on('click','.review-line__number',function () {
			let left = $(this).parent().position().left;
			$(this).parent().siblings().removeClass('review-line__item--active');
			$(this).parent().addClass('review-line__item--active');
			$('.review-line').css('width',left - 1);
		});
	};

	let contactsPopup = function () {
		$(document).on('click','.contacts-popup__toggle',function () {
			$(this).parent('.contacts-popup').addClass('contacts-popup--active');
		});
		$(document).on('click','.contacts-popup__close',function () {
			$(this).closest('.contacts-popup').removeClass('contacts-popup--active');
		});
	};

	sandwich();
	popularCategoriesSlider();
	productPrevSlider();
	locationChoose();
	popupLink();
	formValidate();
	reviewLine();
	contactsPopup();
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

if ($('div').is('.contacts-popup__map')) {
	ymaps.ready(function () {
	    var myMapOffice = new ymaps.Map('popup-contacts-office', {
	            center: [55.754578, 37.694953],
	            zoom: 16
	        }, {
	            searchControlProvider: 'yandex#search'
	        }),

	        myPlacemark = new ymaps.Placemark(myMapOffice.getCenter(), {
	            hintContent: 'Собственный значок метки',
	            balloonContent: 'Это красивая метка'
	        }, {
	            // Опции.
	            // Необходимо указать данный тип макета.
	            iconLayout: 'default#image',
	            // Своё изображение иконки метки.
	            iconImageHref: 'static/img/general/mark.png',
	            // Размеры метки.
	            iconImageSize: [76, 89]
	        });

	    myMapOffice.geoObjects
	        .add(myPlacemark);
	        //Запрет на скролинг мышкой
	    myMapOffice.behaviors.disable('scrollZoom');
	    	//Отключение дополнительных инструментов
	    myMapOffice.controls.remove('trafficControl').remove('searchControl').remove('typeSelector').remove('geolocationControl').remove('fullscreenControl').remove('rulerControl');

	    var myMapStock = new ymaps.Map('popup-contacts-stock', {
	            center: [55.566373, 37.755856],
	            zoom: 16
	        }, {
	            searchControlProvider: 'yandex#search'
	        }),

	        myPlacemark2 = new ymaps.Placemark(myMapStock.getCenter(), {
	            hintContent: 'Собственный значок метки',
	            balloonContent: 'Это красивая метка'
	        }, {
	            // Опции.
	            // Необходимо указать данный тип макета.
	            iconLayout: 'default#image',
	            // Своё изображение иконки метки.
	            iconImageHref: 'static/img/general/mark.png',
	            // Размеры метки.
	            iconImageSize: [76, 89]
	        });

	    myMapStock.geoObjects
	        .add(myPlacemark2);
	        //Запрет на скролинг мышкой
	    myMapStock.behaviors.disable('scrollZoom');
	    	//Отключение дополнительных инструментов
	    myMapStock.controls.remove('trafficControl').remove('searchControl').remove('typeSelector').remove('geolocationControl').remove('fullscreenControl').remove('rulerControl');
	});
};


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