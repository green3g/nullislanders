require('dotenv').config({ path: '.env', })

module.exports = {
  production: {
    client: process.env.DATABASE_TYPE,
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD || '',
      charset: 'utf8',
      database: process.env.DATABASE_PROD_NAME,
    },
  },
  test: {
    client: process.env.DATABASE_TEST_TYPE,
    connection: {
      host: process.env.DATABASE_DEV_HOST,
      user: process.env.DATABASE_TEST_USER,
      password: process.env.DATABASE_TEST_PASSWORD || '',
      charset: 'utf8',
      database: process.env.DATABASE_TEST_NAME,
    },
  },
  development: {
    client: process.env.DATABASE_DEV_TYPE,
    connection: {
      host: process.env.DATABASE_DEV_HOST,
      user: process.env.DATABASE_DEV_USER,
      password: process.env.DATABASE_DEV_PASSWORD || '',
      charset: 'utf8',
      database: process.env.DATABASE_DEV_NAME,
    },
  },
}
