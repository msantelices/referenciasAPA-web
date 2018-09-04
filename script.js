// Scroll del menu y botones
$('.scroll-btn').click(function(event) {
	var id = $(this).attr("href");
	var idIndex = id.indexOf('http');
	if( id != "#" && idIndex != 0 ) {
		var offset = 90;
		var target = $(id).offset().top - offset;
		$('html, body').animate({
			scrollTop: target
		}, 500);
		event.preventDefault();
	}
});