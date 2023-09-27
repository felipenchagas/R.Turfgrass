jQuery(document).ready(function($) {
	"use strict";

    $('a.button.detail-bnt').on('click', function(){
        var data = {
            action: 'quick_view',
			beforeSend: function() {
				$(".loader-image").show();
			},
			security : MyAjax.security,
			'id': $(this).attr('id'),
        };

        // since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
		$.post(MyAjax.ajaxurl, data, function(response) {
			$('.ajaxphp-results').html(response);
			
			
			if ($(".qty").attr("max")){
			$('.plus').on('click', function (event) {
				 event.preventDefault();
				if ($(this).prev().val() < $(".qty").attr("max")) {
					$(this).prev().val(+$(this).prev().val() + 1);
				}
			});
			} else {
			$('.plus').on('click', function (event) {
				 event.preventDefault();
				if ($(this).prev().val() < 100) {
					$(this).prev().val(+$(this).prev().val() + 1);
				}
			});
			}

			$('.minus').on('click', function (event) {
				event.preventDefault();
				if ($(this).next().val() > 1) {
					if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
				}
			});
			
			$('.popup1 .quick-view-box + #fade, .popup1.klb-quick-view img.x').on('click', function () {
				$(".popup1.klb-quick-view").hide();
				$(".zoomContainer").remove();
			});
			
			if ($('#product-zoom').length > 0) {
				$('#product-zoom').elevateZoom({
					zoomType: "inner",
					cursor: "crosshair",
					zoomWindowFadeIn: 500,
					zoomWindowFadeOut: 750,
					gallery: 'gallery_01'
				});
			};
			
			$("#gallery_01 .slider-items").owlCarousel({
				autoplay: false,
				items: 4, //10 items above 1000px browser width
				itemsDesktop: [1024, 3], //5 items between 1024px and 901px
				itemsDesktopSmall: [900, 4], // 3 items betweem 900px and 601px
				itemsTablet: [600, 3], //2 items between 600 and 0;
				itemsMobile: [320, 2],
				navigation: true,
				navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
				slideSpeed: 500,
				pagination: false
			}),
			
			$("p.stock.in-stock").detach().insertBefore(".price-block");
			$("p.stock.out-of-stock").detach().insertBefore(".price-block");
			$(".loader-image").hide();
			
        });
    });

	
    $('a.button-list').on('click', function(){
        var data = {
            action: 'list_view',
			beforeSend: function () {
				$(".loader-image").show();
			},
			security : MyAjax.security,
        };

        // since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
		$.post(MyAjax.ajaxurl, data, function(response) {
			$('.category-products').html(response);
			$(".loader-image").hide();
			$('a.button-grid').removeClass('button button-active');
			$('a.button-list').addClass('button button-active');
        });
    });
	
    $('a.button-grid').on('click', function(){
        var data = {
            action: 'grid_view',
			beforeSend: function () {
				$(".loader-image").show();
			},
			security : MyAjax.security,
        };

        // since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
		$.post(MyAjax.ajaxurl, data, function(response) {
			$('.category-products').html(response);
			$(".loader-image").hide();
			$('a.button-list').removeClass('button button-active');
			$('a.button-grid').addClass('button button-active');
			
        });
    });
	


	
});