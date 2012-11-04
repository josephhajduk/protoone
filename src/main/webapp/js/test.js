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

var last_action = ""
var lastovername = ""


var server_time_diff = 3500;


var fireballs = [];

var fighters = [my_fighter];

function register_fighter(id) {
    // if its not me
    if(id != my_fighter.id) {

        // make sure its not already registered
        var found = false;
        for(var i = 0; i<fighters.length; i++) {
            if(fighters[i].id == id)
                return fighters[i];
        }

        if(!found) {
            var newFighter = new Fighter(id,ryu,100)
            newFighter.y = 100;
            newFighter.id = id;
            newFighter.name = id;
            fighters.push(newFighter);
            return newFighter;
        }
    }
}

function game_handler() {

    var override_action_name = ""
    if(my_fighter.currentAction.override_animation)
        override_action_name = my_fighter.currentAction.override_animation.name;

    if(my_fighter.currentAction.name != last_action || override_action_name != lastovername) {
        console.log("SENDING")
        var ovr = null;
        var ovrst = null;

        if(my_fighter.currentAction.override_animation) {
            ovr = my_fighter.currentAction.override_animation.name;
            ovrst = my_fighter.currentAction.override_start_time+getOffset();
        }

        last_action = my_fighter.currentAction.name;
        lastovername =  override_action_name;

        sendUpdate(
           my_fighter.id,
           my_fighter.name,
           getTime()+getOffset(),
           my_fighter.x,
           my_fighter.y,
           my_fighter.currentAction.name,
           my_fighter.currentAction.start_time+getOffset(),
           ovr,
           ovrst,
           my_fighter.crouching,
           my_fighter.jumping
        )
    }
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


