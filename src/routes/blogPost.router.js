const express = require('express');
const { blogPostController } = require('../controllers');
const getAuthorization = require('../middlewares/getAuthorization');
const verifyUpdateFields = require('../middlewares/verifyBlogPost');

const router = express.Router();

router.use(getAuthorization);
router.post('/', blogPostController.createBlogPost);
router.get('/', blogPostController.findAllBlogPosts);
router.get('/:id', blogPostController.findBlogPostById);
router.put('/:id', verifyUpdateFields, blogPostController.updateBlogPost);
router.delete('/:id', blogPostController.deleteBlogPostById);

module.exports = router;