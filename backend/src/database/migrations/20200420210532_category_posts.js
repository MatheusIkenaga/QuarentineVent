
exports.up = function(knex) {
  return knex.schema.createTable('category_posts', function (table){
    table.increments('id'),
    table.string('category')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('category_posts')
};
