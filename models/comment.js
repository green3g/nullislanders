const pg = require('pg')
const { databaseConfig, } = require('../helpers/database')
const timeAgo = require('node-time-ago')

const pool = new pg.Pool(databaseConfig)
const { all, create, } = require('./comment-queries')

exports.all = async ({ postId, } = {}) => {
  const selectAllQuery = all(postId)
  const queryResponse = await pool.query(selectAllQuery)
  const { rows: posts, } = queryResponse
  posts.map(i => (i.created_at = timeAgo(i.created_at)))
  return posts
}

exports.create = async params => {
  const { body, post_id, host_id, user_id, } = params
  const createNewQuery = create(body, post_id, host_id, user_id)
  await pool.query(createNewQuery)
}
