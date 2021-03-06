require('dotenv').config();

module.exports.development = {
  url: process.env.DATABASE_URL,
  dialect: 'postgres',
  logging: false,
};

module.exports.test = {
  url: process.env.TEST_DATABASE_URL,
  dialect: 'postgres',
  logging: false,
};