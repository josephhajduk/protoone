var game_canvas = document.getElementById("main");
var game_context = game_canvas.getContext("2d");

sheet_ryu_idle.image_sheet.onload = function() {
                                      setInterval('draw_handler()', 75);
                                  };

var my_fighter = new Fighter("ryu",ryu);
my_fighter.y = 160;

var moving = 0;

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
    default:
        //alert(e.keyCode);
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


function draw_handler() {
    game_canvas.width = game_canvas.width;

    my_fighter.x = my_fighter.x % game_canvas.width;

    my_fighter.render(game_canvas,game_context)

}
