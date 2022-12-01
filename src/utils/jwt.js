require('dotenv/config');
const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, jwtConfig);

  console.log(token);
  return token;
};

const validateToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return { type: null, message: data };
  } catch (e) {
    return { type: 401, message: 'Expired or invalid token' };
  }
};

module.exports = { 
  createToken,
  validateToken,
  };