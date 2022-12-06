const express = require('express');
const { blogPostController } = require('../controllers');
const getAuthorization = require('../middlewares/getAuthorization');

const router = express.Router();

router.use(getAuthorization);
router.post('/', blogPostController.createBlogPost);

module.exports = router;