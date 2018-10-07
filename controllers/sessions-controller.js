const { User, } = require('../models')
const { compare, } = require('../helpers/bcrypt')

exports.new = (req, res) => {
  res.render('sessions/new', { expressFlash: null, })
}

exports.create = async (req, res) => {
  const { username, password, } = req.body
  const user = await User.findBy({ username, })
  if (!user) {
    console.log('User not found')
    req.flash('error', 'Username/Email not found!')
    res.render('sessions/new', { expressFlash: req.flash('error'), })
  } else {
    const match = await compare(password, user.password_digest)
    if (!match) {
      console.log('Incorrect password')
      req.flash('error', 'Incorrect password!')
      res.render('sessions/new', { expressFlash: req.flash('error'), })
    } else {
      req.session.username = user.username
      req.session.email = user.email
      res.redirect('/')
    }
  }
}

exports.destroy = async (req, res) => {
  req.session.destroy()
  res.redirect('/')
}
