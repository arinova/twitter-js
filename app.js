const express = require('express');
const nunjucks= require('nunjucks');
const app = express();

app.use('/', function (req, res, next){
  console.log("Request", req.method, req.path);
  next();
});


app.listen(3000, function(){
  console.log("Server Listening");
});

app.get('/', function(req, res, next){
  res.send("This is twitterrrrrrr");
});

app.get('/news', function(req, res, next){
  res.send("This is news");
});

app.use('/special/', function (req, res, next){
  console.log("You've reached a special area");
  next();
});

app.get('/special', function(req, res, next){
  res.send("This is special");
});

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function(err, output){
  console.log(output);
});
