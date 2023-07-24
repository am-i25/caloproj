require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connect } = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(cors());

async function main() {
  await connect();
  

  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

main();


