
exports.up = function(knex) {
  return knex.schema.createTable('post', function(table){
      table.increments('id'),
      table.integer('id_user'),
      table.string('title'),
      table.string('description'),
      table.date('postDate').defaultTo(knex.fn.now()),
      table.integer('category'),

      table.foreign('id_user').references('id').inTable('login'),
      table.foreign('category').references('id').inTable('category_posts')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('post')
};
