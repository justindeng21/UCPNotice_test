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
    res.sendFile('views/ucp.html',{root: __dirname })
})


app.get('/setDomain', function(req,res){
    res.sendFile('views/set-domain.html',{root: __dirname })
})

app.get('/tealium', function(req,res){
    res.sendFile('views/tealium.html',{root: __dirname })
})



app.get('/styles', function(req,res){
    res.sendFile('css/style.css',{root: __dirname })
})


app.get('/setdomain.js', function(req,res){
    res.sendFile('js/setdomain.js',{root: __dirname })
})

app.get('/ucp.js', function(req,res){
    res.sendFile('js/ucp.js',{root: __dirname })
})









var server = app.listen(port)

