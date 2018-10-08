const { Comment, } = require('../models')

exports.index = async (req, res) => {
  const posts = await Comment.all({ postId: req.params.id, })
  const { session, } = req
  res.render('comments/index', { postId: req.params.id, posts, session, })
}

exports.new = (req, res) => res.render('comments/new', { postId: req.params.id, })

exports.create = async (req, res) => {
  req.body['user_id'] = req.session.userID
  await Comment.create(req.body)
  res.redirect(`/posts/${req.params.id}/comments/`)
}
