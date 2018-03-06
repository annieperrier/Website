$(function() {

	// fix scrollspy for using a fixed navbar
	// not needed anymore when using negative margin for sections
	var scrolloffset = 0;

	// configure scrollspy
	$('body').scrollspy({ target: '.navbar', offset: scrolloffset });

	// Add smooth scrolling to all links inside a navbar
	$('#nav-site a, .navbar-brand').on('click', function(event){
		// Prevent default anchor click behavior
		event.preventDefault();

		// some links have no reference
		var linkEl = $($(this).attr('href'))[0];
		if (linkEl)
		{
			// Store hash (#)
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
			$('html, body').animate({
				scrollTop: ($(hash).offset().top-scrolloffset+1)
			}, 800, function(){
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});

			// hide xs navbar dropdown
			$("#navbar").collapse('hide');
		}
	});
});