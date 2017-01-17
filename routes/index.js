const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  res.write('Welcome to "Better." Our new version of twitter.');
  res.send();
  console.log(`status code: ${res.statusCode}`);
});

router.get('/news', (req, res) => {
  res.send('Extra! Extra! Read all about it!');
  console.log(`status code: ${res.statusCode}`);
});

router.get('/layout.html', (req, res) => {
  res.render('layout', {})
});

router.get('/stylesheets/styles.css', (req, res) => {
  console.log("Looking for our stylsheet!");
  fs.readFile('./public/stylesheets/styles.css', function(err, data){
    if(err)throw err;
    console.log(data.toString());
    res.send();
  });
});


// router.get('/index.html', (req, res) => {
//     console.log('In router for index.html');
//   const context = {
//     title: 'An Example',
//     people: [
//       {name: 'Goku'},
//       {name: 'Vegeta'},
//       {name: 'Samurai Jack'}
//     ]
//   };
//   res.render('index', {title: 'An Example', people: context.people});
// });

module.exports = router;
