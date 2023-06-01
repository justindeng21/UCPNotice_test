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

app.get('/tagControl', function(req,res){
    res.sendFile('views/tagControl.html',{root: __dirname })
})

app.get('/test', function(req,res){
    res.sendFile('views/test.html',{root: __dirname })
})

app.get('/test2', function(req,res){
    res.sendFile('views/adnotice.html',{root: __dirname })
})






//Javascript
app.get('/google.js', function(req,res){
    res.sendFile('js/google.js',{root: __dirname })
})
app.get('/sitenotice.js', function(req,res){
    res.sendFile('js/sitenotice.js',{root: __dirname })
})


//css
app.get('/style.css', function(req,res){
    res.sendFile('styles/style.css',{root: __dirname })
})


var server = app.listen(port)
