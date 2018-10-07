const { User, } = require('../models')
const { compare, } = require('../helpers/bcrypt')

exports.new = (req, res) => {
  res.render('sessions/new')
}

exports.create = async (req, res) => {
  const { username, password, } = req.body
  // TODO: Presence check for username, password
  const user = await User.findBy({ username, })
  if (!user) {
    console.log('user not found')
    res.render('sessions/new')
  }
  const match = await compare(password, user.password_digest)
  if (!match) {
    console.log('Incorrect password')
    res.render('sessions/new')
  }
  req.session.username = user.username
  req.session.email = user.email
  res.redirect('/')
}

exports.destroy = async (req, res) => {
  req.session.destroy()
  res.redirect('/')
}
