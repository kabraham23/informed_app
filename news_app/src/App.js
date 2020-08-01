import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation.js';
import Carousel from './components/Carousel.js';




class App extends Component {
  state = {
    data:{}
  }
  componentDidMount() {
    fetch('https://gnews.io/api/v3/search?q=example&token=990d9071ebb8b5c6202a5b355abf617f')
    .then(data => data.json())
    .then(data => this.setState({data}))
  }

  render() {
    console.log(this.state.data)
  return (
    <div>
      <Navigation />
      <Carousel />
      {/* <HomePage /> */}

    </div>
  );
  }
}

export default App;
