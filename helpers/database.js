exports.databaseConfig = {
  host: process.env.DATABASE_DEV_HOST,
  port: 5432,
  database: process.env.DATABASE_DEV_NAME,
  user: process.env.DATABASE_DEV_USER,
  password: process.env.DATABASE_DEV_PASSWORD,
}
