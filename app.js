// app.js
const express = require('express');
const path = require('path');
const fs = require('fs/promises');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Route to serve JSON data
app.get('/api/data', async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8');
    res.json(JSON.parse(data));
  } catch (err) {
    console.error('Error reading data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
