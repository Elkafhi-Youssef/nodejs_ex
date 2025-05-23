const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Route principale
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Route /date
app.get('/date', (req, res) => {
  const now = new Date();
  res.send(`Date et heure actuelles : ${now.toString()}`);
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
