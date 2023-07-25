const express = require('express');
const router = express.Router();
const petsService = require('../services/petsService');

router.get('/pets', async (req, res) => {
  const pets = await petsService.getPets();
  res.json(pets);
});

router.post('/pets', async (req, res) => {
  const newPetData = req.body;
  await petsService.createPet(newPetData);
  res.status(201).send();
});


module.exports = router;
