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

router.post('/delete', function(req, res){
	console.log('deleteing', req.body)
	// Pic.findById(req.body.data, function(err, response){
	// 	console.log(response);
	// })
	Pic.remove({ _id: req.body.data }, function(err) {
    if (err) {
            console.log(err);
    }
    else {
    	console.log('successfully deleted user')
    }
});
	
})



router.get('/pics/:pic', function(req, res, next){
	console.log('getting individual pic')
	res.sendFile('/public/pics/'+req.params.pic );
})



//get DB list of users and pics
router.get('/pics', function(req, res, next){
	console.log('getting pics')
	Pic.find({})
	 .populate('parents', ['name','url','_id'])
	 .populate('children', ['name', 'url', '_id'])
	 .exec(function(err, docs){
		// console.log(docs)
		res.json({pics:docs})
	})
})


router.get('/profile', function(req, res, next){
	res.redirect('/');
})
//edit person
router.post('/profile/:id',function(req, res){
	console.log('In router Post for edit', req.params)
	Pic.findById(req.params.id, function(err, person){
		if(err){
			console.log('An error grabbing person', err)
		}else{
			console.log(person);
			person.notes = req.body.notes;
			person.name = req.body.name;
			person.save(function(err){
				if(err){console.log(err)}
				else{
					res.redirect('/');
				}
			})
		}
	})

})


//Add a new person
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
		name: req.body.name,
		notes: req.body.notes
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
			notes: req.body.notes,

		})
		
		pic.parents.push(postData.parentId);


		pic.save(function(err, response){
			if(err){console.log(error)}
			else{
				// console.log(response);
				// res.redirect('/');
			}
		})
		Pic.findById(postData.parentId, function(err, doc){
			console.log('Doc is', doc)
			doc.children.push(pic._id)
			doc.save(function(err){
				if(err){
					console.log(err)
				}else{
					res.redirect('/');

				}
			})
		})




    }
  });














})






router.get('/image.png', function (req, res) {
    res.sendfile(path.resolve('./uploads/image.png'));
});


router.get('/', function (req, res, next) {
	// User.findOne({}, function( err, doc){
	// 	if(err){
	// 		console.log('error occured')
	// 		return res.send('Error occcured.')
	// 	}
    res.render('index');
	// })
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
