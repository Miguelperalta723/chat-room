exports.up = function(knex) {
    return knex.schema
    .createTable('users', users => {
      users.increments();  
      users
        .string('email', 255)
      users.string('password', 255)
    })
    .createTable('messages', message => {
      message.increments()
      message
        .string('text', 255)
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
      .dropTableIfExists('messages')
  };
  