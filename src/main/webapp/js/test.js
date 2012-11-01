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
        my_fighter.dash_backward();
        break;
    case 68:
        //forwards
        my_fighter.dash_forward();
        moving = 1;
        break;
    case 87:
        if(moving == 1)
            my_fighter.jump_forward();
        else
            my_fighter.jump();
        break;
    case 70:
        my_fighter.special1();
        break;
    case 83:
        my_fighter.duck();
        break;
    default:
        alert(e.keyCode);
        break;
}
});

$(document).keyup(function(e){
switch(e.keyCode) {
    case 65:
        //backwards
        my_fighter.stop();
        break;
    case 68:
        //forwards
        my_fighter.stop();
        moving = 0;
        break;
    case 83:
        my_fighter.stand();
        break;
}
});


function draw_handler() {
    game_canvas.width = game_canvas.width;

    my_fighter.x = my_fighter.x % game_canvas.width;

    my_fighter.render(game_canvas,game_context)

}
