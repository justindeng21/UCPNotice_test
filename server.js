const http = require('http');
const express = require('express');

var app = express();

const hostname = '127.0.0.1';
const port = 3000;


app.get('/', function(req,res){
    res.sendFile('html/home.html',{root: __dirname })
})

app.get('/home', function(req,res){
    res.sendFile('html/home.html',{root: __dirname })
})

app.get('/projects', function(req,res){
    res.sendFile('html/projects.html',{root: __dirname })
})

app.get('/about-me', function(req,res){
    res.sendFile('html/about.html',{root: __dirname })
})

app.get('/home.css', function(req,res){
    res.sendFile('css/home.css',{root: __dirname })
})

app.get('/menu', function(req,res){
    res.sendFile('images/menu.png',{root: __dirname })
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});