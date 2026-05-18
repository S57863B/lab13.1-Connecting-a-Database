'use strict';

require('dotenv').config();

const express = require('express');
const { MongoClient } = require('mongodb');

const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('MONGO_URI is not defined. Check your .env file.');
  process.exit(1);
}

const app = express();
app.use(express.json());

let client;

app.get('/', async (req, res) => {
  try {
    await client.db('admin').command({ ping: 1 });
    res.status(200).json({ message: 'Successfully connected to the database!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to connect to the database.' });
  }
});

async function startServer() {
  try {
    client = new MongoClient(MONGO_URI);
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to connect:', err.message);
    process.exit(1);
  }
}

startServer();