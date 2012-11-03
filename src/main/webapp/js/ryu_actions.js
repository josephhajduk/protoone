
var action_hadoken = function(){ return new Action(
    "ryu_hadoken",
     animation_ryu_hadoken,
     simple_tdata(12,[0,0]),
     true
)}

var action_shoryuken = function(){ return new Action(
    "ryu_shoryuken",
    animation_ryu_shoryuken,
    [[1,0],[1,-2],[1,-10],[1,-10],[1,-8],[1,-4],[1,-2],[1,2],[1,4],[1,6],[1,6],[1,6],[1,6],[1,6]],
    true
)}

var action_kickspin = function(){ return new Action(
    "ryu_spinnthing",
    animation_ryu_kickspin,
    [[5,-2],[5,-2],[5,1],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,1],[5,2],[5,2]],
    true
)}

var action_roll = function(){ return new Action(
    "ryu_roll_forward",
    animation_ryu_roll_forward,
    simple_tdata(9,[14,0]),
    true
)}

var action_jump_forward = function(){ return new Action(
    "ryu_jump_forward",
    animation_ryu_jump_forward,
    [[6,-18],[10,-17],[10,-16],[10,-15],[10,-13],[10,-11],[10,-6],[10,0],[10,6],[10,11],[10,13],[10,15],[10,16],[10,17],[6,18]],
    true
)}

var action_jump_up = function(){ return new Action(
    "ryu_jump_up",
    animation_ryu_jump_up,
    [[0,-30],[0,-25],[0,-20],[0,-15],[0,-10],[0,0],[0,10],[0,15],[0,20],[0,25],[0,30]],
    true
)}

var action_jump_backward = function(){ return new Action(
    "ryu_jump_backward",
    animation_ryu_jump_forward,
    [[-6,-18],[-10,-17],[-10,-16],[-10,-15],[-10,-13],[-10,-11],[-10,-6],[-10,0],[-10,6],[-10,11],[-10,13],[-10,15],[-10,16],[-10,17],[-6,18]],
    true
)}

var action_move_quick_forward = function(){ return new Action(
    "ryu_dash_forward",
    animation_ryu_dash_forward,
    simple_tdata(6,[13,0]),
    true
)}

var action_move_quick_backward = function(){ return new Action(
    "ryu_dash_backward",
    animation_ryu_dash_backward,
    simple_tdata(6,[-13,0]),
    true
)}

var action_move_forward = function(){ return new Action(
    "ryu_forward",
    animation_ryu_forward,
    simple_tdata(11,[6,0]),
    false
)}

var action_move_backward = function(){ return new Action(
    "ryu_backward",
    animation_ryu_backward,
    simple_tdata(11,[-5,0]),
    false
)}

var action_crouch_lp = function(){ return new Action(
    "ryu_crouch_lp",
     animation_ryu_crouch_lp,
     simple_tdata(3,[0,0]),
     true
)}

var action_crouch_mp = function(){ return new Action(
    "ryu_crouch_mp",
     animation_ryu_crouch_mp,
     simple_tdata(5,[0,0]),
     true
)}

var action_crouch_hp = function(){ return new Action(
    "ryu_crouch_hp",
     animation_ryu_crouch_hp,
     simple_tdata(9,[0,0]),
     true
)}

var action_lp = function(){ return new Action(
    "ryu_light_punch",
    animation_ryu_lp,
    simple_tdata(4,[0,0]),
    true
)}

var action_mp = function(){ return new Action(
    "ryu_medium_punch",
    animation_ryu_mp,
    simple_tdata(8,[0,0]),
    true
)}

var action_hp = function(){ return new Action(
    "ryu_heavy_punch",
    animation_ryu_hp,
    simple_tdata(10,[0,0]),
    true
)}

var action_crouch_lk = function(){ return new Action(
    "ryu_crouch_light_kick",
     animation_ryu_crouch_lk,
     simple_tdata(6,[0,0]),
     true
)}

var action_crouch_mk = function(){ return new Action(
    "ryu_crouch_mk",
     animation_ryu_crouch_mk,
     simple_tdata(6,[0,0]),
     true
)}

var action_crouch_hk = function(){ return new Action(
    "ryu_crouch_hk",
     animation_ryu_crouch_hk,
     simple_tdata(10,[0,0]),
     true
)}

var action_lk = function(){ return new Action(
    "ryu_light_kick",
    animation_ryu_lk,
    simple_tdata(7,[0,0]),
    true
)}

var action_mk = function(){ return new Action(
    "ryu_medium_kick",
    animation_ryu_mk,
    simple_tdata(6,[0,0]),
    true
)}

var action_hk = function(){ return new Action(
    "ryu_heavy_kick",
    animation_ryu_hk,
    simple_tdata(13,[0,0]),
    true
)}

var action_back_hk = function(){ return new Action(
    "ryu_back_hkick",
    animation_ryu_back_hk,
    [[-3,0],[-3,0],[-3,0],[-3,0],[-3,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
    true
)}

var action_ryu_idle = function(){ return new Action(
    "ryu_idle",
    animation_ryu_idle,
    simple_tdata(10,[0,0]),
    false
)}

var action_ryu_duck = function(){ return new Action(
    "ryu_duck",
    animation_ryu_duck,
    simple_tdata(6,[0,0]),
    false
)}

var action_ryu_crouching = function(){ return new Action(
    "ryu_crouch",
    animation_ryu_crouching,
    simple_tdata(5,[0,0]),
    false
)}

var action_ryu_stand = function(){ return new Action(
    "ryu_stand",
    animation_ryu_stand,
    simple_tdata(6,[0,0]),
    false
)}

var action_ryu_bored = function(){ return new Action(
    "ryu_bored",
    animation_ryu_bored,
    simple_tdata(24,[0,0]),
    false
)}