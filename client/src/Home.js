import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search.js';

class Home extends Component {
  componentWillMount(){
    axios.get('/pet/search').then((result) => {
      console.log(result.data);
      console.log(result.data.allPets.pet[0]);
      console.log(result.data.allPets.pet[0].name.$t);
    }).catch((err) => {
      console.log(err);
    });
  }
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
