const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
app.use(bodyParser.json());

const uri = 'mongodb+srv://dbUser:x4BjyKpWEoeqXEuF@cluster0.zxq1gte.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function main() {
  await client.connect();
  const db = client.db('pets');
  const collection = db.collection('animals');

 app.get('/pets', async (req, res) => {
    const pets = await collection.find().toArray();
    res.json(pets);
  });

  app.post('/pets', async (req, res) => {
    const newPet = req.body;
    await collection.insertOne(newPet);
    res.status(201).json(newPet);
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

main();