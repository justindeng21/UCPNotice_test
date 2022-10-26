//server stuff
const express = require('express');
const bodyParser = require('body-parser');
let app = express();
var port = process.env.PORT || 3000
app.use(bodyParser.json());
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
//






////////////////////////////////////////////////
/*
	Database connection to a mySQL database
*/

// const mysql = require('mysql');  //mysql node driver

// if(process.env.JAWSDB_URL)
// {
// 	var connection = mysql.createConnection(process.env.JAWSDB_URL)
// }

// else
// {
// 	var connection /*This variable will be used in every query*/ = mysql.createConnection({	
// 		host: 'localhost',
// 		user: 'root',
// 		password: 'password',
// 		database: 'CUThere',
// 	})
// }

// connection.connect() 

////////////////////////////////////////////////





app.use(express.static('public')) // forces external files to be inside /public


////////////////////////////////////////////////
/*
	request to home page
*/


app.get('/home',function(req,res)
{

	res.render('home')
				

})


app.get('/',function(req,res)
{

	res.render('home')
				

})
////////////////////////////////////////////////





////////////////////////////////////////////////
/*
	request to application html
*/


////////////////////////////////////////////////





////////////////////////////////////////////////
/*
	request to images
*/
app.get('/cutherelogo',function(req,res)
{
	res.sendFile(__dirname + '/public/images/cutherelogo.png')
})

app.get('/koelbel',function(req,res)
{
	res.sendFile(__dirname + '/public/images/koelbel.png')
})

app.get('/ticket',function(req,res)
{
	res.sendFile(__dirname + '/public/images/ticket.png')
})

app.get('/umc',function(req,res)
{
	res.sendFile(__dirname + '/public/images/umc.png')
})

app.get('/eccr',function(req,res)
{
	res.sendFile(__dirname + '/public/images/eccr.png')
})

app.get('/university_logo',function(req,res)
{
	res.sendFile(__dirname + '/public/images/university_logo.png')
})

app.get('/duane',function(req,res)
{
	res.sendFile(__dirname + '/public/images/duane.png')
})

app.get('/farrand',function(req,res)
{
	res.sendFile(__dirname + '/public/images/farrand.png')
})

app.get('/hellems',function(req,res)
{
	res.sendFile(__dirname + '/public/images/hellems.png')
})

app.get('/humanities',function(req,res)
{
	res.sendFile(__dirname + '/public/images/humanities.png')
})

app.get('/math',function(req,res)
{
	res.sendFile(__dirname + '/public/images/math.png')
})

app.get('/norlin',function(req,res)
{
	res.sendFile(__dirname + '/public/images/norlin.png')
})

app.get('/rec',function(req,res)
{
	res.sendFile(__dirname + '/public/images/rec.png')
})
////////////////////////////////////////////////'
app.listen(port)
console.log('Server is being hosted on port 3000')