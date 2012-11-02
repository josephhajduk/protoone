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

var fps = 0, now, lastUpdate = (new Date)*1 - 1;

// The higher this value, the less the FPS will be affected by quick changes
// Setting this to 1 will show you the FPS of the last sampled frame only
var fpsFilter = 50;

var fpsOut = document.getElementById('fps');
setInterval(function(){
fpsOut.innerHTML = fps.toFixed(1) + "fps";
}, 1000);

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

    var thisFrameFPS = 1000 / ((now=new Date) - lastUpdate);
    fps += (thisFrameFPS - fps) / fpsFilter;
    lastUpdate = now;

    doGamePad();

    game_canvas.width = game_canvas.width;

    var test_result = my_fighter.render(game_context)

    for(var i = 0; i < fireballs.length; i++ ) {
        fireballs[i].render(game_context)
    }


}


