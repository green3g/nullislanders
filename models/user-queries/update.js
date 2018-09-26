module.exports = ({ id, username, password, email, } = {}) => `
UPDATE
  users
SET
  username = '${username}',
  password_digest = '${password}',
  email = '${email}'
WHERE
  id = ${id};
`
