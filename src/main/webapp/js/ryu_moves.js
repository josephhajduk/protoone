
var move_super_hadoken = [
    [["b",0],["db",300],["d",300],["df",300],["f",300],["p",500]],
    function(fighter) {
        if(fighter.doAction(action_hadoken))
            fireballs.push(new Fireball(sheet_fireball,fighter.x+125,fighter.y+60,600,0))
            fireballs.push(new Fireball(sheet_fireball,fighter.x+155,fighter.y+80,600,0))
            fireballs.push(new Fireball(sheet_fireball,fighter.x+175,fighter.y+100,600,0))
            fireballs.push(new Fireball(sheet_fireball,fighter.x+155,fighter.y+120,600,0))
            fireballs.push(new Fireball(sheet_fireball,fighter.x+125,fighter.y+140,600,0))
    },
    "superhadoken"
]
var move_hadoken = [
    [["d",0],["df",300],["f",300],["p",500]],
    function(fighter) {
        if(fighter.doAction(action_hadoken))
            fireballs.push(new Fireball(sheet_fireball,fighter.x+175,fighter.y+100,200,0))
    },
    "hadoken"
]

var move_shoryuken = [
    [["f",0],["d",300],["df",350],["p",500]],
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

var move_light_punch = [
    [["lp",0]],
    function(fighter) {
        if(fighter.jumping) {
            fighter.currentAction.overrideAnimation(animation_jump_lp)
        } else if (fighter.crouching) {
            fighter.doAction(action_crouch_lp)
        } else {
            fighter.doAction(action_lp)
        }
    },
    "light_punch"
]

var move_medium_punch = [
    [["mp",0]],
    function(fighter) {
        if(fighter.jumping) {
            fighter.currentAction.overrideAnimation(animation_jump_mp)
        } else if (fighter.crouching) {
            fighter.doAction(action_crouch_mp)
        } else {
            fighter.doAction(action_mp)
        }
    },
    "medium_punch"
]

var move_heavy_punch = [
    [["hp",0]],
    function(fighter) {
        if(fighter.jumping) {
            fighter.currentAction.overrideAnimation(animation_jump_hp)
        } else if (fighter.crouching) {
            fighter.doAction(action_crouch_hp)
        } else {
            fighter.doAction(action_hp)
        }
    },
    "heavy_punch"
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

var move_back_heavy_kick = [
    [["b",0],["hk",100]],
    function(fighter) {
        if(fighter.jumping || fighter.crouching) {
            move_heavy_kick[1](fighter);
        } else {
            fighter.doAction(action_back_hk)
        }
    },
    "heavy_kick"
]

var move_jump_forward = [
    [["uf",0]],
    function(fighter) {
        fighter.doAction(action_jump_forward);
        fighter.jumping = true;
    },
    "jump_forward"
]

var move_jump_backward = [
    [["ub",0]],
    function(fighter) {
        fighter.doAction(action_jump_backward);
        fighter.jumping = true;
    },
    "jump_forward"
]

var move_jump_up = [
    [["u",0]],
    function(fighter) {
        fighter.doAction(action_jump_up);
        fighter.jumping = true;
    },
    "jump_forward"
]

var move_quick_forward = [
    [["f",0],["o",300],["f",300]],
    function(fighter) {
        fighter.doAction(action_move_quick_forward);
    },
    "quick_forward"
]

var move_quick_backward = [
    [["b",0],["o",300],["b",300]],
    function(fighter) {
        fighter.doAction(action_move_quick_backward);
    },
    "quick_backward"
]

var move_forward = [
    [["f",0]],
    function(fighter) {
        fighter.doAction(action_move_forward);
    },
    "forward"
]

var move_backward = [
    [["b",0]],
    function(fighter) {
        fighter.doAction(action_move_backward);
    },
    "backward"
]