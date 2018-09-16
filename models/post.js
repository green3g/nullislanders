const pg = require("pg");
const { databaseConfig } = require("../helpers");
const pool = new pg.Pool(databaseConfig);

exports.all = async () => {
  const selectAllQuery = `
      SELECT
        posts.uri,
        posts.body,
        users.username,
        hosts.host_uri
      FROM
        posts
      JOIN
        hosts
      ON
        posts.host_id = hosts.id
      JOIN users
      ON
        posts.user_id = users.id;
    `;
  const queryResponse = await pool.query(selectAllQuery);
  const { rows: records } = queryResponse;
  return records;
};
