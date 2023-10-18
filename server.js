const express = require('express');
const bodyParser = require('body-parser');
let app = express();
var port = process.env.PORT || 3000
app.use(bodyParser.json());
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')) // forces external files to be inside /public?


//html


app.get('/setDomain', function(req,res){
    res.sendFile('views/setDomain.html',{root: __dirname })
})

app.get('/', function(req,res){
    res.sendFile('views/onprem.html',{root: __dirname })
})
app.get('/tealium', function(req,res){
    res.sendFile('views/tealium.html',{root: __dirname })
})

app.get('/country.js', function(req,res){
    res.sendFile('js/country.js',{root: __dirname })
})

app.get('/en.js', function(req,res){
    res.sendFile('js/en.js',{root: __dirname })
})
app.get('/evidon-banner.js', function(req,res){
    res.sendFile('js/evidon-banner.js',{root: __dirname })
})
app.get('/evidon-sitenotice-tag.js', function(req,res){
    res.sendFile('js/evidon-sitenotice-tag.js',{root: __dirname })
})
app.get('/settingsV2.js', function(req,res){
    res.sendFile('js/settingsV2.js',{root: __dirname })
})
app.get('/snthemes.js', function(req,res){
    res.sendFile('js/snthemes.js',{root: __dirname })
})

app.get('/evidon-preferences-dialog.js', function(req,res){
    res.sendFile('js/evidon-preferences-dialog.js',{root: __dirname })
})

app.get('/style.css', function(req,res){
    res.sendFile('css/style.css',{root: __dirname })
})



app.get('/shell', function(req,res){
    res.sendFile('views/shell.html',{root: __dirname })
})


app.get('/tealium-testing', function(req,res){
    res.sendFile('views/tealium-testing.html',{root: __dirname })
})

app.get('/tealium.js', function(req,res){
    res.sendFile('test/tealium.js',{root: __dirname })
})



app.get('/adnotice', function(req,res){
    res.sendFile('views/adnotice.html',{root: __dirname })
})

app.get('/sitenotice', function(req,res){
    res.sendFile('views/sitenotice.html',{root: __dirname })
})

app.get('/tagcontrol', function(req,res){
    res.sendFile('views/tagcontrol.html',{root: __dirname })
})






var server = app.listen(port)

