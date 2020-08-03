import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation.js';
import Carousel from './components/Carousel.js';
import UserLogin from './components/UserLogin';




class App extends Component {

  state = {
    user: {
      name: '',
      password: '',
      isLoggedIn: false
    },
    data:{}
  }

  componentDidMount() {
    fetch('https://gnews.io/api/v3/search?q=example&token=990d9071ebb8b5c6202a5b355abf617f')
    .then(data => data.json())
    .then(data => this.setState({data}))
  }

  handleSignUp = (event) => {
    event.preventDefault();

    fetch('user/signup', {
      body: JSON.stringify({
        name: this.state.user.name,
        password:this.state.user.password
      }),
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(response => {
      localStorage.setItem("token", response.token)
      this.setState({
        user: {
          isLoggedIn: true,
          name: '',
          password: ''
        }
      })
    })
  }

  handleLogOut = () => {
    this.setState({
      user: {
        name: '',
        password: '',
        isLoggedIn: false
      }
    })
    localStorage.clear();
  }

  handleLogIn = (event) => {
    event.preventDefault();
    fetch('/user/login', {
      body: JSON.stringify({
        name: this.state.user.name,
        password: this.state.user.password,
      }),
      method: "POST",
      headerrs: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(response => {
      localStorage.setItem("token", response.token)
      this.setState({
        isLoggedIn: true,
        name: '',
        password: ''
      })
    })
  }

  handleFormInput = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    console.log(this.state.data)
  return (
    <div>
      <Navigation />
      {/* <Carousel /> */}
      {/* <HomePage /> */}
      
    </div>
  );
  }
}

export default App;
