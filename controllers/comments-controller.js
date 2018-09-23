const { Comment } = require("../models");

exports.index = async (req, res) => {
  const posts = await Comment.all({ postId: req.params.id });
  res.render("comments/index", { postId: req.params.id, posts });
};

exports.new = (req, res) => res.render("comments/new", { postId: req.params.id })

exports.create = async (req, res) => {
  req.body["user_id"] = 1;
  await Comment.create(req.body);
  res.redirect(`/posts/${req.params.id}/comments/`);
};
