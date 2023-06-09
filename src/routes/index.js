const express = require('express');

const router = express.Router();

const loginRouter = require('./login.router');
const userRouter = require('./user.router');
const categoryRouter = require('./category.router');
const blogPostRouter = require('./blogPost.router');

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoryRouter);
router.use('/post', blogPostRouter);

module.exports = router;