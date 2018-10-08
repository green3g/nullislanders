module.exports = (body, post_id, host_id, user_id) => `
    INSERT INTO posts(
      uri,
      body,
      post_id,
      user_id
    ) VALUES(
      NULL,
      '${body}',
      ${post_id},
      ${user_id}
    )
  `
