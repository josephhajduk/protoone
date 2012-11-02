function Action (name, animation , movement_data, locking) {
    this.name = name;
    this.animation = animation;
    this.movement_data = movement_data;
    this.start_time = new Date().getTime();
    this.locking = locking;

    this.reset = function() {
        this.start_time = new Date().getTime();
    }

    this.override_animation = null;
    this.override_start_time = 0;

    this.overrideAnimation = function(newAnimation) {
        // don't override a override
        if(this.override_start_time < this.start_time) {
            this.override_animation = newAnimation;
            this.override_start_time = new Date().getTime();
            return true;
        }
            else return false;


        /*
        if(this.override_animation) {
            if(!this.override_animation.isFinishedAt(this.override_start_time,new Date().getTime())) {
                return false;
            }
        }
        */

    }

    this.get_position_delta = function(last,now) {
        var sumx = 0;
        var sumy = 0;
        var elapsed = this.start_time;
        for (var i = 0; i < this.movement_data.length; i++) {

          elapsed += this.animation.time_data[i];

          if (elapsed > now)
            break;
          else if(elapsed > last){
            sumx += this.movement_data[i][0];
            sumy += this.movement_data[i][1];
          }
        }

        return {x:sumx,y:sumy};
    }

    this.render = function(context,x,y) {
        if(this.override_animation) {
            if(!this.override_animation.isFinishedAt(this.override_start_time,new Date().getTime()))
                return this.override_animation.draw(context,x,y,this.override_start_time,new Date().getTime());
        }

        return this.animation.draw(context,x,y,this.start_time,new Date().getTime());
    }

    this.isFinished = function() {
        return this.animation.isFinishedAt(this.start_time,new Date().getTime());
    }
}