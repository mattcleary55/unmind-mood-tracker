const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
  return res.send('pongg');
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Server listening on port: ${process.env.PORT || 8080}`)
);
