import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'

import UserHeader from '../components/UserHeader'
import Footer from '../components/Footer'
import UserLogin from '../components/UserLogin'
import UserRegistration from '../components/UserRegistration'
import Welcome from '../components/Welcome'
import Subjects from '../components/Subjects'
import UserError from '../components/UserError'


class Frontend extends Component{
	render(){
		return(
			<div>
		      <UserHeader />
		      <Switch>
		        <Route exact path='/' component={Welcome}/>
		        <Route exact path='/user' component={Welcome}/>
				<Route exact path='/login' component={UserLogin}/>
				<Route exact path='/register' component={UserRegistration}/>
				<Route exact path='/subjects' component={Subjects}/>
		        <Route component={UserError} />
		      </Switch>
		      <Footer />
		    </div>
		);
	}
}

export default Frontend;