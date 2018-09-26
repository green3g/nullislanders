const express = require("express");
const router = express.Router();
const { postsController, commentsController, sessionsController } = require("../controllers/");

router.get("/", postsController.index);
router.get("/posts", postsController.index);
router.get("/new", postsController.new);
router.post("/create", postsController.create);

router.get("/login", sessionsController.new);
router.post("/login", sessionsController.create);

router.get("/posts/:id/comments", commentsController.index);
router.get("/posts/:id/comments/new", commentsController.new);
router.post("/posts/:id/comments/create", commentsController.create);

module.exports = router;
