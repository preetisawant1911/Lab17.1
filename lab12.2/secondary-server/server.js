const express = require('express');
const app = express();
const port = 4000;

app.get('/data', (req, res) => {
  res.json({ message: 'Hello from Secondary Server!' });
});

app.listen(port, () => {
  console.log(`Secondary server running on port ${port}`);
});

