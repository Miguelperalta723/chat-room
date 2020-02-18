
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'dummy@dummy.com', password: 'password'},
        {id: 2, email: 'jonny@jonny.com', password: 'password'},
        {id: 3, email: 'lenny@lenny.com', password: 'password'}
      ]);
    });
};
