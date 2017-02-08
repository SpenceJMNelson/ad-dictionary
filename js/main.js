$( document ).ready(function() {

	$( ".circle-outer" ).click(function() {
	  	$( ".circle" ).removeClass( "active" );
	  	$( ".circle" ).removeClass( "initial" );
	  	$( ".circle" ).removeClass( "active-2" );
	  	$( "li" ).removeClass( "active" );
	  	$( ".circle" ).removeClass( "active-3" );
	  	$( ".circle-outer" ).addClass( "active" );
	  	$( ".insight" ).addClass( "active" );
	});

	$( ".circle-middle" ).click(function() {
	  	$( ".circle" ).removeClass( "active" );
	  	$( ".circle" ).removeClass( "initial" );
	  	$( "li" ).removeClass( "active" );
	  	$( ".circle" ).removeClass( "active-3" );
	  	$( ".circle-middle" ).addClass( "active" );
	  	$( ".circle-outer" ).addClass( "active-2" );
	  	$( ".fact" ).addClass( "active" );
	});

	

	$( ".circle-inner" ).click(100, function() {
	  	$( ".circle" ).removeClass( "active" );
	  	$( ".circle" ).removeClass( "initial" );
	  	$( "li" ).removeClass( "active" );
	  	$( ".circle" ).removeClass( "active-2" );
	  	$( ".circle-inner" ).addClass( "active" );
	  	$( ".circle-middle" ).addClass( "active-3" );
	  	$( ".circle-outer" ).addClass( "active-3" );
	  	$( ".reverie" ).addClass( "active" );

	});

	$( ".about-link" ).click(function() {
		$( ".about-window" ).fadeIn( 500, function() {
		    $( ".about-window, .modalscale" ).toggleClass( "about-show" );
		  });
	});

	$( ".about-window-close" ).click(function() {
		$( ".about-window" ).fadeOut( 500, function() {
		    $( ".about-window, .modalscale" ).toggleClass( "about-show" );
		  });
	});

	

	$(document).on('click', '#right-word-list li', function() {
    	$( this ).toggleClass( "active" );
	});

	$(document).on('click', '.circle.active li', function() {
    	$( this ).toggleClass( "modal" );
	});

	$(document).on('click', '.circle li.modal a', function() {
		var crosslinkname = $(this).attr('href');
    	$('.circle li[data-crosslink="' + crosslinkname + '"]').toggleClass( "modal" );
	});

	


 });