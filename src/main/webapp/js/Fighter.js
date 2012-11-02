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

    this.last_action = new Date().getTime();

    this.render = function(canvas,context) {
        // move
        positionDelta = this.currentAction.get_position_delta(this.lastRender,new Date().getTime())
        this.x += positionDelta.x;
        this.y += positionDelta.y;

        if(this.currentAction.isFinished()) {
            // if the current action was idle,  restart our timer for bored pose
            if(this.currentAction != this.fighter_def.idle)
                this.last_action = new Date().getTime();

            if(new Date().getTime() - this.last_action > 10000)
                this.currentAction = this.fighter_def.bored;
            else
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

    this.special3 = function() {
        if(this.currentAction != this.fighter_def.special3 && !this.currentAction.locking){
            this.currentAction = this.fighter_def.special3;
            this.currentAction.reset();
        }
    }

    this.roll_forward = function() {
        if(this.currentAction != this.fighter_def.roll_forward && !this.currentAction.locking){
            this.currentAction = this.fighter_def.roll_forward;
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

    this.matching = []
    this.matching_names = []

    this.match_moves = function(act) {
        console.log(act)

        var moves = this.fighter_def.moves

        // add matching moves to array
        for( var i = 0; i< moves.length; i++){
            if($.inArray(moves[i][0][0][0], act) != -1){

                var name = moves[i][2]
                // make sure not already matching
                if($.inArray(name,this.matching_names) == -1){
                    var copy = $.extend(true, [], moves[i])
                    copy[0].shift()
                    this.matching.push([copy,new Date().getTime()])
                    this.matching_names.push(name);
                    console.log("started: "+moves[i][0]+" which is:"+moves[i][1])
                } else {
                    console.log("already watching for: "+name)
                }
            }
        }

        // check current moves
        for( var j = 0; j<this.matching.length; j++) {
            if(this.matching[j]) {

                // remove expired matching things
                // will also move completed strings that didn't get ran because something of higher precedence got ran instead
                var elapsed = new Date().getTime() - this.matching[j][1];

                var timeWindow = this.matching[j][0][0][0][1];

                if(elapsed > timeWindow) {
                    var name = this.matching[j][2]
                    console.log("removing: "+name)
                    this.matching_names.splice(this.matching_names.indexOf(name),1);
                    this.matching.splice(j,1)
                } else {

                    for(var k = 0; k<this.matching[j][0].length; k++) {
                        var currentMatcher = this.matching[j][0][0]

                        var firstFromCurrentMatcher = currentMatcher[0]

                        var desiredKey = firstFromCurrentMatcher[0]

                        // shift all the ones that match
                        if($.inArray(desiredKey,act) != -1) {
                            currentMatcher.shift();
                            console.log("matched: "+this.matching[j][0][0]+" which is"+this.matching[j][0][1])

                            //if that was the last one go do the action
                            if(currentMatcher.length == 0) {
                                console.log("final match:"+this.matching[j][0][1])


                                var finalAction = this.matching[j][0][1];

                                finalAction(this);

                                this.matching = [];
                                this.matching_names = [];

                                return
                            }
                        }
                    }
                }
            }
        }
    }
}
