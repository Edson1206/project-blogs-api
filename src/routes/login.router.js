const express = require('express');
const verifyFields = require('../middlewares/login');
const { loginController } = require('../controllers');

const router = express.Router();

router.post('/', verifyFields, loginController.login);

module.exports = router;