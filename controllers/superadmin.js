const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// importing superadmin model
const SuperAdmin = require('../models/superadmin');

// create superadmin or register
exports.register = (req, res) => {
    const newUser = new SuperAdmin({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        contact: req.body.contact
    });
    // Hash password before saving in database
	bcrypt.genSalt(10, (err, salt) => {
	    bcrypt.hash(newUser.password, salt, (err, hash) => {
	      if (err) throw err;
	      newUser.password = hash;
	      newUser
	        .save()
	        .then(user => res.json({
	        	"success": true, 
	        	user
	        }))
	        .catch(err => console.log(err));
	    });
	});
};

// get superadmin data or login
exports.login = (req, res) => {
    // Find user by email
	  SuperAdmin.findOne({ username: req.body.username }).then(user => {
	    // Check if user exists
	    if (!user) {
	      return res.status(404).json({ emailnotfound: "Username not found" });
	    }

	    // Check password
	    bcrypt.compare(req.body.password, user.password).then(isMatch => {
	      if (isMatch) {
	        // User matched
	        // Create JWT Payload
	        const payload = {
	          id: user.id,
	          name: user.name
	        };

	        // Sign token
	        jwt.sign(
	          payload,
	          keys.secretOrKey,
	          {
	            expiresIn: 31556926 // 1 year in seconds
	          },
	          (err, token) => {
	            res.json({
	              success: true,
	              token: "Bearer " + token
	            });
	          }
	        );
	      } else {
	        return res
	          .status(400)
	          .json({ passwordincorrect: "Password incorrect" });
	      }
	    });
	  });
};

// modify superadmin data
exports.update = (req, res) => {
    res.send('NOT IMPLEMENTED: superadmin update');
};

// delete superadmin
exports.delete = (req, res) => {
    res.send('NOT IMPLEMENTED: superadmin delete');
};