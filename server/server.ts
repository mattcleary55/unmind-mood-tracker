const express = require('express');
const bodyParser = require('body-parser');

const getCheckInHistory = require('./endpoints/getCheckInHistory');
const logCheckIn = require('./endpoints/logCheckIn');

const app = express();

// parse application/json
app.use(bodyParser.json());

app.get('/api/checkin', getCheckInHistory);

app.post('/api/checkin', logCheckIn);

app.listen(process.env.PORT || 8080, (): void =>
  console.log(`Server listening on port: ${process.env.PORT || 8080}`)
);
