
exports.up = function(knex) {
  return knex.schema.createTable('list', table => {
      table.increments('id').primary()
      table.string('item')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('list')
};
