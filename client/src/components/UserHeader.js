import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const LoggedInUser = () => 
<nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
	<NavLink to="/" className="navbar-brand ml-2">
		<img src="assets/images/logo.png" height="52" alt="CoolBrand" />
		<span className="ml-2" style={{color:'white'}}>K.G.Engineering Institute</span>
	</NavLink>
	<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
		<span className="navbar-toggler-icon"></span>
	</button>
	<div className="collapse navbar-collapse" id="navbarCollapse">
		<div className="navbar-nav ml-auto">
			<NavLink to="/" className="nav-item nav-link">Home</NavLink>
			<NavLink to="/departments" className="nav-item nav-link">Departments</NavLink>
			<NavLink to="/faculties" className="nav-item nav-link">Faculties</NavLink>
			<NavLink to="/subjects" className="nav-item nav-link">Subjects</NavLink>
			<NavLink to="/notices" className="nav-item nav-link">Notices</NavLink>
			<NavLink to="/about" className="nav-item nav-link">About Us</NavLink>
			<NavLink to="/contact" className="nav-item nav-link">Contact Us</NavLink>
			<NavLink to="/profile" className="nav-item nav-link">Profile</NavLink>
			<NavLink to="/logout" className="nav-item nav-link">Logout</NavLink>
		</div>
	</div>
</nav>
const LoggedOutUser = () => 
<nav className="navbar navbar-expand-md navbar-light bg-light">
	<NavLink to="/" className="navbar-brand">
		<img src="assets/images/logo.png" height="28" alt="CoolBrand" />
		<span className="ml-2" style={{color:'white'}}>KGEI</span>
	</NavLink>
	<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
		<span className="navbar-toggler-icon"></span>
	</button>
	<div className="collapse navbar-collapse" id="navbarCollapse">
		<div className="navbar-nav ml-auto">
			<NavLink to="/" className="nav-item nav-link active">Home</NavLink>
			<NavLink to="/departments" className="nav-item nav-link">Departments</NavLink>
			<NavLink to="/faculties" className="nav-item nav-link">Faculties</NavLink>
			<NavLink to="/notices" className="nav-item nav-link">Notices</NavLink>
			<NavLink to="/about" className="nav-item nav-link">About Us</NavLink>
			<NavLink to="/contact" className="nav-item nav-link">Contact Us</NavLink>
			<NavLink to="/login" className="nav-item nav-link">Login</NavLink>
			<NavLink to="/register" className="nav-item nav-link">Registration</NavLink>
		</div>
	</div>
</nav>

class UserHeader extends Component{
	constructor(props){
		super(props);
		this.state = {
			isLoggedIn:false
		}
	}
	render(){
		if (this.state.isLoggedIn) {
			return(
				<LoggedInUser />
			);
		}
		return(
			<LoggedOutUser />
		);
	}
}

export default UserHeader;