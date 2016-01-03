/**
 * Etch-a-Sketch dynamic controls
 * ===============================
 *
 * @author GalenS <galen.scovell@gmail.com>
 */

function normalMode() {
    $("div.column").mouseenter(function() {
        $(this).css("opacity", 1.0);
    });
}

function colorMode() {
    $("div.column").mouseenter(function() {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        
        $(this).css("background", "rgb(" + red +", " + green +", " + blue +")");
        $(this).css("opacity", 0.8);
    });
}

function trailMode() {
    $("div.column").mouseenter(function() {
        $(this).fadeTo(0, 1);
        $(this).mouseleave(function() {
            $(this).fadeTo(600, 0.3);
        });
    });
}

function gradualMode() {
    $("div.column").mouseenter(function() {
        var block_opacity = $(this).css("opacity");
        if (block_opacity < 1) {
            $(this).css("opacity", block_opacity * 2);
        }
    });
}

function toggleMode() {
    $("div.column").mouseenter(function() {
        var current = $(this).css("opacity");
        if (current == 1) {
            $(this).css("opacity", 0.3);
        }
        else {
            $(this).css("opacity", 1);
        }
    });
}

function constructGrid() {
    $("#container").text("");
    $(".row").remove();

    for(var y = 0; y < 20; y++) {
        $("#container").append("<div class='row'></div>");
    }

    for(var x = 0; x < 22; x++) {
        $(".row").append("<div class='column'></div>");
    }
}

$(document).ready(function() {
    constructGrid();
    normalMode();

    // Mode selection
    $(".button").click(function () {
        constructGrid();
        mode = $(this).attr("id");

        if (mode === "color") {
            colorMode();
        } else if (mode === "trail") {
            trailMode();
        } else if (mode === "gradual") {
            gradualMode();
        } else if (mode === "toggle") {
            toggleMode();
        } else {
            normalMode();
        }
    })
});