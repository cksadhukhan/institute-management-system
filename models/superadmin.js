const mongoose = require('mongoose');

const SuperAdmin = mongoose.model(
	"SuperAdmin",
	new mongoose.Schema({
		name: {
		    firstName: {
		      type: String,
		      required: true
		    },
		    middleName: {
		      type: String
		    },
		    lastName: {
		      type: String,
		      required: true
		    }
		},
		username: {
		    type: String,
		    required: true
		},
		password: {
		    type: String,
		    required: true
		},
		contact: {
			email: {
		      type: String,
		      required: true
		    },
		    mobileNumber: {
		      type: Number
		    },
		    phoneNumber: {
		      type: Number
		    }
		},
		createdOn: {
		    type: Date,
		    default: Date.now
		},
		loginDetails: [{
		    type: Date,
		    default: Date.now
		}],
		roles: {
		    type: String,
		    required: true,
		    default: "SuperAdmin"
		},
		isActive: {
			type: Boolean,
		    required: true,
		    default: true
		}
	})
);

module.exports = SuperAdmin