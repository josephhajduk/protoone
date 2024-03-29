
// setup gamepad
gamepadSupport.init()

var ANALOG_BUTTON_THRESHOLD = .5;

// wonderful gamepad controls
function doGamePad() {
    var gamepad = gamepadSupport.gamepads[0];

    if(gamepad) {

        if (gamepad.buttons[2] > ANALOG_BUTTON_THRESHOLD) {
            my_fighter.match_moves(["lp","p"])
        } else if (gamepad.buttons[3] > ANALOG_BUTTON_THRESHOLD) {
            my_fighter.match_moves(["mp","p"])
        } else if (gamepad.buttons[5] > ANALOG_BUTTON_THRESHOLD) {
            my_fighter.match_moves(["hp","p"])
        } else if (gamepad.buttons[0] > ANALOG_BUTTON_THRESHOLD) {
            my_fighter.match_moves(["lk","k"])
        } else if (gamepad.buttons[1] > ANALOG_BUTTON_THRESHOLD) {
            my_fighter.match_moves(["mk","k"])
        } else if (gamepad.buttons[7] > ANALOG_BUTTON_THRESHOLD) {
            my_fighter.match_moves(["hk","k"])
        } else if (gamepad.buttons[4] > ANALOG_BUTTON_THRESHOLD) {
            my_fighter.match_moves(["s1","s"])
        } else if (gamepad.buttons[6] > ANALOG_BUTTON_THRESHOLD) {
            my_fighter.match_moves(["s2","s"])
        }


        if (Math.abs(gamepad.axes[0]) < 0.5 && Math.abs(gamepad.axes[1]) < 0.5) {
            my_fighter.match_moves(["o","ox","oy"])
            my_fighter.stand();
            return;
        }

        // crouching or standing or jumping
        if (gamepad.axes[1] > 0.8) {
            if(gamepad.axes[0] > 0.45)
                my_fighter.match_moves(["df"])
            else if(gamepad.axes[0] < -0.45)
                my_fighter.match_moves(["db"])
            else
                my_fighter.match_moves(["d"])
            my_fighter.duck();
        } else if (gamepad.axes[1] < -0.45) {
            if(gamepad.axes[0] > 0.5) {
                my_fighter.match_moves(["uf"])
            } else if(gamepad.axes[0] < -0.45) {
                my_fighter.match_moves(["ub"])
            } else {
                my_fighter.match_moves(["u"])
            }
        } else  {
            my_fighter.match_moves(["oy"]);
            my_fighter.stand();
        }

        // move
        if (gamepad.axes[0] > 0.8) {
             my_fighter.match_moves(["f"])
        } else if (gamepad.axes[0] < -0.8) {
             my_fighter.match_moves(["b"])
        } else {
            my_fighter.match_moves(["ox"])
            //my_fighter.stop();
        }

     }

}


var moving = 0;

// ugly keyboard controls
$(document).keydown(function(e){
switch(e.keyCode) {
    case 65:
        //backwards
        moving = -1
            my_fighter.match_moves(["b"])
        break;
    case 68:
        //forwards
        moving = 1;
            my_fighter.match_moves(["f"])
        break;
    case 87:
        if(moving == 1)
            my_fighter.match_moves(["uf"])
        else if(moving == -1)
            my_fighter.match_moves(["ub"])
        else
            my_fighter.match_moves(["u"])
        break;
    case 78:
        my_fighter.match_moves(["lp","p"])
        break;
    case 74:
        my_fighter.match_moves(["mp","p"])
        break;
    case 73:
        my_fighter.match_moves(["hp","p"])
        break;
    case 77:
        my_fighter.match_moves(["lk","k"])
        break;
    case 75:
        my_fighter.match_moves(["mk","k"])
        break;
    case 79:
        my_fighter.match_moves(["hk","k"])
        break;
    case 70:
        my_fighter.match_moves(["d"])
        my_fighter.match_moves(["df"])
        my_fighter.match_moves(["f"])
        my_fighter.match_moves(["hp","p"])
        break;
    case 71:
        my_fighter.match_moves(["f"])
        my_fighter.match_moves(["d"])
        my_fighter.match_moves(["df"])
        my_fighter.match_moves(["hp","p"])
        break;
    case 72:
        my_fighter.match_moves(["d"])
        my_fighter.match_moves(["db"])
        my_fighter.match_moves(["b"])
        my_fighter.match_moves(["hk","k"])
        break;
    case 83:
        if(moving == 1)
          my_fighter.match_moves(["df"])
        else if(moving == -1)
          my_fighter.match_moves(["db"])
        else
          my_fighter.match_moves(["d"])
        my_fighter.duck();
        break;
}
});

$(document).keyup(function(e){
my_fighter.match_moves(["o"]);
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

