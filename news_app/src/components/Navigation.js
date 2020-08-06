import React, { Component } from 'react';
import UserLogin from './registrations/UserLogin';

class Navigation extends Component {
    render() {
        return (
            <div>
                <a href="/informed">Home</a>
                <a href="#">Global</a>
                <a href="#">US</a>
                <a href="/user/login">User login</a>
            </div>
        )
    }
}


export default Navigation;