jQuery(document).ready(function () {
	"use strict";
 
		jQuery(".flex-control-nav.flex-control-thumbs").owlCarousel({
			items : 4,
			itemsTablet: [768, 4],
			itemsMobile: [479, 3],
			slideSpeed: 1000,
			pagination: false,
			navigation: true,
		    autoPlay: false,
		    navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
			responsiveRefreshRate: 200,
		});
		
}); 