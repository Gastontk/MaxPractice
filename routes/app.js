var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Pic = require('../models/pic');

//for image upload
var multer  = require('multer')
var upload = multer({ dest: 'public/pics/' })
var fs = require('fs');



router.post('/upload', function (req, res) {
	
});



router.get('/pics/:pic', function(req, res, next){
	console.log('getting individual pic')
	res.sendFile('/public/pics/'+req.params.pic );
})



//get DB list of users and pics
router.get('/pics', function(req, res, next){
	console.log('getting pics')
	Pic.find({}, function(err, docs){
		// console.log(docs)
		res.json({pics:docs})
	})
})


router.get('/profile', function(req, res, next){
	res.redirect('/');
})


router.post('/profile', upload.single('file'), function(req, res) {
	// console.log('filename',req.file.originalname.split('.').pop())
	console.log('body',req.body)

  var finalUrl = '/pics/' +req.file.filename 
  var file = __dirname + '/public/pics/' + req.file.filename;
  fs.rename(req.file.path, 'public/pics/' +req.file.filename, function(err) {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
//save reference to user and pic in DB
	var pic = new Pic({
		url: finalUrl,
		name: req.body.name
	})
	pic.save(function(err){
		if(err){console.log(error)}
		else{
			res.redirect('/');
		}
	})




      res.render('index', {
        message: 'File uploaded successfully',
        filename: req.file.originalname
      });
    }
  });
});


//add child to existing pic(USER)
router.post('/addChild', upload.single('file'), function(req, res){
//grab parent and add child into children field

	User.findById(req.body.parentId, function(err, response){
		if(err){
			console.log(err)
		}else{
			console.log(response)

		}
	})











//handle saving of new Pic(user) with addition of parentId pushed into parents field.
	var postData = req.body
	console.log('/addChild')
	console.log('Body', postData)
	// res.redirect('/');
	var finalUrl = '/pics/' +req.file.filename 
	var file = __dirname + '/public/pics/' + req.file.filename;
	fs.rename(req.file.path, 'public/pics/' +req.file.filename, function(err) {
	    if (err) {
	      console.log(err);
	      res.send(500);
	    } else {
	//save reference to user and pic in DB
		var pic = new Pic({
			url: finalUrl,
			name: req.body.name,

		})
		
		pic.parents.push(postData.parentId);

		pic.save(function(err){
			if(err){console.log(error)}
			else{
				res.redirect('/');
			}
		})




    }
  });










	// var user = Pic.findById(req.body.id, function(err, data){
	// 	console.log(data);


	// })



})






router.get('/image.png', function (req, res) {
    res.sendfile(path.resolve('./uploads/image.png'));
});


router.get('/', function (req, res, next) {
	User.findOne({}, function( err, doc){
		if(err){
			console.log('error occured')
			return res.send('Error occcured.')
		}
    res.render('index', {email: doc});

	})
});





// router.post('/', function(req, res, next){
// 	var email = req.body.email;
// 	var user =  new User({
// 		firstName: 'Gaston',
// 		lastName: 'Kennedy',
// 		password: 'abcd',
// 		email: email
// 	})
// 	user.save();
// 	res.redirect('/')
// });




module.exports = router;
