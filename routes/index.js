const express = require('express');
const router = express.Router();

const tweetBank = require('../tweetBank');

router.get('/', function(req, res) {
	let tweets = tweetBank.list();
	res.render('index', {tweets: tweets});
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: tweets } );
});


router.get('/tweets/:id', function(req, res) {
  var id = req.params.id;
  var tweets = tweetBank.find( {id: id} );
  res.render( 'index', { tweets: tweets } );
});

// router.get('/stylesheets/style.css', function(req, res) {
// 	res.sendFile('/Users/Anna/Desktop/GRACE HOPPER/twitter-js/public/stylesheets/style.css');
// })

module.exports = router;
