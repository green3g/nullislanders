const { Comment, Post, } = require('../models')

exports.index = async (req, res) => {
  // TODO: Use promise.all to get both queries at same time
  const comments = await Comment.all({ postId: req.params.id, })
  const [post,] = await Post.find({ id: req.params.id, })
  const { session, } = req
  res.render('comments/index', { postId: req.params.id, comments, post: post, session, })
}

exports.new = (req, res) => res.render('comments/new', { postId: req.params.id, })

exports.create = async (req, res) => {
  req.body['user_id'] = req.session.userID
  await Comment.create(req.body)
  res.redirect(`/posts/${req.params.id}/comments/`)
}
