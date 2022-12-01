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

module.exports = { createToken };