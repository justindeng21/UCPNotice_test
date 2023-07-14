const express = require('express');
const bodyParser = require('body-parser');
let app = express();
var port = process.env.PORT || 3000
app.use(bodyParser.json());
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')) // forces external files to be inside /public


//html
app.get('/', function(req,res){
    res.sendFile('views/home.html',{root: __dirname })
})

app.get('/implementation/tagControl', function(req,res){
    res.sendFile('views/tagControl.html',{root: __dirname })
})

app.get('/implementation/hardcoded', function(req,res){
    res.sendFile('views/hardcoded.html',{root: __dirname })
})

app.get('/implementation/tealium', function(req,res){
    res.sendFile('views/tealium.html',{root: __dirname })
})

app.get('/test', function(req,res){
    res.sendFile('views/test.html',{root: __dirname })
})


app.get('/dqm', function(req,res){
    res.sendFile('dqm_ad.png',{root: __dirname })
})





var server = app.listen(port)
