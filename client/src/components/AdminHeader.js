import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class AdminHeader extends Component{
	render(){
		return(
			<nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
				<NavLink to="/admin" className="navbar-brand">
					<img src="assets/images/logo.png" height="28" alt="CoolBrand" />
					<span className="ml-2" style={{color:'white'}}>KGEI</span>
				</NavLink>
				<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<div className="navbar-nav ml-auto">
						<NavLink to="/admin" className="nav-item nav-link">Home</NavLink>
						<NavLink to="/admin/departments" className="nav-item nav-link">Departments</NavLink>
						<NavLink to="/admin/students" className="nav-item nav-link">Students</NavLink>
						<NavLink to="/admin/faculties" className="nav-item nav-link">Faculties</NavLink>
						<NavLink to="/admin/notices" className="nav-item nav-link">Notices</NavLink>
						<NavLink to="/admin/request" className="nav-item nav-link">Request</NavLink>
						<NavLink to="/admin/profile" className="nav-item nav-link">Profile</NavLink>
						<NavLink to="/admin/logout" className="nav-item nav-link">Logout</NavLink>
					</div>
				</div>
			</nav>
		);
	}
}

export default AdminHeader;