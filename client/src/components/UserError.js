import React, { Component } from 'react'

class UserError extends Component{
	componentDidMount(){
		document.title = 'Error for User';
	}
	render(){
		return(
			<h1>Error for User</h1>
		);
	}
}

export default UserError;