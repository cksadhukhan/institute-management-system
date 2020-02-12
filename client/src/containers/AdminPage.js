import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import AdminHeader from '../components/AdminHeader';
import Footer from '../components/Footer';

const Home = () => <div><h1>Home for Admin</h1></div>;
const User = () => <div><h1>User for Admin</h1></div>;
const Error = () => <div><h1>Error for Admin</h1></div>

class Backend extends Component{
	render(){
		return(
			<div>
		      <AdminHeader />
		      <Switch>
		        <Route exact path='/admin' component={Home}/>
		        <Route exact path='/admin/user' component={User}/>
		        <Route component={Error} />
		      </Switch>
		      <Footer />
		    </div>
		);
	}
}

export default Backend;