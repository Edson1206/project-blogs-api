const { User } = require('../models');
const jwt = require('../utils/jwt');

const createUser = async (userInfo) => {
  const { displayName, email, password, image } = userInfo;
  const user = await User.findOne({ where: { email: userInfo.email } });

  if (user) {
    return { type: 409, message: 'User already registered' };
  }

  await User.create({ displayName, email, password, image });

  const { password: _, ...newInfo } = userInfo;
  const token = jwt.createToken(newInfo);

  return { type: null, message: token };
};

const getAllUsers = async () => User.findAll({ attributes: { exclude: ['password'] } });

module.exports = {
  createUser,
  getAllUsers,
};