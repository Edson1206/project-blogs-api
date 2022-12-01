const express = require('express');
const { categoryController } = require('../controllers');
const getAuthorization = require('../middlewares/getAuthorization');
const verifyCategory = require('../middlewares/verifyCategory');

const router = express.Router();

router.use(getAuthorization);
router.post('/', verifyCategory, categoryController.createCategory);
router.get('/', categoryController.getAllCategories);

module.exports = router;