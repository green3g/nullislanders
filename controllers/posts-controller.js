const { Post } = require("../models");

exports.index = async (req, res) => {
  const posts = await Post.all();
  res.render("index", { posts });
};

exports.new = (req, res) => res.render("new");
