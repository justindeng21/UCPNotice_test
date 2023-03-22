const express = require('express');
const bodyParser = require('body-parser');
let app = express();
var port = process.env.PORT || 3000
app.use(bodyParser.json());
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public')) // forces external files to be inside /public

app.get('/', function(req,res){
    res.sendFile('views/home.html',{root: __dirname })
})

app.get('/tagControl', function(req,res){
    res.sendFile('views/tagControl.html',{root: __dirname })
})

app.get('/test', function(req,res){
    res.sendFile('views/test.html',{root: __dirname })
})
app.get('/discover-demo', function(req,res){
    res.sendFile('views/discover.html',{root: __dirname })
})

app.get('/tagcontrol2', function(req,res){
    res.sendFile('views/tagcontrol2',{root: __dirname })
})

app.get('/google.js', function(req,res){
    res.sendFile('js/google.js',{root: __dirname })
})

app.get('/ads.js', function(req,res){
    res.sendFile('js/ads.js',{root: __dirname })
})

app.get('/style.css', function(req,res){
    res.sendFile('styles/style.css',{root: __dirname })
})



app.get('/close',function(req,res){
    res.send('closing');
    server.close()
})

var server = app.listen(port)
console.log('Server is being hosted on port 3000')
