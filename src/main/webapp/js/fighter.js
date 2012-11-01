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


