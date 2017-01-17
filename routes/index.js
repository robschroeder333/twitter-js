const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.write('Welcome to "Better." Our new version of twitter.');
  res.send();
  console.log(`status code: ${res.statusCode}`);
});

router.get('/news', (req, res) => {
  res.send('Extra! Extra! Read all about it!');
  console.log(`status code: ${res.statusCode}`);
});

router.get('/index.html', (req, res) => {
    console.log("In router for index.html");
  const context = {
    title: 'An Example',
    people: [
      {name: 'Goku'},
      {name: 'Vegeta'},
      {name: 'Samurai Jack'}
    ]
  };
  res.render('index', {title: 'An Example', people: context.people}); 
});

module.exports = router;