module.exports = `
  WITH
  comment_count AS (
    SELECT
      count(*) AS number_comments,
      post_id
    FROM
      posts
    WHERE
      post_id IS NOT NULL
    GROUP BY
      post_id
  )
 SELECT
    posts.id,
    posts.uri,
    posts.body,
    posts.created_at,
    users.username,
    users.id AS user_id,
    hosts.host_uri,
    COALESCE(comment_count.number_comments, 0) AS number_comments
  FROM
    posts
  JOIN
    hosts
  ON
    posts.host_id = hosts.id
  JOIN
    users
  ON
    posts.user_id = users.id
  LEFT JOIN
    comment_count
  ON
    posts.id = comment_count.post_id;
`
