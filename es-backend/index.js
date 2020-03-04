const express = require('express');
const config = require('./config');
const app = express();
const { get, search, searchAll } = require('./db/ES');

app.get('/', async (req, res) => {
  const data = await searchAll();
  res.json(data.hits);
});

app.listen(config.app.port, () => {
  console.log(`App is running on port ${config.app.port} 👻  ...`);
});
