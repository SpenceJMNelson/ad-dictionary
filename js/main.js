$( document ).ready(function() {

	$( ".circle-outer" ).click(function() {
	  	$( ".circle" ).removeClass( "active" );
	  	$( "li" ).removeClass( "active" );
	  	$( ".circle" ).removeClass( "active-3" );
	  	$( ".circle-outer" ).addClass( "active" );
	  	$( ".insight" ).addClass( "active" );
	});

	$( ".circle-middle" ).click(function() {
	  	$( ".circle" ).removeClass( "active" );
	  	$( "li" ).removeClass( "active" );
	  	$( ".circle" ).removeClass( "active-3" );
	  	$( ".circle-middle" ).addClass( "active" );
	  	$( ".circle-outer" ).addClass( "active-2" );
	  	$( ".fact" ).addClass( "active" );
	});

	$( ".circle-inner" ).click(function() {
	  	$( ".circle" ).removeClass( "active" );
	  	$( "li" ).removeClass( "active" );
	  	$( ".circle" ).removeClass( "active-2" );
	  	$( ".circle-inner" ).addClass( "active" );
	  	$( ".circle-middle" ).addClass( "active-3" );
	  	$( ".circle-outer" ).addClass( "active-3" );
	  	$( ".reverie" ).addClass( "active" );

	});

	$(document).on('click', '#right-word-list li', function() {
    	$( this ).toggleClass( "active" );
	});



 });