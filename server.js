const express = require('express');
const app = express();

// Use the PORT provided by Runsite or default to 3000
const PORT = process.env.PORT || 3000;

app.get('/api/get-ram', (req, res) => {
  res.json({ ram_mb: 1024 });
});

app.listen(PORT, () => {
  console.log(`Server is running on internal port ${PORT}`);
});
