const { User, } = require('../models')

exports.new = (req, res) => {
  res.render('sessions/new')
}

exports.create = (req, res) => {
  const { username, email, } = req.body
  const user = User.findBy({ username, email, })
  console.log('create session')
  console.log('Params -> ', req.body)
  res.render('sessions/new')
}
