const pg = require("pg");
const { databaseConfig } = require("../helpers");
const timeAgo = require('node-time-ago')

const pool = new pg.Pool(databaseConfig);
const { all, create } = require('./comment-queries')

exports.all = async () => {
  return [
    {
      status: 1,
    }
  ]
  // const selectAllQuery = all;
  // const queryResponse = await pool.query(selectAllQuery);
  // const { rows: posts } = queryResponse;
  // posts.map(i => i.created_at = timeAgo(i.created_at));
  // return posts;
};

exports.create = async (params) => {
  return {
    status: 1,
  }
  // const createNewQuery = create(params);
  // const queryResponse = await pool.query(createNewQuery);
  // const { rows: post } = queryResponse;

  // return post;
};
