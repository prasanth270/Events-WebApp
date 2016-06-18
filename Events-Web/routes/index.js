var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('In index js');
  res.render('welcome', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
	console.log('In index js');
  	res.render('home', { title: 'Express' });
});

router.get('/createEvent',function (req,res,next) {
	 console.log("in Create Event Route");
	 res.render('createEvent');
});

router.get('/loginModalRoute',function(req,res){
	console.log("I'm in route");
	console.log("exit modal route");
	res.end();
});

router.post('/checklogin',function(req,res){
	var data = { username : req.body.username, password : req.body.password };
	var loginStatus = 'success';
	console.log(data.username + " " + data.password);
	// if( password == 'asa'){
	// 	loginStatus = 'success';
	// }
	res.send(loginStatus);

	//res.sendFile('/home.ejs');
	//res.statusCode = 302;
	//res.setHeader("Location", '/home');
	//return res.redirect('/home');
	res.end();
});

router.post('/dummypost',function(request, response){
	console.log(request.body.username);
	response.send(request.body.username);
	response.end();
});

router.get('dummyget',function(request,response){
	console.log('In Dummy Get');
	response.end();
});

module.exports = router;
