const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const shortUrlDatabase = {};
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send(`
     <b>Welcome to the URL Shortener Microservice</b><br><br>
    ➤ Use <b>POST /shorturl</b> with JSON body: { "id": "anusha2025", "url": "https://example.com" }<br>
    ➤ Then visit <b>/r/:id</b> to redirect to the original URL<br>
    ➤ Or visit <b>/shorturl/:id/stats</b> to see statistics.
  `);
});
app.post('/shorturl', (req, res) => {
  const { id, url } = req.body;

  if (!id || !url) {
    return res.status(400).json({ error: 'Both "id" and "url" fields are required' });
  }
  shortUrlDatabase[id] = {
    originalUrl: url,
    createdAt: new Date(),
    visitCount: 0
  };
  res.json({
    message: 'Short URL created successfully',
    shortLink: `http://localhost:${PORT}/r/${id}`
  });
});
app.get('/r/:id', (req, res) => {
  const id = req.params.id;
  const data = shortUrlDatabase[id];
  if (!data) {
    return res.status(404).send('❌ Short URL not found');
  }
  data.visitCount += 1;
  res.redirect(data.originalUrl);
});
app.get('/shorturl/:id/stats', (req, res) => {
  const id = req.params.id;
  const data = shortUrlDatabase[id];
  if (!data) {
    return res.status(404).json({ error: '❌ No stats found for this ID' });
  }
  res.json({
    originalUrl: data.originalUrl,
    createdAt: data.createdAt,
    totalVisits: data.visitCount
  });
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
