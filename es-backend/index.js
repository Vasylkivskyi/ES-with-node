const express = require('express');
const config = require('./config');
const app = express();
const { get, search } = require('./db/ES');

app.get('/', async (req, res) => {
  const data = await search(100);
  console.log(data.hits.hits);
  res.send('Works 🤗');
});

app.listen(config.app.port, () => {
  console.log(`App is running on port ${config.app.port} 👻  ...`);
});
