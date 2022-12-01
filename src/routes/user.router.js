const express = require('express');
const { userController } = require('../controllers');
const getAuthorization = require('../middlewares/getAuthorization');
const userFieldsSchema = require('../middlewares/userSchema');

const router = express.Router();

router.post('/', userFieldsSchema, userController.createUser);
router.use(getAuthorization);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);

module.exports = router;