const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

const uri = '@cluster0.o8u1gcp.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function main() {
  await client.connect();
  const db = client.db('test');
  const collection = db.collection('pets');

 app.get('/pets', async (req, res) => {
    const pets = await collection.find().toArray();
    res.json(pets);
  });


  const port = process.env.PORT || 3001;
  app.listen(port, () => {
  });
}

main();
