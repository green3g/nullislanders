exports.up = async knex => {
  await knex.schema.createTable('user_types', table => {
    table.increments('id').primary()
    table.string('title')
    table.boolean('can_post')
    table.boolean('can_vote')
    table.boolean('can_comment')
    table.boolean('can_edit_own_posts')
    table.boolean('can_edit_user_posts')
    table.boolean('can_change_user_type')
    table.boolean('can_delete_posts')
    table.timestamps()
  })

  await knex.schema.createTable('hosts', table => {
    table.increments('id').primary()
    table.string('host_uri')
    table.timestamps()
  })

  await knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('username')
    table.string('email')
    table.string('password_digest')
    table.integer('user_type_id')
    table
      .foreign('user_type_id')
      .references('id')
      .inTable('public.user_types')
    table.timestamps()
  })

  await knex.schema.createTable('posts', table => {
    table.increments('id').primary()
    table.string('uri')
    table.string('text')
    table.integer('user_id')
    table
      .foreign('user_id')
      .references('id')
      .inTable('public.users')
    table.integer('post_id')
    table
      .foreign('post_id')
      .references('id')
      .inTable('public.posts')
    table.integer('host_id')
    table
      .foreign('host_id')
      .references('id')
      .inTable('public.hosts')
    table.timestamps()
  })

  await knex.schema.createTable('upvotes', table => {
    table.increments('id').primary()
    table.integer('user_id')
    table
      .foreign('user_id')
      .references('id')
      .inTable('users')
    table.integer('post_id')
    table
      .foreign('post_id')
      .references('id')
      .inTable('posts')
    table.timestamps()
  })

  await knex.schema.createTable('downvotes', table => {
    table.increments('id').primary()
    table.integer('user_id')
    table
      .foreign('user_id')
      .references('id')
      .inTable('users')
    table.integer('post_id')
    table
      .foreign('post_id')
      .references('id')
      .inTable('posts')
    table.timestamps()
  })
}

exports.down = async knex => {
  await knex.schema.dropTable('user_types')
  await knex.schema.dropTable('users')
  await knex.schema.dropTable('posts')
  await knex.schema.dropTable('hosts')
  await knex.schema.dropTable('upvotes')
  await knex.schema.dropTable('downvotes')
}
