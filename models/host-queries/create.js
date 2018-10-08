module.exports = ({ host_uri, } = {}) => `
    IF NOT EXISTS(SELECT TOP 1 1 FROM hosts WHERE host_uri = ${host_uri})
    BEGIN
      INSERT INTO hosts (host_uri, created_at, updated_at)
      VALUES (
        ${host_uri},
        now(),
        now()
      )
    END
    ELSE
    BEGIN
      SELECT * FROM hosts WHERE host_uri = ${host_uri}
    END
`
