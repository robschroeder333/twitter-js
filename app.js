const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server listening.');
});

app.use('/', (req, res, next) => {
  console.log(`client is using: ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.write('Welcome to "Better." Our new version of twitter.');
  res.send();
  console.log(`status code: ${res.statusCode}`);
});

app.get('/news', (req, res) => {
  res.send('Extra! Extra! Read all about it!');
  console.log(`status code: ${res.statusCode}`);
});

app.use('/', (req, res) => {
  res.statusCode = 404;
  console.log(`status code: ${res.statusCode}`);
  res.send('sorry, you have not entered a correct url');
});
