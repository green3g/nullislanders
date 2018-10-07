const express = require('express')
const router = express.Router()
const {
  postsController,
  commentsController,
  sessionsController,
  usersController,
} = require('../controllers/')

router.get('/', postsController.index)
router.get('/posts', postsController.index)
router.get('/new', postsController.new)
router.post('/create', postsController.create)

router.get('/login', sessionsController.new)
router.post('/login', sessionsController.create)
router.get('/logout', sessionsController.destroy)
router.post('/logout', sessionsController.destroy)

router.get('/posts/:id/comments', commentsController.index)
router.get('/posts/:id/comments/new', commentsController.new)
router.post('/posts/:id/comments/create', commentsController.create)

router.get('/users', usersController.index)
router.get('/users/new', usersController.new)
router.post('/users/create', usersController.create)
router.get('/users/:id', usersController.show)
// router.get('/users/:id/edit', usersController.edit)
// router.put('/users/:id/update', usersController.update)
// router.delete('/users/:id/delete', usersController.delete)

module.exports = router
