module.exports = ({ uri, body, user_id, post_id, host_id }) => `
  INSERT INTO posts(
    uri,
    body,
    post_id,
    user_id,
    host_id
  ) VALUES (
    '${uri}',
    '${body}',
    ${"NULL"},
    ${user_id},
    ${host_id}
  )
`
