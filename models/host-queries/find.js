module.exports = id => `
SELECT
  *
FROM
  hosts
WHERE
  id = ${id};
`
