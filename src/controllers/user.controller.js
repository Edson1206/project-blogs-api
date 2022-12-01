const { userService } = require('../services');

const createUser = async (req, res) => {
  const { type, message } = await userService.createUser(req.body);

  if (type) return res.status(409).json({ message: 'User already registered' });

  res.status(201).json({ token: message });
};

module.exports = {
  createUser,
};