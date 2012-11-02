
var sheet_ryu_idle = new SpriteSheet("ryu_idle","images/ryu_idle.png",384,224,10)
var sheet_ryu_dash_forward = new SpriteSheet("ryu_dash_forward","images/ryu_dash_forward.png",384,224,11)
var sheet_ryu_dash_backwards = new SpriteSheet("ryu_dash_forward","images/ryu_dash_backwards.png",384,224,11)
var sheet_ryu_duck = new SpriteSheet("ryu_duck","images/ryu_duck.png",384,224,6)
var sheet_ryu_stand = new ReverseSpriteSheet("ryu_stand",sheet_ryu_duck)
var sheet_ryu_crouching = new SpriteSheet("ryu_crouching","images/ryu_crouching.png",384,224,4)
var sheet_ryu_up_jump = new SpriteSheet("ryu_up_jump","images/ryu_up_jump.png",384,224,11)
var sheet_ryu_roll_jump = new SpriteSheet("ryu_roll_jump","images/ryu_roll_jump.png",384,224,15)
var sheet_ryu_roll_jump_back = new SpriteSheet("ryu_roll_jump","images/ryu_roll_jump_flip.png",384,224,15)
var sheet_ryu_light_punch = new SpriteSheet("ryu_jab","images/ryu_jab.png",384,224,4)
var sheet_ryu_medium_punch = new SpriteSheet("ryu_medium_punch","images/ryu_medium_punch.png",384,224,8)
var sheet_ryu_heavy_punch = new SpriteSheet("ryu_heavy_punch","images/ryu_heavy_punch.png",384,224,10)
var sheet_ryu_light_kick = new SpriteSheet("ryu_light_kick","images/ryu_light_kick.png",384,224,7)
var sheet_ryu_medium_kick = new SpriteSheet("ryu_knee","images/ryu_knee.png",384,224,6)
var sheet_ryu_heavy_kick = new SpriteSheet("ryu_roundhouse_kick","images/ryu_roundhouse_kick.png",384,224,13)
var sheet_ryu_shoryuken = new SpriteSheet("ryu_shoryuken","images/ryu_shoryuken.png",384,224,14)
var sheet_ryu_hadoken = new SpriteSheet("ryu_hadoken","images/ryu_hadoken.png",384,224,12)
var sheet_ryu_bored = new SpriteSheet("ryu_bored","images/ryu_long_pose.png",384,224,24)
var sheet_ryu_roll = new SpriteSheet("ryu_roll","images/ryu_roll.png",384,224,9)
var sheet_ryu_spinnthing = new SpriteSheet("ryu_spinnthing","images/ryu_spinnthing.png",384,224,16)
var sheet_fireball = new SpriteSheet("fireball","images/hadoken2.png",84,50,2);

var sheet_ryu_jumping_lk = new SpriteSheet("ryu_jumping_lk","images/ryu_jumping_down_light_kick.png",384,224,4);
var sheet_ryu_crouching_lk = new SpriteSheet("ryu_crouching_lk","images/ryu_crouch_light_kick.png",384,224,6);

var sheet_ryu_jumping_mk = new SpriteSheet("ryu_jumping_mk","images/ryu_jumping_down_medium_kick.png",384,224,9);
var sheet_ryu_crouching_mk = new SpriteSheet("ryu_crouching_mk","images/ryu_crouch_medium_kick.png",384,224,6);

var sheet_ryu_jumping_hk = new SpriteSheet("ryu_jumping_hk","images/ryu_jumping_down_heavy_kick.png",384,224,5);
var sheet_ryu_crouching_hk = new SpriteSheet("ryu_crouching_hk","images/ryu_crouch_heavy_kick.png",384,224,10);


var action_hadoken = new Action("ryu_hadoken",
                                         new Animation("ryu_hadoken",simple_tdata(12,50),sheet_ryu_hadoken),
                                         simple_tdata(12,[0,0]),
                                         true
                                 )

var action_shoryuken = new Action("ryu_shoryuken",
                                        new Animation("ryu_shoryuken",simple_tdata(14,50),sheet_ryu_shoryuken),
                                        [[1,0],[1,-2],[1,-10],[1,-10],[1,-8],[1,-4],[1,-2],[1,2],[1,4],[1,6],[1,6],[1,6],[1,6],[1,6]],
                                        true
                                   )

var action_kickspin = new Action("ryu_spinnthing",
                                       new Animation("ryu_spinnthing",simple_tdata(16,75),sheet_ryu_spinnthing),
                                       [[5,-2],[5,-2],[5,1],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,1],[5,2],[5,2]],
                                       true
                                  )

var action_roll = new Action("ryu_roll_forward",
                        new Animation("ryu_roll_forward",simple_tdata(9,75),sheet_ryu_roll),
                        simple_tdata(9,[14,0]),
                        true
                    )

var animation_jump_lk = new Animation("ryu_jumping_lk",simple_tdata(4,50),sheet_ryu_jumping_lk)
var animation_jump_mk = new Animation("ryu_jumping_mk",simple_tdata(9,60),sheet_ryu_jumping_mk)
var animation_jump_hk = new Animation("ryu_jumping_hk",simple_tdata(5,70),sheet_ryu_jumping_hk)

var action_crouch_lk = new Action("ryu_crouch_light_kick",
                             new Animation("ryu_crouch_light_kick",simple_tdata(6,60),sheet_ryu_crouching_lk),
                             simple_tdata(6,[0,0]),
                             true
                         )
var action_crouch_mk =  new Action("ryu_crouch_mk",
                             new Animation("ryu_crouch_mkick",simple_tdata(6,70),sheet_ryu_crouching_mk),
                             simple_tdata(6,[0,0]),
                             true
                         )
var action_crouch_hk =  new Action("ryu_crouch_hk",
                             new Animation("ryu_crouch_hkick",simple_tdata(10,80),sheet_ryu_crouching_hk),
                             simple_tdata(10,[0,0]),
                             true
                         )

var action_lk = new Action("ryu_light_kick",
                     new Animation("ryu_light_kick",simple_tdata(7,50),sheet_ryu_light_kick),
                     simple_tdata(7,[0,0]),
                     true
                 )

var action_mk = new Action("ryu_medium_kick",
                        new Animation("ryu_medium_kick",simple_tdata(6,50),sheet_ryu_medium_kick),
                        simple_tdata(6,[0,0]),
                        true
                    )

var action_hk = new Action("ryu_heavy_kick",
                        new Animation("ryu_heavy_kick",simple_tdata(13,50),sheet_ryu_heavy_kick),
                        simple_tdata(13,[0,0]),
                        true
                    )

var move_hadoken = [
    [["d",0],["df",200],["f",200],["p",500]],
    function(fighter) {
        fighter.doAction(action_hadoken);
        fireballs.push(new Fireball(sheet_fireball,fighter.x+175,fighter.y+100,200,0))
    },
    "hadoken"
]

var move_shoryuken = [
    [["f",0],["d",200],["df",200],["p",500]],
    function(fighter) {
        fighter.doAction(action_shoryuken)
    },
    "shoryuken"
]

var move_spinnthing = [
    [["d",0],["db",200],["b",200],["k","500"]],
    function(fighter) {
        fighter.doAction(action_kickspin)
    },
    "spinnthing"
]

var move_roll_forward = [
    [["d",0],["db",200],["b",200],["p","500"]],
    function(fighter) {
        fighter.doAction(action_roll)
    },
    "roll_forward"
]

var move_light_kick = [
    [["lk",0]],
    function(fighter) {
        if(fighter.jumping) {
            fighter.currentAction.overrideAnimation(animation_jump_lk)
        } else if (fighter.crouching) {
            fighter.doAction(action_crouch_lk)
        } else {
            fighter.doAction(action_lk)
        }
    },
    "light_kick"
]

var move_medium_kick = [
    [["mk",0]],
    function(fighter) {
        if(fighter.jumping) {
            fighter.currentAction.overrideAnimation(animation_jump_mk)
        } else if (fighter.crouching) {
            fighter.doAction(action_crouch_mk)
        } else {
            fighter.doAction(action_mk)
        }
    },
    "medium_kick"
]

var move_heavy_kick = [
    [["hk",0]],
    function(fighter) {
        if(fighter.jumping) {
            fighter.currentAction.overrideAnimation(animation_jump_hk)
        } else if (fighter.crouching) {
            fighter.doAction(action_crouch_hk)
        } else {
            fighter.doAction(action_hk)
        }
    },
    "heavy_kick"
]

var ryu = {
    idle : new Action("ryu_idle",
        new Animation("ryu_idle",simple_tdata(10,65),sheet_ryu_idle),
        simple_tdata(10,[0,0]),
        false
    ),

    //todo: check on ground
    dash_forward : new Action("ryu_dash_forward",
        new Animation("ryu_dash_forward",simple_tdata(11,40),sheet_ryu_dash_forward),
        simple_tdata(11,[6,0]),
        false
    ),

    //todo: check on ground
    dash_backward : new Action("ryu_dash_backward",
        new Animation("ryu_dash_backward",simple_tdata(11,40),sheet_ryu_dash_backwards),
        simple_tdata(11,[-5,0]),
        false
    ),

    jump_up : new Action("ryu_jump_up",
        new Animation("ryu_jump_up",simple_tdata(11,40),sheet_ryu_up_jump),
        [[0,-12],[0,-12],[0,-10],[0,-8],[0,-6],[0,0],[0,6],[0,8],[0,10],[0,12],[0,12]],
        true
    ),

    jump_forward : new Action("ryu_jump_forward",
        new Animation("ryu_jump_forward",simple_tdata(15,50),sheet_ryu_roll_jump),
        [[5,-12],[8,-12],[8,-11],[8,-11],[8,-10],[8,-8],[8,-6],[8,0],[8,6],[8,8],[8,10],[8,11],[8,11],[8,12],[5,12]],
        true
    ),

    jump_backward : new Action("ryu_jump_forward",
        new Animation("ryu_jump_forward",simple_tdata(15,50),sheet_ryu_roll_jump),
        [[-5,-12],[-8,-12],[-8,-11],[-8,-11],[-8,-10],[-8,-8],[-8,-6],[-8,0],[-8,6],[-8,8],[-8,10],[-8,11],[-8,11],[-8,12],[-5,12]],
        true
    ),

    duck : new Action("ryu_duck",
        new Animation("ryu_duck",simple_tdata(6,40),sheet_ryu_duck),
        simple_tdata(6,[0,0]),
        false
    ),

    crouching : new Action("ryu_crouch",
        new Animation("ryu_crouch",simple_tdata(4,100),sheet_ryu_crouching),
        simple_tdata(5,[0,0]),
        false
    ),

    stand : new Action("ryu_stand",
        new Animation("ryu_stand",simple_tdata(6,40),sheet_ryu_stand),
        simple_tdata(6,[0,0]),
        false
    ),

    light_punch : new Action("ryu_light_punch",
        new Animation("ryu_light_punch",simple_tdata(4,50),sheet_ryu_light_punch),
        simple_tdata(4,[0,0]),
        false
    ),

    medium_punch : new Action("ryu_medium_punch",
        new Animation("ryu_medium_punch",simple_tdata(8,50),sheet_ryu_medium_punch),
        simple_tdata(8,[0,0]),
        false
    ),

    heavy_punch : new Action("ryu_heavy_punch",
        new Animation("ryu_heavy_punch",simple_tdata(10,50),sheet_ryu_heavy_punch),
        simple_tdata(10,[0,0]),
        true
    ),

    bored : new Action("ryu_bored",
      new Animation("ryu_bored",simple_tdata(24,120),sheet_ryu_bored),
      simple_tdata(24,[0,0]),
      false
    ),

    moves : [
        move_hadoken,
        move_shoryuken,
        move_spinnthing,
        move_roll_forward,

                        // single button ones last
        move_light_kick,
        move_medium_kick,
        move_heavy_kick
    ]
}