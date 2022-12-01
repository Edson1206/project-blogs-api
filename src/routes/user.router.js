const express = require('express');
const { userController } = require('../controllers');
const userFieldsSchema = require('../middlewares/userSchema');

const router = express.Router();

router.post('/', userFieldsSchema, userController.createUser);

module.exports = router;