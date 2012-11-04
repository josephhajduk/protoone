
var move_ryu_super_hadoken = [
    [["b",0],["db",300],["d",300],["df",300],["f",300],["p",500]],
    function(fighter) {
        if(fighter.doAction(action_ryu_hadoken))
            fireballs.push(new Fireball(sheet_fireball,fighter.x+125,fighter.y+60,600,0))
            fireballs.push(new Fireball(sheet_fireball,fighter.x+155,fighter.y+80,600,0))
            fireballs.push(new Fireball(sheet_fireball,fighter.x+175,fighter.y+100,600,0))
            fireballs.push(new Fireball(sheet_fireball,fighter.x+155,fighter.y+120,600,0))
            fireballs.push(new Fireball(sheet_fireball,fighter.x+125,fighter.y+140,600,0))
    },
    "ryu_super_hadoken"
]

var move_ryu_hadoken = [
    [["d",0],["df",300],["f",300],["p",500]],
    function(fighter) {
        if(fighter.doAction(action_ryu_hadoken))
            fireballs.push(new Fireball(sheet_fireball,fighter.x+175,fighter.y+100,200,0))
    },
    "ryu_hadoken"
]

var move_ryu_shoryuken = [
    [["f",0],["d",300],["df",350],["p",500]],
    function(fighter) {
        fighter.doAction(action_ryu_shoryuken)
    },
    "ryu_shoryuken"
]

var move_ryu_spinnthing = [
    [["d",0],["db",200],["b",200],["k","500"]],
    function(fighter) {
        fighter.doAction(action_ryu_kickspin)
    },
    "ryu_spinnthing"
]

var move_ryu_roll_forward = [
    [["d",0],["db",200],["b",200],["p","500"]],
    function(fighter) {
        fighter.doAction(action_ryu_roll)
    },
    "ryu_roll_forward"
]

var move_ryu_light_punch = [
    [["lp",0]],
    function(fighter) {
        if(fighter.jumping) {
            fighter.currentAction.overrideAnimation(animation_ryu_jump_lp)
        } else if (fighter.crouching) {
            fighter.doAction(action_ryu_crouch_lp)
        } else {
            fighter.doAction(action_ryu_lp)
        }
    },
    "ryu_light_punch"
]

var move_ryu_medium_punch = [
    [["mp",0]],
    function(fighter) {
        if(fighter.jumping) {
            fighter.currentAction.overrideAnimation(animation_ryu_jump_mp)
        } else if (fighter.crouching) {
            fighter.doAction(action_ryu_crouch_mp)
        } else {
            fighter.doAction(action_ryu_mp)
        }
    },
    "ryu_medium_punch"
]

var move_ryu_heavy_punch = [
    [["hp",0]],
    function(fighter) {
        if(fighter.jumping) {
            fighter.currentAction.overrideAnimation(animation_ryu_jump_hp)
        } else if (fighter.crouching) {
            fighter.doAction(action_ryu_crouch_hp)
        } else {
            fighter.doAction(action_ryu_hp)
        }
    },
    "ryu_heavy_punch"
]

var move_ryu_light_kick = [
    [["lk",0]],
    function(fighter) {
        if(fighter.jumping) {
            fighter.currentAction.overrideAnimation(animation_ryu_jump_lk)
        } else if (fighter.crouching) {
            fighter.doAction(action_ryu_crouch_lk)
        } else {
            fighter.doAction(action_ryu_lk)
        }
    },
    "ryu_light_kick"
]

var move_ryu_medium_kick = [
    [["mk",0]],
    function(fighter) {
        if(fighter.jumping) {
            fighter.currentAction.overrideAnimation(animation_ryu_jump_mk)
        } else if (fighter.crouching) {
            fighter.doAction(action_ryu_crouch_mk)
        } else {
            fighter.doAction(action_ryu_mk)
        }
    },
    "ryu_medium_kick"
]

var move_ryu_heavy_kick = [
    [["hk",0]],
    function(fighter) {
        if(fighter.jumping) {
            fighter.currentAction.overrideAnimation(animation_ryu_jump_hk)
        } else if (fighter.crouching) {
            fighter.doAction(action_ryu_crouch_hk)
        } else {
            fighter.doAction(action_ryu_hk)
        }
    },
    "ryu_heavy_kick"
]

var move_ryu_back_heavy_kick = [
    [["b",0],["hk",100]],
    function(fighter) {
        if(fighter.jumping || fighter.crouching) {
            move_ryu_heavy_kick[1](fighter);
        } else {
            fighter.doAction(action_ryu_back_hk)
        }
    },
    "ryu_back_heavy_kick"
]

var move_ryu_jump_forward = [
    [["uf",0]],
    function(fighter) {
        fighter.doAction(action_ryu_jump_forward);
        fighter.jumping = true;
    },
    "ryu_jump_forward"
]

var move_ryu_jump_backward = [
    [["ub",0]],
    function(fighter) {
        fighter.doAction(action_ryu_jump_backward);
        fighter.jumping = true;
    },
    "ryu_jump_backward"
]

var move_ryu_jump_up = [
    [["u",0]],
    function(fighter) {
        fighter.doAction(action_ryu_jump_up);
        fighter.jumping = true;
    },
    "ryu_jump_up"
]

var move_ryu_dash_forward = [
    [["f",0],["o",300],["f",300]],
    function(fighter) {
        fighter.doAction(action_ryu_move_dash_forward);
    },
    "ryu_dash_forward"
]

var move_ryu_dash_backward = [
    [["b",0],["o",300],["b",300]],
    function(fighter) {
        fighter.doAction(action_ryu_move_dash_backward);
    },
    "ryu_dash_backward"
]

var move_ryu_forward = [
    [["f",0]],
    function(fighter) {
        fighter.doAction(action_ryu_move_forward);
    },
    "ryu_forward"
]

var move_ryu_backward = [
    [["b",0]],
    function(fighter) {
        fighter.doAction(action_ryu_move_backward);
    },
    "ryu_backward"
]