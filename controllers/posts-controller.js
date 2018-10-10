const { Post, Host, } = require('../models')

exports.index = async (req, res) => {
  const posts = await Post.all()
  const { session, } = req

  res.render('posts/index', { posts, session, })
}

exports.new = (req, res) => res.render('posts/new')

exports.create = async (req, res) => {
  // TODO: FILTER PARAMS FOR PROPER URI
  req.body['user_id'] = req.session.userID
  req.body['host_id'] = await Host.create(req.body)
  await Post.create(req.body)
  res.redirect('/')
}
