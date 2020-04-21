
exports.up = function(knex) {
    return knex.schema.createTable('login', function(table){
        table.increments('id').primary();
        table.string('nickname').notNullable();
        table.string('login').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        table.timestamp('altered_at').notNullable();
        table.blob('image').notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('login')
};
