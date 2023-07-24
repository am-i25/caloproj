const { db } = require('../db');

async function getPets() {
  const collection = db.collection('pets');
  const pets = await collection.find().toArray();
  return pets;
}

async function createPet(newPetData) {
    const collection = db.collection('pets');
    await collection.insertOne(newPetData);
}


module.exports = { getPets, createPet };
