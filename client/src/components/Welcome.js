import React from 'react';

class Home extends React.Component {
	constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false
        }
	}
	componentDidMount(){
		document.title = 'Welcome to K. G. Enginerring Ibstitute';
	}
	render() {
	return(
		<div className="jumbotron jumbotron-fluid mt-4">
		  <div className="container text-center">
		  	<h1 className="display-5">Hi, {this.state.isLoggedIn? this.state.username : "Anonymous"}</h1>
		    <h1 className="display-4">Welcome to KGEI</h1>
		    <p className="lead">A great Place in the World of Education.</p>
		  </div>
		</div>
	);
	}
}

export default Home;