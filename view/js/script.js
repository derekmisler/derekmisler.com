var lnStickyNavigation;

$(document).ready(function()
{	
	$('img').unveil();
	applyHeader();
	applyNavigation(); 
	applyMailTo();
	applyResize();
	checkHash();
	checkBrowser();
});

/* HEADER FUNCTIONS */

function applyHeader()
{
	$('.jumbotron').css({ height: ($(window).height()) +'px' }).unveil();
}	

/**
* jQuery Unveil
* A very lightweight jQuery plugin to lazy load images
* http://luis-almeida.github.com/unveil
*
* Licensed under the MIT license.
* Copyright 2013 Luís Almeida
* https://github.com/luis-almeida
*/

;(function($) {

	$.fn.unveil = function(threshold, callback) {

		var $w = $(window),
				th = threshold || 0,
				retina = window.devicePixelRatio > 1,
				attrib = retina? "data-src-retina" : "data-src",
				images = this,
				loaded;

		this.one("unveil", function() {
			var source = this.getAttribute(attrib);
			source = source || this.getAttribute("data-src");
			if (source) {
				this.setAttribute("src", source);
				if (typeof callback === "function") callback.call(this);
			}
		});

		function unveil() {
			var inview = images.filter(function() {
				var $e = $(this);
				if ($e.is(":hidden")) return;

				var wt = $w.scrollTop(),
						wb = wt + $w.height(),
						et = $e.offset().top,
						eb = et + $e.height();

				return eb >= wt - th && et <= wb + th;
			});

			loaded = inview.trigger("unveil");
			images = images.not(loaded);
		}

		$w.on("scroll.unveil resize.unveil lookup.unveil", unveil);

		unveil();

		return this;

	};

})(window.jQuery || window.Zepto);
/* NAVIGATION FUNCTIONS */

function applyNavigation()
{
	applyClickEvent();
	applyNavigationFixForPhone();
	applyScrollSpy();
	applyStickyNavigation();
}

function applyClickEvent()
{
	$('a[href*=#]').on('click', function(e)
	{
		e.preventDefault();
		
		if( $( $.attr(this, 'href') ).length > 0 )
		{
			$('html, body').animate(
			{
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 400);
		}
		return false;
	});
}

function applyNavigationFixForPhone()
{
	$('.navbar li a').click(function(event) 
	{
		$('.navbar-collapse').removeClass('in').addClass('collapse');
	});
}

function applyScrollSpy()
{
	$('.scroll-down').on('activate.bs.scrollspy', function() 
	{
		window.location.hash = $('.nav .active a').attr('href').replace('#', '/');
	});
}

function applyStickyNavigation()
{
	lnStickyNavigation = $('.scroll-down').offset().top + 0;
	
	$(window).on('scroll', function() 
	{  
		stickyNavigation();  
	});  
	
	stickyNavigation();
}

function stickyNavigation()
{         
	if($(window).scrollTop() > lnStickyNavigation) 
	{
		$('body').addClass('fixed');
	} 
	else
	{
		$('body').removeClass('fixed');
	}
}

/* RESIZE FUNCTION */

function applyResize()
{
	$(window).on('resize', function() 
	{  
		lnStickyNavigation = $('.scroll-down').offset().top + 0;
	
		$('.jumbotron').css({ height: ($(window).height()) +'px' });
	}); 
}

/* HASH FUNCTION */

function checkHash()
{
	lstrHash = window.location.hash.replace('/', '#');
	
	if($('a[href='+ lstrHash +']').length > 0)
	{
		$('a[href='+ lstrHash +']').trigger('click');
	}
}