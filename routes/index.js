const express = require('express');
//const bodyParser= require('body-parser');
const router = express.Router();

const tweetBank = require('../tweetBank');


// router.get('/stylesheets/style.css', function(req, res) {
// 	res.sendFile('/Users/Anna/Desktop/GRACE HOPPER/twitter-js/public/stylesheets/style.css');
// })

module.exports = function(io) {
    router.get('/', function(req, res) {
    let tweets = tweetBank.list();
    res.render('index', {tweets: tweets});
  });

  router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var tweets = tweetBank.find( {name: name} );
    res.render( 'index', { tweets: tweets , showForm: true} );
  });


  router.get('/tweets/:id', function(req, res) {
    var id = req.params.id;
    var tweets = tweetBank.find( {id: id} );
    res.render( 'index', { tweets: tweets } );
  });


  router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    // tweetBank.add(name, text);
    // res.redirect('/');
    io.sockets.emit('newTweet', { name: name, text: text });
  });

  return router;
}
