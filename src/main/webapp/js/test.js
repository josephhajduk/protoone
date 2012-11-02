var requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();

var game_canvas = document.getElementById("main");
var game_context = game_canvas.getContext("2d");

// TODO: better loading check
sheet_fireball.image_sheet.onload = function() {
                                      game_handler();
                                  };

var my_fighter = new Fighter("ryu",ryu,100);
my_fighter.y = 100;

var fireballs = [];

function game_handler() {
    // request next frame
    requestAnimFrame(function() {
              game_handler();
    });

    doGamePad();

    game_canvas.width = game_canvas.width;

    var test_result = my_fighter.render(game_context)

    for(var i = 0; i < fireballs.length; i++ ) {
        fireballs[i].render(game_context)
    }
}
