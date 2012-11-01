function Fighter (name,fighter_def,ylock) {
    this.name = name;
    this.fighter_def = fighter_def;
    this.ylock = ylock;

    this.x = 0;
    this.y = 0;

    this.currentAction = this.fighter_def.idle;
    this.defaultAction = this.fighter_def.idle;

    this.lastRender = new Date().getTime();


    this.do_action = function(new_action) {
        this.currentAction = new_action;
        this.currentAction.reset();
    }

    this.render = function(canvas,context) {
        // move
        positionDelta = this.currentAction.get_position_delta(this.lastRender,new Date().getTime())
        this.x += positionDelta.x;
        this.y += positionDelta.y;

        if(this.currentAction.isFinished()) {
            this.currentAction = this.defaultAction;
            this.currentAction.reset();
            this.y = ylock;
        }

        // draw
        var result = this.currentAction.render(context,this.x,this.y)
        this.currentAction.render(context,this.x-canvas.width,this.y)
        this.currentAction.render(context,this.x+canvas.width,this.y)
        this.lastRender = new Date().getTime();
        return result;
    }

    // ACTIONS

    this.stop = function() {
        if(!this.currentAction.locking) {
            this.currentAction = this.fighter_def.idle;
            this.currentAction.reset();
        }
    }

    this.dash_forward = function() {
        if(this.currentAction != this.fighter_def.dash_forward && !this.currentAction.locking) {
            this.currentAction = this.fighter_def.dash_forward;
            this.currentAction.reset();
        }
    }

    this.dash_backward = function() {
        if(this.currentAction != this.fighter_def.dash_backward && !this.currentAction.locking){
            this.currentAction = this.fighter_def.dash_backward;
            this.currentAction.reset();
        }
    }

    this.duck = function() {
        if(this.currentAction != this.fighter_def.duck && this.currentAction != this.fighter_def.crouching && !this.currentAction.locking) {
            this.currentAction = this.fighter_def.duck;
            this.currentAction.reset();
            this.defaultAction = this.fighter_def.crouching;
        }
    }

    this.stand = function() {
        // todo: reverse animation
        this.defaultAction = this.fighter_def.idle;
    }

    this.jump_forward = function() {
        if(!this.currentAction.locking){
            this.currentAction = this.fighter_def.jump_forward;
            this.currentAction.reset();
        }
    }

    this.jump_backward = function() {
        if(!this.currentAction.locking){
            this.currentAction = this.fighter_def.jump_backward;
            this.currentAction.reset();
        }
    }

    this.jump = function() {
        //TODO: note works better to work this stuff out during the controls???
        if(this.currentAction == this.fighter_def.dash_forward) {
            this.jump_forward();
        }

        if(!this.currentAction.locking){
            this.currentAction = this.fighter_def.jump_up;
            this.currentAction.reset();
        }
    }

    this.special1 = function() {
        if(this.currentAction != this.fighter_def.special1 && !this.currentAction.locking){
            this.currentAction = this.fighter_def.special1;
            this.currentAction.reset();

            if(this.fighter_def == ryu){
                fireballs.push(new Fireball(sheet_fireball,this.x+175,this.y+100,200,0))
            }
        }

    }

    this.special2 = function() {
        if(this.currentAction != this.fighter_def.special2 && !this.currentAction.locking){
            this.currentAction = this.fighter_def.special2;
            this.currentAction.reset();
        }
    }

    this.light_punch = function() {
        if(this.currentAction != this.fighter_def.light_punch && !this.currentAction.locking){
            this.currentAction = this.fighter_def.light_punch;
            this.currentAction.reset();
        }
    }

    this.medium_punch = function() {
        if(this.currentAction != this.fighter_def.medium_punch && !this.currentAction.locking){
            this.currentAction = this.fighter_def.medium_punch;
            this.currentAction.reset();
        }
    }

    this.heavy_punch = function() {
        if(this.currentAction != this.fighter_def.heavy_punch && !this.currentAction.locking){
            this.currentAction = this.fighter_def.heavy_punch;
            this.currentAction.reset();
        }
    }

    this.light_kick = function() {
        if(this.currentAction != this.fighter_def.light_kick && !this.currentAction.locking){
            this.currentAction = this.fighter_def.light_kick;
            this.currentAction.reset();
        }
    }

    this.medium_kick = function() {
        if(this.currentAction != this.fighter_def.medium_kick && !this.currentAction.locking){
            this.currentAction = this.fighter_def.medium_kick;
            this.currentAction.reset();
        }
    }

    this.heavy_kick = function() {
        if(this.currentAction != this.fighter_def.heavy_kick && !this.currentAction.locking){
            this.currentAction = this.fighter_def.heavy_kick;
            this.currentAction.reset();
        }
    }
}
