
exports.up = function(knex) {
    return knex.schema.createTable('comment_posts', function (table){
      table.increments('id'),
      table.integer('post_id'),
      table.string('comment'),
      table.integer('user_id'),
      table.timestamp('commentDate').defaultTo(knex.fn.now())
  
      table.foreign('post_id').references('id').inTable('post'),
      table.foreign('user_id').references('id').inTable('login')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('comment_posts')
  };
  