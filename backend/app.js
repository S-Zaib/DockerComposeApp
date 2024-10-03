const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`Hello fromm wasip the backend! Database time: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error connecting to the database');
  }
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});