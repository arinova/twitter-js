const express = require('express');
const bodyParser= require('body-parser');
const nunjucks= require('nunjucks');
const app = express();
const routes = require('./routes/');
var socketio = require('socket.io');
var server = app.listen(3000, function(){
  console.log("Server Listening");
});
var io = socketio.listen(server);


app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes(io));
app.use(express.static('public'));
// app.use(express.static('views'));
// app.listen(3000, function(){
//   console.log("Server Listening");
// });
// app.get('/news', function(req, res, next){
//   res.send("This is news");
// });

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function(err, output){
//   console.log(output);
// });
