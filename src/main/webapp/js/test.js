var canvas = document.getElementById("main");
var context = canvas.getContext("2d");

sheet_ryu_idle.image_sheet.onload = function() {
                                      setInterval('draw_handler()', 75);
                                  };

var my_fighter = new Fighter("ryu",ryu);
my_fighter.y = 120;

$(document).keydown(function(e){
switch(e.keyCode) {
    case 65:
        //backwards
        my_fighter.dash_backward();
        break;
    case 68:
        //forwards
        my_fighter.dash_forward();
        break;
    case 87:
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
        break;
    case 83:
        my_fighter.stand();
        break;
}
});


function draw_handler() {
    canvas.width = canvas.width;

    my_fighter.x = my_fighter.x % canvas.width;

    my_fighter.render(canvas,context)
}
