import React, { Component } from 'react';
import Logout from '../auth/Logout.js';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render(){
    let links = <span />
    if(this.props.user){
      links = <ul className="right"><li><Link to="/">Home</Link></li><li><Link to="/search">Search</Link></li><li><Logout /></li><li><Link to="/profile">Profile</Link></li></ul>;
    }
    else {
      links = <ul className="right"><li><Link to="/">Home</Link></li><li><Link to="/login">Login</Link></li><li><Link to="/signup">Sign Up</Link></li></ul>;
    }
    return(
        <div>
          <nav>
            <div className="nav-wrapper">
              <a className="brand-logo" href="/"></a>
                {links}
            </div>
          </nav>
          <div className="heroimg">
          </div>
        </div>
      );
  }
}

export default Nav;
