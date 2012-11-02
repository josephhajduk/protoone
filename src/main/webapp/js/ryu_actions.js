var animation_jump_lk = new Animation("ryu_jumping_lk",simple_tdata(4,50),sheet_ryu_jumping_lk)
var animation_jump_mk = new Animation("ryu_jumping_mk",simple_tdata(9,60),sheet_ryu_jumping_mk)
var animation_jump_hk = new Animation("ryu_jumping_hk",simple_tdata(5,70),sheet_ryu_jumping_hk)

var animation_jump_lp = new Animation("ryu_jumping_lp",simple_tdata(6,50),sheet_ryu_jumping_lp)
var animation_jump_mp = new Animation("ryu_jumping_mp",simple_tdata(7,50),sheet_ryu_jumping_mp)
var animation_jump_hp = new Animation("ryu_jumping_hp",simple_tdata(7,50),sheet_ryu_jumping_hp)

var action_hadoken = new Action(
    "ryu_hadoken",
     new Animation("ryu_hadoken",simple_tdata(12,50),sheet_ryu_hadoken),
     simple_tdata(12,[0,0]),
     true
)

var action_shoryuken = new Action(
    "ryu_shoryuken",
    new Animation("ryu_shoryuken",simple_tdata(14,50),sheet_ryu_shoryuken),
    [[1,0],[1,-2],[1,-10],[1,-10],[1,-8],[1,-4],[1,-2],[1,2],[1,4],[1,6],[1,6],[1,6],[1,6],[1,6]],
    true
)

var action_kickspin = new Action(
    "ryu_spinnthing",
    new Animation("ryu_spinnthing",simple_tdata(16,75),sheet_ryu_spinnthing),
    [[5,-2],[5,-2],[5,1],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,1],[5,2],[5,2]],
    true
)

var action_roll = new Action(
    "ryu_roll_forward",
    new Animation("ryu_roll_forward",simple_tdata(9,75),sheet_ryu_roll),
    simple_tdata(9,[14,0]),
    true
)

var action_jump_forward = new Action(
    "ryu_jump_forward",
    new Animation("ryu_jump_forward",simple_tdata(15,55),sheet_ryu_roll_jump),
    [[6,-18],[10,-17],[10,-16],[10,-15],[10,-13],[10,-11],[10,-6],[10,0],[10,6],[10,11],[10,13],[10,15],[10,16],[10,17],[6,18]],
    true
)

var action_jump_up = new Action(
    "ryu_jump_up",
    new Animation("ryu_jump_up",simple_tdata(11,55),sheet_ryu_up_jump),
    [[0,-30],[0,-25],[0,-20],[0,-15],[0,-10],[0,0],[0,10],[0,15],[0,20],[0,25],[0,30]],
    true
)

var action_jump_backward = new Action(
    "ryu_jump_forward",
    new Animation("ryu_jump_forward",simple_tdata(15,55),sheet_ryu_roll_jump),
    [[-6,-18],[-10,-17],[-10,-16],[-10,-15],[-10,-13],[-10,-11],[-10,-6],[-10,0],[-10,6],[-10,11],[-10,13],[-10,15],[-10,16],[-10,17],[-6,18]],
    true
)

var action_move_quick_forward = new Action(
    "ryu_dash_forward",
    new Animation("ryu_dash_forward",simple_tdata(6,40),sheet_ryu_quick_forward),
    simple_tdata(6,[13,0]),
    true
)

var action_move_quick_backward = new Action(
    "ryu_dash_backward",
    new Animation("ryu_dash_backward",simple_tdata(6,40),sheet_ryu_quick_backward),
    simple_tdata(6,[-13,0]),
    true
)

var action_move_forward = new Action(
    "ryu_forward",
    new Animation("ryu_forward",simple_tdata(11,40),sheet_ryu_forward),
    simple_tdata(11,[6,0]),
    false
)

var action_move_backward = new Action(
    "ryu_backward",
    new Animation("ryu_backward",simple_tdata(11,40),sheet_ryu_backward),
    simple_tdata(11,[-5,0]),
    false
)

var action_crouch_lp = new Action(
    "ryu_crouch_lp",
     new Animation("ryu_crouch_lp",simple_tdata(3,50),sheet_ryu_crouching_lp),
     simple_tdata(3,[0,0]),
     true
 )

var action_crouch_mp =  new Action(
    "ryu_crouch_mp",
     new Animation("ryu_crouch_mp",simple_tdata(5,80),sheet_ryu_crouching_mp),
     simple_tdata(5,[0,0]),
     true
)

var action_crouch_hp =  new Action(
    "ryu_crouch_hp",
     new Animation("ryu_crouch_hp",simple_tdata(9,80),sheet_ryu_crouching_hp),
     simple_tdata(9,[0,0]),
     true
)

var action_lp = new Action(
    "ryu_light_punch",
    new Animation("ryu_light_punch",simple_tdata(4,50),sheet_ryu_light_punch),
    simple_tdata(4,[0,0]),
    true
)

var action_mp = new Action(
    "ryu_medium_punch",
    new Animation("ryu_medium_punch",simple_tdata(8,50),sheet_ryu_medium_punch),
    simple_tdata(8,[0,0]),
    true
)

var action_hp = new Action(
    "ryu_heavy_punch",
    new Animation("ryu_heavy_punch",simple_tdata(10,50),sheet_ryu_heavy_punch),
    simple_tdata(10,[0,0]),
    true
)

var action_crouch_lk = new Action(
    "ryu_crouch_light_kick",
     new Animation("ryu_crouch_light_kick",simple_tdata(6,60),sheet_ryu_crouching_lk),
     simple_tdata(6,[0,0]),
     true
 )

var action_crouch_mk =  new Action(
    "ryu_crouch_mk",
     new Animation("ryu_crouch_mkick",simple_tdata(6,70),sheet_ryu_crouching_mk),
     simple_tdata(6,[0,0]),
     true
)

var action_crouch_hk =  new Action(
    "ryu_crouch_hk",
     new Animation("ryu_crouch_hkick",simple_tdata(10,80),sheet_ryu_crouching_hk),
     simple_tdata(10,[0,0]),
     true
)

var action_lk = new Action(
    "ryu_light_kick",
    new Animation("ryu_light_kick",simple_tdata(7,50),sheet_ryu_light_kick),
    simple_tdata(7,[0,0]),
    true
)

var action_mk = new Action(
    "ryu_medium_kick",
    new Animation("ryu_medium_kick",simple_tdata(6,50),sheet_ryu_medium_kick),
    simple_tdata(6,[0,0]),
    true
)

var action_hk = new Action(
    "ryu_heavy_kick",
    new Animation("ryu_heavy_kick",simple_tdata(13,50),sheet_ryu_heavy_kick),
    simple_tdata(13,[0,0]),
    true
)

var action_back_hk = new Action(
    "ryu_back_hkick",
    new Animation("ryu_back_hkick",simple_tdata(13,50),sheet_ryu_back_hk),
    [[-3,0],[-3,0],[-3,0],[-3,0],[-3,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
    true
)

var action_ryu_idle = new Action(
    "ryu_idle",
    new Animation("ryu_idle",simple_tdata(10,65),sheet_ryu_idle),
    simple_tdata(10,[0,0]),
    false
)

var action_ryu_duck =  new Action(
    "ryu_duck",
    new Animation("ryu_duck",simple_tdata(6,40),sheet_ryu_duck),
    simple_tdata(6,[0,0]),
    false
)

var action_ryu_crouching = new Action(
    "ryu_crouch",
    new Animation("ryu_crouch",simple_tdata(4,100),sheet_ryu_crouching),
    simple_tdata(5,[0,0]),
    false
)

var action_ryu_stand = new Action(
    "ryu_stand",
    new Animation("ryu_stand",simple_tdata(6,40),sheet_ryu_stand),
    simple_tdata(6,[0,0]),
    false
)

var action_ryu_bored = new Action(
    "ryu_bored",
    new Animation("ryu_bored",simple_tdata(24,120),sheet_ryu_bored),
    simple_tdata(24,[0,0]),
    false
)