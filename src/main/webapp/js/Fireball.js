function Fireball(sprite_sheet,start_x,start_y,vel_x,vel_y) {
    this.sprite_sheet = sprite_sheet;
    this.start_x = start_x;
    this.start_y = start_y;
    this.vel_x = vel_x;
    this.vel_y = vel_y;

    this.launch_time = new Date().getTime();

    this.render = function(context) {

        var elapsed = new Date().getTime();

        var i = 1;

        if (elapsed - this.launch_time < 100)
            i = 0;

        elapsed = (elapsed - this.launch_time)/1000;


        this.sprite_sheet.draw(context,start_x+vel_x*elapsed,start_y+vel_y*elapsed,i)
    }
}