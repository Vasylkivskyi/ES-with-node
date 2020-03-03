const dotenv = require('dotenv');
dotenv.config();

const config = {
  app: {
    port: process.env.PORT || 5000
  },
  elastic: {
    version: '7.1.0',
    host: process.env.ELASTIC_HOST
  }
};

module.exports = config;
