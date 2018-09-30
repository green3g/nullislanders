// Make sure we are running node 7.6+
const [major, minor,] = process.versions.node.split('.').map(parseFloat)
if (major < 7 || (major === 7 && minor <= 5)) {
  console.log('🛑  You\'re on an older version of node  ')
  process.exit()
}

require('dotenv').config({ path: '.env', })

const app = require('./app')
app.set('port', process.env.PORT || 3000)
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`)
})
