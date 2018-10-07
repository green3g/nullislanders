const { Post, } = require('../models')

exports.index = async (req, res) => {
  const posts = await Post.all()
  console.log('Request sessions -> ', req.session)
  const { email, username, } = req.session
  console.log('Email => ', email)
  console.log('Username => ', username)
  console.log('session id => ', req.sessionID)

  res.render('posts/index', { posts, email, username, })
}

exports.new = (req, res) => res.render('posts/new')

exports.create = async (req, res) => {
  // TODO: Stop hardcoding user and host id
  req.body['user_id'] = 1
  req.body['host_id'] = 1
  await Post.create(req.body)
  res.redirect('/')
}
