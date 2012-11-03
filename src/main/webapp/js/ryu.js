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
        move_super_hadoken,
        move_shoryuken,
        move_hadoken,
        move_spinnthing,
        move_roll_forward,
        move_back_heavy_kick,

        // single button
        move_light_kick,
        move_medium_kick,
        move_heavy_kick,
        move_light_punch,
        move_medium_punch,
        move_heavy_punch,

        // complex movement
        move_quick_forward,
        move_quick_backward,

        // movements
        move_jump_forward,
        move_jump_backward,
        move_jump_up,
        move_forward,
        move_backward
    ]
}