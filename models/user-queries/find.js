module.exports = id => `
SELECT
  id,
  username,
  email,
  user_type_id,
  created_at,
  updated_at
FROM
  users
WHERE
  id = ${id};
`
