var canvas = document.getElementById("main");
var context = canvas.getContext("2d");
var sprite_sheet = new Image();
sprite_sheet.src = "images/testsheet.gif";
sprite_sheet.onload = function() {
    setInterval('draw_handler()', 75);
};

var walking_direction = 0;
var char_x = 0;
var char_y = -55;
var char_animation_counter = 0;
var punching = false;

function draw_handler() {
    // clear canvas
    canvas.width = canvas.width;

    if(walking_direction == 1) {
        char_x += 8;
        drawWalking(char_animation_counter % 5,char_x % 768,char_y)
        char_animation_counter = char_animation_counter + 1
    } else if (walking_direction == -1) {
        char_x -= 8;
        drawWalking(4-char_animation_counter % 5,char_x % 768,char_y)
        char_animation_counter = char_animation_counter + 1
    }
    else {
        if(punching != 0) {
            drawPunching(char_animation_counter % 2,char_x % 768,char_y,punching-1);
            char_animation_counter = char_animation_counter + 1;
            if(char_animation_counter > 1)
                punching = 0;
        } else {
            drawStanding(char_x % 768,char_y)
        }
    }

}

function drawWalking(n,x,y) {
    var dwidth = 48
    var doffset = 64
    context.drawImage(sprite_sheet,n*dwidth+doffset,0,dwidth,170,x, y,dwidth,170);
    context.drawImage(sprite_sheet,n*dwidth+doffset,0,dwidth,170,x-768, y,dwidth,170);
    context.drawImage(sprite_sheet,n*dwidth+doffset,0,dwidth,170,x+768, y,dwidth,170);
}

function drawStanding(x,y) {
    context.drawImage(sprite_sheet,0,0,60,170,x, y,60,170);
    context.drawImage(sprite_sheet,0,0,60,170,x-768, y,60,170);
    context.drawImage(sprite_sheet,0,0,60,170,x+768, y,60,170);
}

function drawPunching(n,x,y,o) {
   var dheight = 164
   var dwidth = 55

   // 0 -> 10
   // 2/2 -> 20
   // 4/2 -> 30
   var doffset = 12 + o/2*4
   context.drawImage(sprite_sheet,(n+o)*dwidth+doffset,dheight,dwidth+(n%2)*(6+o*2),170,x, y+4,dwidth+(n%2)*(6+o*2),170);
   context.drawImage(sprite_sheet,(n+o)*dwidth+doffset,dheight,dwidth+(n%2)*(6+o*2),170,x-768, y+4,dwidth+(n%2)*(6+o*2),170);
   context.drawImage(sprite_sheet,(n+o)*dwidth+doffset,dheight,dwidth+(n%2)*(6+o*2),170,x+768, y+4,dwidth+(n%2)*(6+o*2),170);
}

$(document).keydown(function(e){
switch(e.keyCode) {
    case 65: // a
        walking_direction = -1;
        break;
    case 68:
        walking_direction = 1;
        break;
    case 78:
        punching = 1;
        walking_direction = 0;
        char_animation_counter = 0;
        break;
    case 74:
        punching = 3;
        walking_direction = 0;
        char_animation_counter = 0;
        break;
    case 73:
        punching = 5;
        walking_direction = 0;
        char_animation_counter = 0;
        break;
}
});

$(document).keyup(function(e){
    walking_direction = 0;
    char_animation_counter = 0;
});