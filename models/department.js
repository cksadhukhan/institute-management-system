const mongoose = require('mongoose');
const SuperAdmin = require('./superadmin')

const Department = mongoose.model(
	"Department",
	new mongoose.Schema({
		deptName: {
	    type: String,
	    required: true
	  },
	  deptCode: {
	    type: String,
	    required: true
	  },
	  createdBy: {
	    type: mongoose.Schema.Types.ObjectId,
	    ref: 'SuperAdmin'
	  },
	  createdOn: {
	    type: Date,
	    default: Date.now
	  },
	  modified: [{
	    modifiedBy: {
	      type: mongoose.Schema.Types.ObjectId,
	      ref: 'SuperAdmin'
	    },
	    modifiedOn: {
	      type: Date,
	      default: Date.now
	    }
	  }],
	  isActive: {
	    type: Boolean,
	    required: true,
	    default: true
	  }	
	})
);

module.exports = Department