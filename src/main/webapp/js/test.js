var canvas = document.getElementById("main");
var context = canvas.getContext("2d");

var sheet_ryu_idle = new SpriteSheet("ryu_idle","images/ryu_idle.png",384,224,10)
var sheet_ryu_dash_forward = new SpriteSheet("ryu_dash_forward","images/ryu_dash_forward.png",384,224,11)
var sheet_ryu_dash_backwards = new SpriteSheet("ryu_dash_forward","images/ryu_dash_backwards.png",384,224,11)
var sheet_ryu_duck = new SpriteSheet("ryu_duck","images/ryu_duck.png",384,224,6)
var sheet_ryu_crouching = new SpriteSheet("ryu_crouching","images/ryu_crouching.png",384,224,4)
var sheet_ryu_up_jump = new SpriteSheet("ryu_up_jump","images/ryu_up_jump.png",384,224,11)
var sheet_ryu_roll_jump = new SpriteSheet("ryu_roll_jump","images/ryu_roll_jump.png",384,224,15)
var sheet_ryu_jab = new SpriteSheet("ryu_jab","images/ryu_jab.png",384,224,4)
var sheet_ryu_medium_punch = new SpriteSheet("ryu_medium_punch","images/ryu_medium_punch.png",384,224,8)
var sheet_ryu_heavy_punch = new SpriteSheet("ryu_heavy_punch","images/ryu_heavy_punch.png",384,224,10)
var sheet_ryu_light_kick = new SpriteSheet("ryu_light_kick","images/ryu_light_kick.png",384,224,7)
var sheet_ryu_knee = new SpriteSheet("ryu_knee","images/ryu_knee.png",384,224,6)
var sheet_ryu_roundhouse_kick = new SpriteSheet("ryu_roundhouse_kick","images/ryu_roundhouse_kick.png",384,224,13)
var sheet_ryu_shoryuken = new SpriteSheet("ryu_shoryuken","images/ryu_shoryuken.png",384,224,14)
var sheet_ryu_hadoken = new SpriteSheet("ryu_hadoken","images/ryu_hadoken.png",384,224,12)

var animation_ryu_hadoken = new Animation("ryu_hadoken",simple_tdata(12,60),sheet_ryu_hadoken)
var animation_ryu_shoryuken = new Animation("ryu_shoryuken",simple_tdata(14,100),sheet_ryu_shoryuken)

sheet_ryu_idle.image_sheet.onload = function() {
                                      setInterval('draw_handler()', 75);
                                  };

var counter = 1;

var animate_start = new Date().getTime();

function draw_handler() {
    // clear canvas
    canvas.width = canvas.width;
    counter = counter +1;

    sheet_ryu_idle.draw(context,-100,-40,counter % 10)
    sheet_ryu_dash_forward.draw(context,40,-40,counter % 11)
    sheet_ryu_dash_backwards.draw(context,180,-40,counter % 11)
    sheet_ryu_duck.draw(context,320,-40,counter % 6)
    sheet_ryu_crouching.draw(context,460,-40,counter % 4)
    sheet_ryu_up_jump.draw(context,-100,120,counter % 11)
    sheet_ryu_roll_jump.draw(context,40,120,counter % 15)
    sheet_ryu_jab.draw(context,180,120,counter % 4)
    sheet_ryu_medium_punch.draw(context,320,120,counter % 8)
    sheet_ryu_heavy_punch.draw(context,460,120,counter % 11)
    sheet_ryu_light_kick.draw(context,-100,280,counter % 7)
    sheet_ryu_knee.draw(context,40,280,counter % 6)
    sheet_ryu_roundhouse_kick.draw(context,180,280,counter % 13)
    //sheet_ryu_shoryuken.draw(context,320,280,counter % 14)
    //sheet_ryu_hadoken.draw(context,460,280,counter % 12)

    now = new Date().getTime();
    if(now - animate_start > 1000)
        animate_start = now-1;

    animation_ryu_hadoken.draw(context,460,280,animate_start,now)
    animation_ryu_shoryuken.draw(context,320,280,animate_start,now)


}
