function Action (name, animation , movement_data) {
    this.name = name;
    this.animation = animation;
    this.movement_data = movement_data;
    this.start_time = new Date().getTime();

    this.reset = function() {
        this.start_time = new Date();
    }

    this.get_position_delta = function(last) {
        return this.get_position_delta(last,new Date().getTime());
    }

    this.get_position_delta = function(last,now) {
        // TODO:figure out right deltax and deltay difference between last and now
        return {x:1,y:3};
    }

    this.render = function(context,x,y) {
        this.animation.draw(context,x,y,this.start_time,new Date().getTime());
    }

    this.isFinished = function() {
        return this.animation.isFinishedAt(this.start_time,new Date().getTime());
    }
}