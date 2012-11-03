var ryu = {
    name_offset_x: 182,
    name_offset_y: 50,

    idle : action_ryu_idle,
    duck : action_ryu_duck,
    crouching : action_ryu_crouching,
    stand : action_ryu_stand,
    bored : action_ryu_bored,

    moves : [
        // order with highest complexity higher,  matching is done in this order
        move_ryu_super_hadoken,
        move_ryu_shoryuken,
        move_ryu_hadoken,
        move_ryu_spinnthing,
        move_ryu_roll_forward,
        move_ryu_back_heavy_kick,

        // single button
        move_ryu_light_kick,
        move_ryu_medium_kick,
        move_ryu_heavy_kick,
        move_ryu_light_punch,
        move_ryu_medium_punch,
        move_ryu_heavy_punch,

        // complex movement
        move_ryu_dash_forward,
        move_ryu_dash_backward,

        // movements
        move_ryu_jump_forward,
        move_ryu_jump_backward,
        move_ryu_jump_up,
        move_ryu_forward,
        move_ryu_backward
    ]
}