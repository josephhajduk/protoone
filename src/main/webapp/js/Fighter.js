function Fighter (name,fighter_def,ylock) {
    this.name = name;

    this.id = 'xxxxxxxx'.replace(/[xy]/g, function(c) {
                  var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                  return v.toString(16);
              });

    this.fighter_def = fighter_def;
    this.ylock = ylock;

    this.name = "";
    this.nameStyle = '#33CCFF';

    this.x = 0;
    this.y = 0;

    this.currentAction = this.fighter_def.idle();
    this.defaultAction = this.fighter_def.idle();

    this.lastRender = new Date().getTime();

    this.jumping = false;
    this.crouching = false;

    this.last_action = new Date().getTime();

    this.set_state = function(
        id,
        asof,
        x,y,
        action,
        action_start_time,
        override_animation,
        override_start_time,
        crouching,
        jumping) {

        // assert correct id
        if(id != this.id)
            console.log("set_state: ID assertion failure, found:"+id+" expected:"+this.id)
        // make sure this isn't from the future
        else if(asof > new Date().getTime())
            console.log("set_state: ASOF implies time travel")
        else {
            this.x = x;
            this.y = y;
            this.lastRender = asof;
            this.crouching = crouching;
            this.jumping = jumping;

            this.currentAction = Actions[action]();
            this.currentAction.start_time = asof;

            if(override_animation) {
                //check for both override animation and override stat time
                if(!override_start_time)
                    console.log("set_state: Missing start time for override")
                else
                    this.currentAction.overrideAnimation(Animations[override_animation],override_start_time)
            }
        }
    }

    this.render = function(context) {
        // move
        positionDelta = this.currentAction.get_position_delta(this.lastRender,new Date().getTime())
        this.x += positionDelta.x;
        this.y += positionDelta.y;

        if(this.currentAction.isFinished()) {
            // if the current action was idle,  restart our timer for bored pose
            if(this.currentAction != this.fighter_def.idle)
                this.last_action = new Date().getTime();

            if(new Date().getTime() - this.last_action > 10000)
                this.currentAction = this.fighter_def.bored();
            else
                this.currentAction = this.defaultAction;

            this.currentAction.reset();
            this.y = ylock;
            this.jumping = false;
        }


        // draw
        var result = this.currentAction.render(context,this.x,this.y)
        //this.currentAction.render(context,this.x-canvas.width,this.y)
        //this.currentAction.render(context,this.x+canvas.width,this.y)
        this.lastRender = new Date().getTime();

        //draw name:
        context.fillStyle    = this.nameStyle;
        context.textAlign = 'center';
        context.textBaseline = 'top';
        context.font         = 'bold 12px sans-serif';
        context.fillText(this.name, this.x+this.fighter_def.name_offset_x, this.y+this.fighter_def.name_offset_y);

        return result;
    }

    // ACTIONS

    this.doAction = function(newAction) {
        //if(this.currentAction != newAction && !this.currentAction.locking){
        if(!this.currentAction.locking){
            this.currentAction = newAction();
            this.currentAction.reset();
            return true;
        }
        return false;
    }

    this.stop = function() {
        if(!this.currentAction.locking) {
            this.currentAction = this.fighter_def.idle();
            this.currentAction.reset();
        }
    }

    this.duck = function() {
        if(!this.crouching && !this.currentAction.locking) {
            this.currentAction = this.fighter_def.duck();
            this.currentAction.reset();
            this.defaultAction = this.fighter_def.crouching();
            this.crouching = true;
        }
    }

    this.stand = function() {
        this.defaultAction = this.fighter_def.idle();
        this.crouching = false;
    }

    this.matching = []
    this.matching_names = []

    this.lastact = ""

    this.match_moves = function(act) {
        if(String(act) != this.lastact
        && String(act) != String(["ox"])
        && String(act) != String(["oy"])
        && String(act) != String(["o", "ox", "oy"])
        ) {
            console.log(act)
            this.lastact = String(act);
        }

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
                    //console.log("started: "+moves[i][0]+" which is:"+moves[i][1])
                } else {
                    //console.log("already watching for: "+name)
                }
            }
        }

        // check current moves
        for( var j = 0; j<this.matching.length; j++) {
            if(this.matching[j]) {

                // if we have empty things here they are single button actions,  i hope they are always at the end cause we are pushing
                if(this.matching[j][0][0].length == 0){
                    //console.log("final match:"+this.matching[j][0][2])

                    var finalAction = this.matching[j][0][1];

                    finalAction(this);
                    // don't stop matching when its a single button action
                    this.matching_names.splice(this.matching_names.indexOf(this.matching[j][0][2]),1)
                    this.matching.splice(j,1);

                    return
                }

                // remove expired matching things
                // will also move completed strings that didn't get ran because something of higher precedence got ran instead
                var elapsed = new Date().getTime() - this.matching[j][1];

                var timeWindow = this.matching[j][0][0][0][1];

                if(elapsed > timeWindow) {
                    var name = this.matching[j][2]
                    //console.log("removing: "+name)
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
                            //console.log("matched: "+this.matching[j][0][0]+" which is"+this.matching[j][0][1])

                            //if that was the last one go do the action
                            if(currentMatcher.length == 0) {
                                console.log("triggered: "+this.matching[j][0][2])

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
