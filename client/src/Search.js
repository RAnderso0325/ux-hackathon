import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            animal: 'CAT',
        }
    }
    handleChange = (e) => {
        this.setState({options: e.target.value});
    }

    handleSubmit = (e) => {

    }
    render(){
        return (
        <div className="search-page col s12">
                <form name="Country Code" className="search-form" onSubmit={this.handleSubmit}>
                    <select value='cat' className="big-select" onChange={this.handleChange}>
                        <option selected value="cat">cat</option>
                    </select>
                <input type="text" value="HI EVERYONE" />
              <input type="submit" value="Search" className="waves-effect waves-light btn" />
            </form>
          </div>
        );
    }
}

export default Search;