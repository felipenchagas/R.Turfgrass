(function ($) {
  "use strict";

	$(document).ready(function () {
 
			if ($(".qty").attr("max")){
			$('.plus').on('click', function () {
					if ($(this).prev().val() < $(".qty").attr("max")) {
					$(this).prev().val(+$(this).prev().val() + 1);
					}
					
			});
			} else {
			$('.plus').on('click', function () {
					if ($(this).prev().val() < 100) {
					$(this).prev().val(+$(this).prev().val() + 1);
					}
			});
			}

			$('.minus').on('click', function () {
					if ($(this).next().val() > 1) {
					if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
					}
			});
	});

})(jQuery);
