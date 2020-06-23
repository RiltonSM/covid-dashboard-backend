
exports.up = function(knex) {
  return knex.schema.createTable('covid', function (table) {
    table.increments('id');
    table.string('city');
    table.string('state', 2);
    table.string('region').notNullable();
    table.string('country').notNullable();
    table.integer('deathsAcc').notNullable();
    table.integer('casesAcc').notNullable();
    table.integer('deathsNew').notNullable();
    table.integer('casesNew').notNullable();
    table.date('date').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('covid');
};
