const pg = require('pg')
const { databaseConfig, } = require('../helpers/database')

const pool = new pg.Pool(databaseConfig)
const { all, create, } = require('./host-queries')
const { extractHost, } = require('../helpers')

exports.all = async () => {
  const selectAllQuery = all
  const queryResponse = await pool.query(selectAllQuery)
  const { rows: hosts, } = queryResponse
  return hosts
}

exports.create = async params => {
  const { uri, } = params
  const host_uri = uri.match(extractHost)[3]
  const createNewQuery = create({ host_uri, })
  const queryResponse = await pool.query(createNewQuery)
  const { id, } = queryResponse[1].rows[0]
  return id
}

exports.find = async params => {
  const findQuery = find(params)
  const queryResponse = await pool.query(findQuery)
  const { rows: host, } = queryResponse
  return host
}
