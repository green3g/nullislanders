const pg = require("pg");
const { databaseConfig } = require("../helpers");
const pool = new pg.Pool(databaseConfig);

exports.all = "list users"

exports.find = "find a user"

exports.create = "new user"

exports.update = "update user"

exports.delete = "delete user"

