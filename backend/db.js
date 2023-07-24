const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://...';
const client = new MongoClient(uri);

async function connect() {
  await client.connect();
}

const db = client.db('test');

module.exports = { connect, db };
