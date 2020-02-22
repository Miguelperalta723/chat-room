exports.up = function(knex) {
    return knex.schema
    .createTable('users', users => {
      users.increments();  
      users
        .string('email', 255).unique().notNullable()
      users.string('password', 255)
    })
    .createTable('messages', message => {
      message.increments()
      message
        .string('text', 255)
      message
        .interger("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")

    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
      .dropTableIfExists('messages')
  };
  