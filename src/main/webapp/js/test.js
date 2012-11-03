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
var fpsFilter = 60;

var fpsOut = document.getElementById('fps');

var game_canvas = document.getElementById("main");
var game_context = game_canvas.getContext("2d");

// TODO: better loading check
sheet_fireball.image_sheet.onload = function() {
                                      game_handler();
                                  };

var my_fighter = new Fighter("ryu",ryu,100);
                 my_fighter.y = 100;
                 my_fighter.name = "Ryu"

var second_fighter = new Fighter("ryu",ryu,100);
                    second_fighter.y = 100;
                    second_fighter.x = 178;
                    second_fighter.name = "Ryu2";
                    second_fighter.nameStyle = "#FFFFCC";

var fireballs = [];

var fighters = [my_fighter];
fighters.push(second_fighter);

function game_handler() {
    // request next frame
    requestAnimFrame(function() {
              game_handler();
    });

    var thisFrameFPS = 1000 / ((now=new Date) - lastUpdate);
    fps += (thisFrameFPS - fps) / fpsFilter;
    lastUpdate = now;
    fpsOut.innerHTML = fps.toFixed(0) + "fps";

    doGamePad();

    // clear canvas
    game_canvas.width = game_canvas.width;

    for(var i = 0; i < fighters.length; i++)
        fighters[i].render(game_context)

    for(var i = 0; i < fireballs.length; i++ ) {
        fireballs[i].render(game_context)
    }


}


