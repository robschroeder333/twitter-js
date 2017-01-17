const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
const fs = require('fs');

// router.get('/', (req, res) => {
//   res.write('Welcome to "Better." Our new version of twitter.');
//   res.send();
//   console.log(`status code: ${res.statusCode}`);
// });

tweetBank.add("Rob", "Testing");
tweetBank.add("Rob", "1..2");
tweetBank.add("Rob", "1, 2, 3.");
tweetBank.add("Rob", "Ok. Enough tweeting for today.");


router.get('/', (req, res) => {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets });
  console.log(`status code: ${res.statusCode}`);
});

router.get('/user/:name', (req, res) => {
  let name = req.params.name;
  let list = tweetBank.find({name: name});
  res.render('index', { tweets: list });
  console.log(`status code: ${res.statusCode}`);
});

router.get('/news', (req, res) => {
  res.send('Extra! Extra! Read all about it!');
  console.log(`status code: ${res.statusCode}`);
});

router.get('/layout.html', (req, res) => {
  res.render('layout', {})
});

/* FOR REFERENCE (If express.static didn't exist)

router.get('/stylesheets/styles.css', (req, res) => {
  console.log("Looking for OUR stylsheet!");
  fs.readFile('./public/stylesheets/styles.css', function(err, data){
    if(err)throw err;
    res.contentType('text/css');
    res.send(data.toString());
  });
});
*/

router.get('/index.html', (req, res) => {
    console.log('In router for index.html');
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
