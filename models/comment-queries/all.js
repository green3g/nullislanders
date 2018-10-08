module.exports = postId =>
  `SELECT
    posts.id,
    posts.body,
    posts.created_at,
    users.username,
    posts.user_id,
    posts.post_id
  FROM
    posts
  JOIN
    users
  ON
    posts.user_id = users.id
  WHERE
    posts.post_id = ${postId}
  `
