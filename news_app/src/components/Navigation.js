import React, { Component } from 'react';
import UserLogin from './UserLogin';

class Navigation extends Component {
    render() {
        return (
            <div>
                <a href="/informed">Home</a>
                <a href="#">Global</a>
                <a href="#">US</a>
                <a href="UserLogin" onClick={<UserLogin />}>User Login</a>
            </div>
        )
    }
}


export default Navigation;