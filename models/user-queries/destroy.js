module.exports = id => `
DELETE
  users
WHERE
  id = ${id};
`
