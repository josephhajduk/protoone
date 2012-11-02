var game_canvas = document.getElementById("main");
var game_context = game_canvas.getContext("2d");

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

sheet_fireball.image_sheet.onload = function() {
                                      game_handler();
                                  };

var my_fighter = new Fighter("ryu",ryu,150);
my_fighter.y = 150;

var moving = 0;


// setup gamepad

gamepadSupport.init()

//

var fireballs = [];

$(document).keydown(function(e){
switch(e.keyCode) {
    case 65:
        //backwards
        moving = -1
        my_fighter.dash_backward();
        break;
    case 68:
        //forwards
        moving = 1;
        my_fighter.dash_forward();
        break;
    case 87:
        if(moving == 1)
            my_fighter.jump_forward();
        else if(moving == -1)
            my_fighter.jump_backward();
        else
            my_fighter.jump();
        break;
    case 70:
        my_fighter.special1();
        break;
    case 71:
        my_fighter.special2();
        break;
    case 78:
        my_fighter.light_punch();
        break;
    case 74:
        my_fighter.medium_punch();
        break;
    case 73:
        my_fighter.heavy_punch();
        break;
    case 77:
        my_fighter.light_kick();
        break;
    case 75:
        my_fighter.medium_kick();
        break;
    case 79:
        my_fighter.heavy_kick();
        break;
    case 83:
        my_fighter.duck();
        break;
}
});

$(document).keyup(function(e){
switch(e.keyCode) {
    case 65:
        //backwards
        moving = 0;
        my_fighter.stop();
        break;
    case 68:
        //forwards
        my_fighter.stop();
        moving = 0;
        break;
    case 83:
        moving = 0;
        my_fighter.stand();
        break;
}
});

var ANALOG_BUTTON_THRESHOLD = .5;

function checkGamePad() {
    var gamepad = gamepadSupport.gamepads[0];

    if(gamepad) {

        if (gamepad.buttons[2] > ANALOG_BUTTON_THRESHOLD) {
            my_fighter.match_moves(["lp","p"])
            my_fighter.light_punch();
        } else if (gamepad.buttons[3] > ANALOG_BUTTON_THRESHOLD) {
            my_fighter.match_moves(["mp","p"])
            my_fighter.medium_punch();
        } else if (gamepad.buttons[5] > ANALOG_BUTTON_THRESHOLD) {
            my_fighter.match_moves(["hp","p"])
            my_fighter.heavy_punch();

        } else if (gamepad.buttons[0] > ANALOG_BUTTON_THRESHOLD) {
            my_fighter.match_moves(["lk","k"])
            my_fighter.light_kick();
        } else if (gamepad.buttons[1] > ANALOG_BUTTON_THRESHOLD) {
            my_fighter.match_moves(["mk","k"])
            my_fighter.medium_kick();
        } else if (gamepad.buttons[7] > ANALOG_BUTTON_THRESHOLD) {
            my_fighter.match_moves(["hk","k"])
            my_fighter.heavy_kick();

        } else if (gamepad.buttons[4] > ANALOG_BUTTON_THRESHOLD) {
            my_fighter.special1();
        } else if (gamepad.buttons[6] > ANALOG_BUTTON_THRESHOLD) {
            my_fighter.special2();
        }

        // crouching or standing or jumping
        if (gamepad.axes[1] > 0.8) {
            if(gamepad.axes[0] > 0.5)
                my_fighter.match_moves(["df"])
            else if(gamepad.axes[0] < -0.5)
                my_fighter.match_moves(["db"])
            else
                my_fighter.match_moves(["d"])
            my_fighter.duck();
        } else if (gamepad.axes[1] < -0.5) {
            // TODO: proper jumping
            if(gamepad.axes[0] > 0.5) {
                my_fighter.match_moves(["uf"])
                my_fighter.jump_forward();
            } else if(gamepad.axes[0] < -0.5) {
                my_fighter.match_moves(["ub"])
                my_fighter.jump_backward();
            } else {
                my_fighter.match_moves(["u"])
                my_fighter.jump();
            }
        } else
            my_fighter.stand();

        // move
        if (gamepad.axes[0] > 0.8) {
             my_fighter.match_moves(["f"])
             my_fighter.dash_forward();
        } else if (gamepad.axes[0] < -0.8) {
             my_fighter.match_moves(["b"])
             my_fighter.dash_backward();
        }
     }

}

function game_handler() {

    requestAnimFrame(function() {
              game_handler();
    });

    // TODO: proper animatino frame loop
    checkGamePad();

    game_canvas.width = game_canvas.width;

    my_fighter.x = my_fighter.x % game_canvas.width;

    var test_result = my_fighter.render(game_canvas,game_context)

    //if(!test_result)
    //    alert("NO")

    for(var i = 0; i < fireballs.length; i++ ) {
        fireballs[i].render(game_context)
    }
}
