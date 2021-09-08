
exports.up = async (knex) => {
    await knex.schema
        .createTable('tracker', (tbl) => {
            tbl.increments();
            tbl.string('username', 200).notNullable().unique();
            tbl.float('total_hours');
            tbl.date('acct_created');
            tbl.integer('total_bloodpoints');
            tbl.integer('ult_rare_offerings');
            tbl.integer('mystery_boxes_opened');
            tbl.integer('survivor_rank');
            tbl.integer('survivor_perfect_games');
            tbl.integer('ult_rare_addons_surv');
            tbl.integer('survivor_full_loadout');
            tbl.integer('generators_repaired');
            tbl.integer('escaped_alive');
            tbl.integer('killer_rank');
            tbl.integer('killer_full_loadout');
            tbl.integer('survivors_sacrificed');
            tbl.integer('hatches_closed');
        })
};

exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('tracker');
};
