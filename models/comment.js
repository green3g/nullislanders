const pg = require("pg");
const { databaseConfig } = require("../helpers");
const timeAgo = require('node-time-ago')

const pool = new pg.Pool(databaseConfig);
const { all, create } = require('./comment-queries')

exports.all = async ({ postId } = {}) => {
  const selectAllQuery = `
    SELECT
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
  const queryResponse = await pool.query(selectAllQuery);
  const { rows: posts } = queryResponse;
  posts.map(i => i.created_at = timeAgo(i.created_at));
  return posts;
};

exports.create = async (params) => {
  const { body, post_id, host_id } = params;

  // TODO: Use session for user_id
  const user_id = 1;

  const createNewQuery = `
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
  const queryResponse = await pool.query(createNewQuery);
  const { rows: post } = queryResponse;
};
