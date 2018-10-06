module.exports = username => `
SELECT
  id,
  username,
  email,
  password_digest
FROM
  users
WHERE
  username = '${username}'
OR
  email = '${username}'
;
`
