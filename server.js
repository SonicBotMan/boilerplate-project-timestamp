// Timestamp Microservice - FCC Back End Development and APIs project 1
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.get('/', (req, res) => {
  res.json({ message: 'Timestamp Microservice. Use /api/:date? or /api/' });
});

app.get('/api/:date?', (req, res) => {
  let dateParam = req.params.date;
  let date;
  if (!dateParam) {
    date = new Date();
  } else if (/^\d+$/.test(dateParam)) {
    date = new Date(parseInt(dateParam));
  } else {
    date = new Date(dateParam);
  }
  if (date.toString() === 'Invalid Date') {
    res.json({ error: 'Invalid Date' });
  } else {
    res.json({ unix: date.getTime(), utc: date.toUTCString() });
  }
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

module.exports = app;
