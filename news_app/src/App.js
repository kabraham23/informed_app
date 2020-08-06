import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation.js';
import Home from './Home.js';
import NewsCarousel from './components/Carousel.js';
import UserLogin from './components/registrations/UserLogin';
import UserSignup from './components/registrations/UserSignup';




class App extends Component {
  state = {
    data:{}
  }
  constructor(props){
  

  this.state = {
    isLoggedIn: false,
    user: {}
  };
}
  componentDidMount() {
    fetch('https://gnews.io/api/v3/search?q=example&token=990d9071ebb8b5c6202a5b355abf617f')
    .then(data => data.json())
    .then(data => this.setState({data}))
  }

  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
   {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  

  handleFormInput = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    // console.log(this.state.data)
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' 
              render={props => (
              <Home {...props} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/signup' 
              render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}/>
        </Switch>
      </BrowserRouter>
      <Navigation />
      <UserProfile />
      <UserLogin />
      {/* <NewsCarousel /> */}
      <Home />
      
    </div>
  );
  }
}

export default App;
