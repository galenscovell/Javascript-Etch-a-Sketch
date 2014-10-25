
$(document).ready(function() {
	console.log("Ready!");
	var columns = 10;
	var mode = 'normal';


	columnNumber();


	switch (mode) {
		case 'normal':
		normalMode();
		break;
	}

});


function normalMode() {
	$('div.column').mouseenter(function() {
		$(this).css('opacity', 0.6);
	});
}


function gridCreation(size) {

	for(var i = 0; i < size; i++) {
		$('#container').append('<div class="row"</div>');
	}

	for(var n = 0; n < size; n++) {
		$('.row').append('<div class="column"></div>');
	}
}

function columnNumber() {
	var rows = prompt("How many rows? (1-10)");

	while (rows < 1 || rows > 10) {
		alert("Outside of range.");
		rows = prompt("How many rows? (1-20)");
	}

	gridCreation(rows);
}
