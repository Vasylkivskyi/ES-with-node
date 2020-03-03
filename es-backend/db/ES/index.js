const config = require('../../config');
const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: config.elastic.host });

const get = async (id) => {
  const index = await client.get({
    id,
    index: 'products'
  });
  return index.body._source;
};

const search = async (request) => {
  const { body } = await client.search({
    index: 'products',
    body: {
      query: {
        match: { price: '200' }
      }
    }
  });
  return body;
};

module.exports = {
  get,
  search
};
