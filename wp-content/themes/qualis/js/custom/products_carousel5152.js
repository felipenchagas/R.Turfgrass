jQuery(document).ready(function( $ ) {
 "use strict";
 
        jQuery("#best-seller .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [768, 2],
            itemsMobile: [480, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1
        });
		
}); 