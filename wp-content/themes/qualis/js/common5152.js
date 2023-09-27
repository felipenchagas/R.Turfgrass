/*
Template Name: Qualis - Organic Food WooCommerce Theme
Author: KlbTheme
Author URI: https://themeforest.net/user/klbtheme
Version: 1.0
*/


(function ($) {
  "use strict";

	$(document).ready(function () {
		init_topcategories();
		init_brandslider();
		init_testimonials();
		init_categorydescslider();
		init_relatedslider();
		init_mobilemenu();
		init_toptextslideshow();
		init_slideEffectAjax();
		init_subdropdown();
	});
  
	/*  sticky header  */
    $(window).scroll(function() {
        $(this).scrollTop() > 150 ? $("#header").addClass("sticky-header") : $("#header").removeClass("sticky-header")
        $(this).scrollTop() > 250 ? $("#header").addClass("sticky-header-bar") : $("#header").removeClass("sticky-header-bar")
    });
	
	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});
	
	function init_topcategories() {
        $("#top-categories .slider-items").owlCarousel({
            items: 8,
            itemsDesktop: [1024, 6],
            itemsDesktopSmall: [900, 4],
            itemsTablet: [600, 2],
            itemsMobile: [320, 2],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1
        });
	}
	
	function init_brandslider() {
        $("#brand-slider .slider-items").owlCarousel({
          autoplay : true,
	      items : 5, //10 items above 1000px browser width
	      itemsDesktop : [1024,5], //5 items between 1024px and 901px
	      itemsDesktopSmall : [900,4], // 3 items betweem 900px and 601px
	      itemsTablet: [600,2], //2 items between 600 and 0;
	      itemsMobile : [320,1],
	      navigation : false,
	      navigationText : ["<a class=\"flex-prev\"></a>","<a class=\"flex-next\"></a>"],
	      slideSpeed : 500,
	      pagination :true 			
        });
	}

	function init_testimonials() {
		$("#testimonials .slider-items").owlCarousel({
          autoplay : true,
	      items : 1, //10 items above 1000px browser width
	      itemsDesktop : [1024,1], //5 items between 1024px and 901px
	      itemsDesktopSmall : [900,1], // 3 items betweem 900px and 601px
	      itemsTablet: [600,1], //2 items between 600 and 0;
	      itemsMobile : [320,1],
	      navigation : true,
	      navigationText : ["<a class=\"flex-prev\"></a>","<a class=\"flex-next\"></a>"],
	      slideSpeed : 500,
	      pagination :false			
        });
	}

	function init_categorydescslider() {
		$("#category-desc-slider .slider-items").owlCarousel({
			autoPlay: true,
			items: 1, //10 items above 1000px browser width
			itemsDesktop: [1024, 1], //5 items between 1024px and 901px
			itemsDesktopSmall: [900, 1], // 3 items betweem 900px and 601px
			itemsTablet: [600, 1], //2 items between 600 and 0;
			itemsMobile: [320, 1],
			navigation: true,
			navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
			slideSpeed: 500,
			pagination: false
		});
	}
	
	function init_relatedslider() {
        $("#related-slider .slider-items").owlCarousel({
            items: 5,
            itemsDesktop: [1024, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [600, 2],
            itemsMobile: [320, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1
        });
	}

	function init_mobilemenu() {
        $("#mobile-menu").mobileMenu({
            MenuWidth: 250,
            SlideSpeed: 300,
            WindowsMaxWidth: 767,
            PagePush: !0,
            FromLeft: !0,
            Overlay: !0,
            CollapseMenu: !0,
            ClassName: "mobile-menu"
        });
		
		$("p.stock.in-stock").detach().insertBefore("p.price");
		$("p.stock.out-of-stock").detach().insertBefore("p.price");
		
		$("nav.woocommerce-pagination ul.page-numbers").addClass("pagination");

		$("a.compare.button").detach().insertAfter(".tinv-wraper.tinv-wishlist");
		
		$(".sidebar .widget_product_categories ul.product-categories" ).wrap( "<div class='box-content box-category'></div>" );
		$(".sidebar .widget_product_categories ul.product-categories > li.cat-parent").append('<span class="subDropdown plus"></span>');
		$("span.subDropdown").detach().insertBefore("ul.children");
		
		$('.sidebar .custom-slider').closest('div').unwrap();
		
		$(".wpcf7-form input[name='your-name'], .wpcf7-form input[type='email']" ).closest('p').wrapAll( "<div class='row'></div>" );
		$(".wpcf7-form input[name='your-name'], .wpcf7-form input[type='email']" ).closest('p').wrap( "<div class='col-lg-6'><div class='form-group'></div></div>" );

		if ( !$( ".toolbar.bottom" ).length ) {
			$(".pro-coloumn").addClass("no-pagination");
		}
		
		$(".single-product .woocommerce-message" ).wrap( "<div class='product-essential container klb-message'><div class='row'></div></div>" );
		$(".single-product .woocommerce-error" ).wrap( "<div class='product-essential container klb-message'><div class='row'></div></div>" );
		$(".page img.alignleft[width='160']").closest("p").addClass( "klbclear" );
		
	}
	
    function init_toptextslideshow() {
	    $("#slideshow > p:gt(0)").hide();
		
        setInterval(function() { 
          jQuery('#slideshow > p:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
        },  3000);
    }
	
	
    function init_slideEffectAjax() {
        $(".fl-cart-contain").mouseenter(function() {
            $(this).find(".fl-mini-cart-content").stop(true, true).slideDown()
        }), $(".fl-cart-contain").mouseleave(function() {
            $(this).find(".fl-mini-cart-content").stop(true, true).slideUp()
        });
    }

    function init_sidebarmenu() {
        $("ul.accordion li.parent, ul.accordion li.parents, ul#magicat li.open").each(function() {
            $(this).append('<em class="open-close">&nbsp;</em>')
        }), $("ul.accordion, ul#magicat").accordionNew(), $("ul.accordion li.active, ul#magicat li.active").each(function() {
            $(this).children().next("div").css("display", "block")
        });
    }
	
    function init_subdropdown() {
		$(".subDropdown")[0] && $(".subDropdown").on("click", function() {
			$(this).toggleClass("plus"), $(this).toggleClass("minus"), $(this).parent().find("ul").slideToggle()
		});
    }
	
})(jQuery);

var isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
jQuery(window).on("load", function() {
        isTouchDevice && jQuery("#nav a.level-top").on("click", function() {
            if ($t = jQuery(this), $parent = $t.parent(), $parent.hasClass("parent")) {
                if (!$t.hasClass("menu-ready")) return jQuery("#nav a.level-top").removeClass("menu-ready"), $t.addClass("menu-ready"), !1;
                $t.removeClass("menu-ready")
            }
        }), jQuery().UItoTop()
    }),
    /*  ToTop */
	
    function(e) {
        jQuery.fn.UItoTop = function(t) {
            var a = {
                    text: "",
                    min: 200,
                    inDelay: 600,
                    outDelay: 400,
                    containerID: "toTop",
                    containerHoverID: "toTopHover",
                    scrollSpeed: 1200,
                    easingType: "linear"
                },
                i = e.extend(a, t),
                n = "#" + i.containerID,
                s = "#" + i.containerHoverID;
            jQuery("body").append('<a href="#" id="' + i.containerID + '">' + i.text + "</a>"), jQuery(n).hide().on("click", function() {
                return jQuery("html, body").animate({
                    scrollTop: 0
                }, i.scrollSpeed, i.easingType), jQuery("#" + i.containerHoverID, this).stop().animate({
                    opacity: 0
                }, i.inDelay, i.easingType), !1
            }).prepend('<span id="' + i.containerHoverID + '"></span>').on("hover",function() {
                jQuery(s, this).stop().animate({
                    opacity: 1
                }, 600, "linear")
            }, function() {
                jQuery(s, this).stop().animate({
                    opacity: 0
                }, 700, "linear")
            }), jQuery(window).scroll(function() {
                var t = e(window).scrollTop();
                "undefined" == typeof document.body.style.maxHeight && jQuery(n).css({
                    position: "absolute",
                    top: e(window).scrollTop() + e(window).height() - 50
                }), t > i.min ? jQuery(n).fadeIn(i.inDelay) : jQuery(n).fadeOut(i.Outdelay)
            })
        }
    }(jQuery),
    jQuery.extend(jQuery.easing, {
        easeInCubic: function(e, t, a, i, n) {
            return i * (t /= n) * t * t + a
        },
        easeOutCubic: function(e, t, a, i, n) {
            return i * ((t = t / n - 1) * t * t + 1) + a
        }
    }),
	/* Accordian */	
	jQuery.extend(jQuery.easing, {
        easeInCubic: function(e, t, n, i, s) {
            return i * (t /= s) * t * t + n
        },
        easeOutCubic: function(e, t, n, i, s) {
            return i * ((t = t / s - 1) * t * t + 1) + n
        }
    }),
    function(e) {
        e.fn.extend({
            accordion: function() {
                return this.each(function() {})
            }
        })
    }(jQuery), jQuery(function(e) {
        e(".accordion").accordion(), e(".accordion").each(function() {
            var t = e(this).find("li.active");
            t.each(function(n) {
                e(this).children("ul").css("display", "block"), n == t.length - 1 && e(this).addClass("current")
            })
        })
    }),
	
	
	/* Responsive Nav */	
    function(e) {
        e.fn.extend({
            accordion: function(t) {
                var n = {
                        accordion: "true",
                        speed: 300,
                        closedSign: "[+]",
                        openedSign: "[-]"
                    },
                    i = e.extend(n, t),
                    s = e(this);
                s.find("li").each(function() {
                    0 != e(this).find("ul").size() && (e(this).find("a:first").after("<em>" + i.closedSign + "</em>"), "#" == e(this).find("a:first").attr("href") && e(this).find("a:first").on("click", function() {
                        return !1
                    }))
                }), s.find("li em").on("click", function() {
                    0 != e(this).parent().find("ul").size() && (i.accordion && (e(this).parent().find("ul").is(":visible") || (parents = e(this).parent().parents("ul"), visible = s.find("ul:visible"), visible.each(function(t) {
                        var n = !0;
                        parents.each(function(e) {
                            return parents[e] == visible[t] ? (n = !1, !1) : void 0
                        }), n && e(this).parent().find("ul") != visible[t] && e(visible[t]).slideUp(i.speed, function() {
                            e(this).parent("li").find("em:first").html(i.closedSign)
                        })
                    }))), e(this).parent().find("ul:first").is(":visible") ? e(this).parent().find("ul:first").slideUp(i.speed, function() {
                        e(this).parent("li").find("em:first").delay(i.speed).html(i.closedSign)
                    }) : e(this).parent().find("ul:first").slideDown(i.speed, function() {
                        e(this).parent("li").find("em:first").delay(i.speed).html(i.openedSign)
                    }))
                })
            }
        })
    }(jQuery),
    function(e) {
        e.fn.extend({
                accordionNew: function() {
                    return this.each(function() {
                        function t(t, i) {
                            e(t).parent(l).siblings().removeClass(s).children(c).slideUp(r), e(t).siblings(c)[i || o]("show" == i ? r : !1, function() {
                                e(t).siblings(c).is(":visible") ? e(t).parents(l).not(n.parents()).addClass(s) : e(t).parent(l).removeClass(s), "show" == i && e(t).parents(l).not(n.parents()).addClass(s), e(t).parents().show()
                            })
                        }
                        var n = e(this),
                            i = "accordiated",
                            s = "active",
                            o = "slideToggle",
                            c = "ul, div",
                            r = "fast",
                            l = "li";
                        if (n.data(i)) return !1;
                        e.each(n.find("ul, li>div"), function() {
                            e(this).data(i, !0), e(this).hide()
                        }), e.each(n.find("em.open-close"), function() {
                            e(this).on("click", function() {
                                return void t(this, o)
                            }), e(this).on("activate-node", function() {
                                n.find(c).not(e(this).parents()).not(e(this).siblings()).slideUp(r), t(this, "slideDown")
                            })
                        });
                        var a = location.hash ? n.find("a[href=" + location.hash + "]")[0] : n.find("li.current a")[0];
                        a && t(a, !1)
                    })
                }
            }), e(function() {
                function t() {
                    var t = e('.navbar-collapse form[role="search"].active');
                    t.find("input").val(""), t.removeClass("active")
                }
                e('header, .navbar-collapse form[role="search"] button[type="reset"]').on("click keyup", function(n) {
                    console.log(n.currentTarget), (27 == n.which && e('.navbar-collapse form[role="search"]').hasClass("active") || "reset" == e(n.currentTarget).attr("type")) && t()
                }), e(document).on("click", '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(t) {
                    t.preventDefault();
                    var n = e(this).closest("form"),
                        i = n.find("input");
                    n.addClass("active"), i.focus()
                })
            })
          
    }(jQuery);    