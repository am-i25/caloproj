const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connect() {
  await client.connect();
}

const db = client.db('test');

module.exports = { connect, db };
