const pg = require('pg')
const { databaseConfig, } = require('../helpers/database')
const pool = new pg.Pool(databaseConfig)
const bcrypt = require('bcrypt')
const {
  all,
  find,
  findByUsername,
  findByEmail,
  create,
  update,
  destroy,
} = require('./user-queries')

// TODO: Replace default hash with environment variable
const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds)

// TODO: Restrict access to all functions to admin level or user
exports.all = async () => {
  const selectAllQuery = all
  const queryResponse = await pool.query(selectAllQuery)
  const { rows: users, } = queryResponse
  return users
}

exports.find = async params => {
  const { id, } = params
  console.log('find triggered. Id: ', id)
  const findQuery = find(id)
  const queryResponse = await pool.query(findQuery)
  const { rows: user, } = queryResponse
  return user
}

exports.findBy = async params => {
  const { username, email, } = params
  let queryResponse
  if (username) {
    queryResponse = await pool.query(findByUsername(email))
  } else if (email) {
    queryResponse = await pool.query(findByEmail(email))
  } else {
    console.log('TODO: Give 400 error for lack of params')
  }
}

exports.create = async params => {
  console.log('Create called')
  const { username, email, } = params
  const password = await bcrypt.hashSync(params.password, salt)
  const createQuery = create({ username, password, email, })
  await pool.query(createQuery)
  return true
}

exports.update = async params => {
  const { id, username, password, email, } = params
  const updateQuery = update({ id, username, password, email, })
  await pool.query(updateQuery)
  return true
}

exports.delete = async params => {
  const { id, } = params
  const deleteQuery = destroy
  await pool.query(deleteQuery)
  return true
}
