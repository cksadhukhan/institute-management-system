import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

class Subjects extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false
        }
    }
    render(){
        if(!this.state.isLoggedIn){
            return(
                <Redirect to={{
                    pathname: '/login',
                    state: { message: 'Kindly Login to View Subjects'}
                }} />
            );
        }
    }
}
export default Subjects;