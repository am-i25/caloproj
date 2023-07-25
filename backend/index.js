require('dotenv').config();
const express = require('express');
const cors = require('cors');
const petController = require('./controllers/petController');
const bodyParser = require('body-parser');
const { connect } = require('./db');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(petController);

async function main() {
  await connect();

  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

main();


