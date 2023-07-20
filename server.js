const express = require('express');
const bodyParser = require('body-parser');
let app = express();
var port = process.env.PORT || 3000
app.use(bodyParser.json());
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')) // forces external files to be inside /public?


//html
app.get('/', function(req,res){
    res.sendFile('views/home.html',{root: __dirname })
})

app.get('/implementation/tagControl/', function(req,res){
    res.sendFile('views/tagControl.html',{root: __dirname })
})

app.get('/implementation/tagControl/#', function(req,res){
    res.sendFile('views/test.html',{root: __dirname })
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
    res.sendFile('images/dqm_ad.png',{root: __dirname })
})

app.get('/cp', function(req,res){
    res.sendFile('images/cp_banner.jpg',{root: __dirname })
})

app.get('/durly', function(req,res){
    res.sendFile('images/durly.png',{root: __dirname })
})

app.get('/ocd29010', function(req,res){
    res.sendFile('images/ocd29010.png',{root: __dirname })
})

app.get('/OCD-29010/example-of-bug', function(req,res){
    res.sendFile('views/example-of-bug.html',{root: __dirname })
})

app.get('/OCD-29010/example-of-basic-tag', function(req,res){
    res.sendFile('views/example-of-basic-tag.html',{root: __dirname })
})

app.get('/OCD-29010/example-of-working-tag', function(req,res){
    res.sendFile('views/example-of-working-tag.html',{root: __dirname })
})

app.get('/css', function(req,res){
    res.sendFile('css/test.css',{root: __dirname })
})




var server = app.listen(port)
