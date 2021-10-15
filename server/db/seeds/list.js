
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('list').del()
    .then(function () {
      // Inserts seed entries
      return knex('list').insert([
        {id: 1, item: 'Cycle to town'},
        {id: 2, item: 'Go to Gym'},
        {id: 3, item: 'Manage Kombucha'}
      ]);
    });
};
