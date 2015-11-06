<script>
/*!
* Based on scrolldepth.js v0.4.1 by Rob Flaherty (@robflaherty)
* Simplified and converted to support Google Tag Manager
*/
;(function ( $, window, document, undefined ) {
	"use strict";
	var $window = $(window),
		cache = [];
	$.scrollDepth = function() {
		var startTime = +new Date;
		// Return early if document height is too small
		if ( $(document).height() < 0 ) {
			return;
		}
		/*
		* Functions
		*/
		function sendEvent(action, label) {
			dataLayer.push({'event':'ScrollDistance', 'eventCategory':'Scroll Depth', 'eventAction': action, 'eventLabel': label, 'eventValue': 1, 'eventNonInteraction': true});
		}
		function calculateMarks(docHeight) {
			return {
				'25%' : parseInt(docHeight * 0.25, 10),
				'50%' : parseInt(docHeight * 0.50, 10),
				'75%' : parseInt(docHeight * 0.75, 10),
				// 1px cushion to trigger 100% event in iOS
				'100%': docHeight - 1
			};
		}
		function checkMarks(marks, scrollDistance) {
			// Check each active mark
			$.each(marks, function(key, val) {
				if ( $.inArray(key, cache) === -1 && scrollDistance >= val ) {
					sendEvent('Percentage', key);
					cache.push(key);
				}
			});
		}
		/*
		* Scroll Event
		*/
		$window.on('scroll.scrollDepth') {
			// Recalculate height and percentage marks to account for DOM changes
			var docHeight = $(document).height(),
			winHeight = window.innerHeight ? window.innerHeight : $window.height(),
			scrollDistance = $window.scrollTop() + winHeight,
			marks = calculateMarks(docHeight);
			// If all marks already hit, unbind scroll event
			if (cache.length >= 4) {
				$window.off('scroll.scrollDepth');
				return;
			}
			// Check standard marks
			checkMarks(marks, scrollDistance);
		};
	};
})( jQuery, window, document );
jQuery.scrollDepth();
</script>