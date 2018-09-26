const { User, } = require('../models')

exports.index = async (req, res) => {
  const users = await User.all()
  res.render('users/index', { users, })
}

exports.new = (req, res) => res.render('users/new')

exports.create = async (req, res) => {
  const user = await User.create(req.body)
  res.render('users/show', { user, })
}

exports.edit = async (req, res) => {
  const user = await User.find(req.body)
  res.render('users/edit', { user, })
}

exports.update = async (req, res) => {
  await User.update(req.body)
  res.redirect(`users/${req.body.id}`)
}

exports.delete = async (req, res) => {
  await User.delete(req.body)
  res.redirect('/users')
}
