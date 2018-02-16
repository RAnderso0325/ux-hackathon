import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search.js';

class Home extends Component {
  render(){
    return (
        <div className="home-page">
        <p>This is a home page. You probably ought to write something here</p>
        <Search />
        </div>
      );
  }
}

export default Home;
