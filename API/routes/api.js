var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
//var nonauth=new array("")
//var auth = new Array("");
//var admin = new Array("user","");
var nonauth = {
    get : true,
    post : false,
    put : false,
    delete : false
};
var auth = {
    get : true,
    post : true,
    put : true,
    delete : false
};
var admin = {
    get : ["user"],
    post : false,
    put : false,
    delete : false
};


//Used for routes that must be authenticated.



function isAuthenticated (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects

	//allow all get request methods
	if(req.method === "GET"){
		return next();
	}
	if (req.isAuthenticated()){
		return next();
	}

	// if the user is not authenticated then redirect him to the login page
	return res.redirect('/#login');
};

//Register the authentication middleware
router.use('/', isAuthenticated);

router.route('/:post')
	//creates a new post
	.post(function(req, res){

		var Post = mongoose.model(req.params.post);
		var post = new Post();

		for (var key in req.body) {
		    post[key] = req.body[key];
		}
		
		
		post.save(function(err, post) {
			if (err){
				return res.send(500, err);
			}
			return res.json(post);
		});
	})
	//gets all posts
	.get(function(req, res){
	
		var Post = mongoose.model(req.params.post);
			Post.find(function(err, posts){
				console.log('debug2');
					if(err){
						return res.send(500, err);
					}
				return res.send(200,posts);
				console.log(posts);
			});
				
		
	});


//post-specific commands. likely won't be used
router.route('/posts/:id')
	//gets specified post
	.get(function(req, res){
		Post.findById(req.params.id, function(err, post){
			if(err)
				res.send(err);
			res.json(post);
		});
	}) 
	//updates specified post
	.put(function(req, res){
		Post.findById(req.params.id, function(err, post){
			if(err)
				res.send(err);

			post.created_by = req.body.created_by;
			post.text = req.body.text;

			post.save(function(err, post){
				if(err)
					res.send(err);

				res.json(post);
			});
		});
	})
	//deletes the post
	.delete(function(req, res) {
		Post.remove({
			_id: req.params.id
		}, function(err) {
			if (err)
				res.send(err);
			res.json("deleted :(");
		});
	});

module.exports = router;