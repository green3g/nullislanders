const { User, } = require('../models')
const { compare, } = require('../helpers/bcrypt')

exports.new = (req, res) => {
  res.render('sessions/new')
}

exports.create = async (req, res) => {
  const { username, password, } = req.body
  // TODO: Presence check for username, password
  const user = await User.findBy({ username, })
  console.log('Password -> ', password)
  console.log('DB Password: ', user.password_digest)
  const match = await compare(password, user.password_digest)
  if (match) {
    console.log('User found -> ', user)
    console.log('User match -> ', match)
  } else {
    console.log('no match found')
  }
  console.log('match -> ', match)
  res.render('sessions/new')
}
