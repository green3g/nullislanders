const { Post } = require("../models");

exports.index = async (req, res) => {
  const posts = await Post.all();
  res.render("posts/index", { posts });
};

exports.new = (req, res) => res.render("posts/new");

exports.create = async (req, res) => {
  req.body["user_id"] = 1;
  req.body["host_id"] = 1;
  await Post.create(req.body);
  res.redirect("/");
};
