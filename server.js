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

app.get('/implementation/test/hardcode', function(req,res){
    res.sendFile('views/test.html',{root: __dirname })
})

app.get('/test2', function(req,res){
    res.sendFile('views/test2.html',{root: __dirname })
})

app.get('/test3', function(req,res){
    res.sendFile('views/test3.html',{root: __dirname })
})


app.get('/js/evidon.js', function(req,res){
    res.sendFile('/js/evidon.js',{root: __dirname })
})




var server = app.listen(port)
