
// Ready document functions
$(document).ready(function() {
	var columns = 0;
	var mode = '';

    // Mode selection
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
            case 'toggle':
                columnNumber();
                toggleMode();
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
		
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        
        $(this).css('background', "rgb(" + red +", " + green +", " + blue +")");
        $(this).css("opacity", 0.8);
	});
}

function trailMode() {
	$('div.column').mouseenter(function() {
		$(this).fadeTo(0, 1);
		$(this).mouseleave(function() {
			$(this).fadeTo(600, 0.3);
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

function toggleMode() {
    $('div.column').mouseenter(function() {
        var current = $(this).css("opacity");
        if (current == 1) {
            $(this).css("opacity", 0.3);
        }
        else {
            $(this).css("opacity", 1);
        }
    });
}




// Board creation functions
function gridCreation(size) {

    $("#container").text("");
	$('.row').remove();

	for(var i = 0; i < size; i++) {
		$('#container').append('<div class="row"></div>');
	}

	for(var n = 0; n < size; n++) {
		$('.row').append('<div class="column"></div>');
	}
}

function columnNumber() {
	var rows = prompt("How many rows/columns? (1-20)");

	while (rows < 1 || rows > 20) {
		alert("Outside of range.");
		rows = prompt("How many rows/columns? (1-20)");
	}

	gridCreation(rows);
}
