const express = require('express');
const request = require('request');
const axios = require('axios');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/data', (req, res) => {
  request(
    { url: 'https://datausa.io/api/data?drilldowns=Nation&measures=Population' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      let data = res.json(JSON.parse(body));
      console.log("Data:", data)
    }
  )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));