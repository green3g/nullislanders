const pg = require("pg");
const { databaseConfig } = require("../helpers");
const pool = new pg.Pool(databaseConfig);
const { all, create } = require('./post-queries')

exports.all = async () => {
  const selectAllQuery = all;
  const queryResponse = await pool.query(selectAllQuery);
  const { rows: records } = queryResponse;
  return records;
};

exports.create = async (params) => {
  const createNewQuery = create(params);
  const queryResponse = await pool.query(createNewQuery);
  const { rows: record } = queryResponse;
  return record;
};
