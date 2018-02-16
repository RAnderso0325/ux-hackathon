import React, { Component } from 'react';

class Individual extends Component{
    render(){
        return(
            <div className="individual-page">
                <h1>{this.props.pet.name.$t}</h1>
                <p>{this.props.pet.description.$t}</p>
            </div>
        );
    }
}

export default Individual;