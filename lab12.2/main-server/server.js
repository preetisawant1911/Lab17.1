const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:4000/data');
    res.send(`Main Server received: ${response.data.message}`);
  } catch (error) {
    res.status(500).send('Error communicating with secondary server');
  }
});

app.listen(port, () => {
  console.log(`Main server running on port ${port}`);
});
