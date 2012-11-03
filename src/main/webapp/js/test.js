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

var my_states = [];
var last_pump = 0;
var last_action = ""
var lastovername = ""

var second_fighter = new Fighter("ryu",ryu,100);
                    second_fighter.y = 100;
                    second_fighter.x = 178;
                    second_fighter.name = "Ryu2";
                    second_fighter.nameStyle = "#FFFFCC";

var fireballs = [];

var fighters = [my_fighter];
fighters.push(second_fighter);

function game_handler() {
    // test set state
/*
        id,
        asof,
        x,y,
        action,
        action_start_time,
        override_animation,
        override_start_time,
        crouching,
        jumping
*/
    //get players state
    //if(new Date().getTime() - last_pump > 250) {
    //if(true) {
    var override_action_name = ""
    if(my_fighter.currentAction.override_animation)
        override_action_name = my_fighter.currentAction.override_animation.name;

    if(my_fighter.currentAction.name != last_action || override_action_name != lastovername) {
        var ovr = null;
        var ovrst = null;

        if(my_fighter.currentAction.override_animation) {
            ovr = my_fighter.currentAction.override_animation.name;
            ovrst = my_fighter.currentAction.override_start_time;
        }

        var cur_state = [
            new Date().getTime()+1000,
            my_fighter.x+150,
            my_fighter.y,
            my_fighter.currentAction.name,
            my_fighter.currentAction.start_time+1000,
            ovr,
            ovrst+1000,
            my_fighter.crouching,
            my_fighter.jumping
        ]

        my_states.push(cur_state);
        last_pump = new Date().getTime();
        last_action = my_fighter.currentAction.name;
        lastovername =  override_action_name;

        console.log("STATE: "+cur_state)
    }

    if(my_states[0]) {
        if(my_states[0][0] - new Date().getTime() < 0) {
            second_fighter.set_state(
                second_fighter.id,
                my_states[0][0],
                my_states[0][1],
                my_states[0][2],
                my_states[0][3],
                my_states[0][4],
                my_states[0][5],
                my_states[0][6],
                my_states[0][7],
                my_states[0][8]
            )
            my_states.shift();
        }
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


