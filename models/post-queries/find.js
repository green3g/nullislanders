module.exports = id => `
SELECT
  *
FROM
  posts
WHERE
  id = ${id};
`
