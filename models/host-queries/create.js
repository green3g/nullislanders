module.exports = ({ host_uri, } = {}) => `
  INSERT INTO hosts(host_uri)
  SELECT '${host_uri}'
  FROM hosts
  WHERE NOT EXISTS (select 1 from hosts WHERE host_uri = '${host_uri}');
  SELECT id
  FROM hosts
  WHERE host_uri = '${host_uri}'
`
