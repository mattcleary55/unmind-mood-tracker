const express = require('express');
const path = require('path');

const getInsights = require('./endpoints/getInsights');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/insights', getInsights);

app.listen(process.env.PORT || 8080, (): void =>
  console.log(`Server listening on port: ${process.env.PORT || 8080}`)
);
