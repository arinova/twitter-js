const express = require('express');
const nunjucks= require('nunjucks');
const app = express();
const routes = require('./routes/');

app.use('/', routes);

app.use(express.static('public'));
// app.use(express.static('views'));

app.listen(3000, function(){
  console.log("Server Listening");
});

// app.get('/news', function(req, res, next){
//   res.send("This is news");
// });


app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function(err, output){
//   console.log(output);
// });
