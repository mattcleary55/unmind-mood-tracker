const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const getCheckInHistory = require('./endpoints/getCheckInHistory');
const logCheckIn = require('./endpoints/logCheckIn');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// parse application/json
app.use(bodyParser.json());

app.get('/api/checkin', getCheckInHistory);

app.post('/api/checkin', logCheckIn);

app.listen(process.env.PORT || 8080, (): void =>
  console.log(`Server listening on port: ${process.env.PORT || 8080}`)
);
