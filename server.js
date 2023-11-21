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

app.get('/styles', function(req,res){
    res.sendFile('css/style.css',{root: __dirname })
})

app.get('/onprem/:fileName',function(req,res){
    var fileName = req.params.fileName
    res.sendFile('onprem/'+fileName,{root: __dirname })
})

app.get('/js/:fileName',function(req,res){
    var fileName = req.params.fileName
    res.sendFile('js/'+fileName,{root: __dirname })
})

app.get('/views/:fileName',function(req,res){
    var fileName = req.params.fileName
    res.sendFile('views/'+fileName+'.html',{root: __dirname })
})

app.get('/tealium/onprem',function(req,res){
    res.sendFile('views/'+fileName+'.html',{root: __dirname })
})



var server = app.listen(port)

   