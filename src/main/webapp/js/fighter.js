function Fighter (name,skin,x,y) {
    this.id = id;
    this.skin = skin;

    this.x = x;
    this.y = y;

    this.currentAction = Actions[skin+"_idle"];

    this.lastRender = new Date();

    this.do_action = function(new_action) {
        this.currentAction = new_action;
        this.currentAction.reset();
    }

    this.render = function(context) {
        if(this.currentAction.isFinished) {
            this.currentAction = Actions[skin+"_idle"];
            this.currentAction.reset();
        }

        // move
        positionDelta = this.currentAction.get_position_delta(this.lastRender)
        this.x += positionDelta.x;
        this.y += positionDelta.y;

        // draw
        this.currentAction.render(context,x,y)
    }
}


function Action (name, animation , movement_data) {
    this.name = name;
    this.animation = animation;
    this.movement_data = movement_data;
    this.start_time = new Date();

    this.reset = function() {
        this.start_time = new Date();
    }

    this.get_position_delta = function(last) {
        return this.get_position_delta(last,new Date());
    }

    this.get_position_delta = function(last,now) {
        // TODO:figure out right deltax and deltay difference between last and now
        return {x:1,y:3};
    }

    this.render = function(context,x,y) {
        this.animation.draw_frame(context,x,y,this.start_time,new Date());
    }

    this.isFinished = function() {
        return this.animation.isFinishedAt(this.start_time,new Date());
    }
}