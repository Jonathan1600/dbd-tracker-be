
exports.up = async (knex) => {
    await knex.schema
        .createTable('tracker', (tbl) => {
            tbl.increments('user_id')
            tbl.string('username', 200).notNullable().unique()
        })
};

exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('tracker');
};
