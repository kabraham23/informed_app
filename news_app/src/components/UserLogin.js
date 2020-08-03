import React, { Component } from 'react';

class UserLogin extends Component {
    state = {
        name: this.props.user.name,
        password: this.props.user.password
    }

    handleFormInput = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        const {handleLogin, handleFormInput, password, email } = this.props;
        return (
            <div className="userLoginForm">
                <form onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <label htmlFor="name">User Name</label>
                        <input type="text" id="name" value={this.state.name} onChange={this.handleFormInput} />
                    <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={this.state.password} onChange={this.handleFormInput} />
                        <input type="submit"/>
                </form>

            </div>
        )
    }
}

export default UserLogin;