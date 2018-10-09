const pg = require('pg')
const { databaseConfig, } = require('../helpers/database')

const pool = new pg.Pool(databaseConfig)
const { all, create, } = require('./host-queries')

exports.all = async () => {
  const selectAllQuery = all
  const queryResponse = await pool.query(selectAllQuery)
  const { rows: hosts, } = queryResponse
  return hosts
}

exports.create = async params => {
  const createNewQuery = create(params)
  const queryResponse = await pool.query(createNewQuery)
  const { rows: host, } = queryResponse
  return host
}

exports.find = async params => {
  const findQuery = find(params)
  const queryResponse = await pool.query(findQuery)
  const { rows: host, } = queryResponse
  return host
}
