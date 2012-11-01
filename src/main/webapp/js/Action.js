function Action (name, animation , movement_data, locking) {
    this.name = name;
    this.animation = animation;
    this.movement_data = movement_data;
    this.start_time = new Date().getTime();
    this.locking = locking;

    this.reset = function() {
        this.start_time = new Date().getTime();
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
        this.animation.draw(context,x,y,this.start_time,new Date().getTime());
    }

    this.isFinished = function() {
        return this.animation.isFinishedAt(this.start_time,new Date().getTime());
    }
}