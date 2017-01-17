const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const router = require('./routes');
const PORT = 3000;

app.use('/', router);

nunjucks.configure('views', {
  // autoescape: true,
  express: app,
  watch: true,
  noCache: true
});

app.listen(PORT, () => {
    console.log('Server listening.');
});

app.use('/', (req, res, next) => {
  console.log(`client is using: ${req.method} ${req.url}`);
  next();
});

app.use('/', (req, res) => {
  res.statusCode = 404;
  console.log(`status code: ${res.statusCode}`);
  res.send('sorry, you have not entered a correct url');
});

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
