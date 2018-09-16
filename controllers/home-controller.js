const { Post } = require("../models");

exports.homePage = async (req, res) => {
  const posts = await Post.all();
  res.render("index", { posts });
};
