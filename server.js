const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const CoinRouter = require('./routes/CoinRouter');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/node59161080');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/coins', CoinRouter);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'public', 'index.html'));
 });

 app.listen(port, function(){
    console.log('Node js Express js Tutorial');
  });

