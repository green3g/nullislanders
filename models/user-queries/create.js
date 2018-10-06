module.exports = ({ username, password, email, } = {}) => `
INSERT INTO users(
  username,
  password_digest,
  email,
  user_type_id,
  created_at,
  updated_at
) VALUES (
  '${username}',
  '${password}',
  '${email}',
  1,
  now(),
  now()
);
`
