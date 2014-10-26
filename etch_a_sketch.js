
$(document).ready(function() {
	var columns = 0;
	var mode = '';


	$('.button').click(function () {
		mode = $(this).attr('id');
		switch (mode) {
			case 'color':
				columnNumber();
				colorMode();
				break;
			case 'trail':
				columnNumber();
				trailMode();
				break;
			case 'gradual':
				columnNumber();
				gradualMode();
				break;
			case 'normal':
				columnNumber();
				normalMode();
				break;
		}	
	})
});



// Mode functions
function normalMode() {
	$('div.column').mouseenter(function() {
		$(this).css('opacity', 1.0);
	});
}

function colorMode() {
	$('div.column').mouseenter(function() {
		$(this).css('opacity', 0.0);
	});
}

function trailMode() {
	$('div.column').mouseenter(function() {
		$(this).fadeTo(10, 1);
		$(this).mouseleave(function() {
			$(this).fadeTo(300, 0.3);
		});
	});
}

function gradualMode() {
	$('div.column').mouseenter(function() {
		var block_opacity = $(this).css("opacity");
		if (block_opacity < 1) {
			$(this).css("opacity", block_opacity * 2);
		}
	});
}



// Board creation functions
function gridCreation(size) {

	$('.row').remove();

	for(var i = 0; i < size; i++) {
		$('#container').append('<div class="row"></div>');
	}

	for(var n = 0; n < size; n++) {
		$('.row').append('<div class="column"></div>');
	}
}

function columnNumber() {
	var rows = prompt("How many rows/columns? (1-10)");

	while (rows < 1 || rows > 10) {
		alert("Outside of range.");
		rows = prompt("How many rows/columns? (1-10)");
	}

	gridCreation(rows);
}
