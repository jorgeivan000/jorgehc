




/*
     FILE ARCHIVED ON 12:09:50 Oct 20, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:50:20 Apr 1, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/**
 * cbpAnimatedHeader.js v1.0.0
 * /web/20161020120950/http://www.codrops.com
 *
 * Licensed under the MIT license.
 * /web/20161020120950/http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * /web/20161020120950/http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			//$( ".navbar-default" ).css( "background-color", "#FFFFFF" );
			classie.add( header, 'navbar-shrink' );
		}
		else {
			//$( ".navbar-default" ).css( "background-color", "rgba(44, 62, 80, 0)" );
			
			classie.remove( header, 'navbar-shrink' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();