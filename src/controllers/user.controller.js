const { userService } = require('../services');

const createUser = async (req, res) => {
  const { type, message } = await userService.createUser(req.body);

  if (type) return res.status(409).json({ message: 'User already registered' });

  res.status(201).json({ token: message });
};

const getAllUsers = async (_req, res) => {
  const users = await userService.getAllUsers();

  res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await userService.getUserById(id);

  if (type) return res.status(404).json({ message });

  return res.status(200).json(message);
};

const deleteUserById = async (req, res) => {
  const { id } = req.user;
  
  await userService.deleteUserById(Number(id));
  res.status(204).json();
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUserById,
};