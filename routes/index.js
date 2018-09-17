const express = require("express");
const router = express.Router();
const { postsController } = require("../controllers/");

router.get("/", postsController.index);
router.get("/new", postsController.new);
router.post("/create", postsController.create);

module.exports = router;
