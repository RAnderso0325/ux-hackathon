import React, { Component } from 'react';
import './Results.css';
import axios from 'axios';
import Individual from './Individual.js';

class Results extends Component{
    constructor(props){
        super(props);
        this.state = {
            pet: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (e) => {
        this.setState({pet: e.target.value},function(){
        let wholePet = JSON.stringify(this.state.pet);
        let person = this.props.user;
        axios.post('/pet/add',{
            user: person,
            pet: wholePet
        }).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    });
    }
    render(){
        let allResults = [];
        let resultsArr = this.props.results
        for(var i=0; i<resultsArr.length; i++){
            console.log(resultsArr[i].breeds);
            let breeds = [];
            if(Array.isArray(resultsArr[i].breeds.breed)){
                resultsArr[i].breeds.breed.map((breed) => {
                    breeds.push(<p>{breed.$t}</p>);
                });
            }else{
                breeds.push(<p>{resultsArr[i].breeds.breed.$t}</p>);
            }
            let petImg;
            if(resultsArr[i].media.photos.photo[2]){
                petImg = (<img className="card-image-pin" src={resultsArr[i].media.photos.photo[2].$t} />);
            }else{
                petImg = '';
            }
            allResults.push(
                <div className="card pin">
                    <div className="card-image">
                        <div className="row">{resultsArr[i].name.$t}({resultsArr[i].sex.$t})</div>
                        {petImg}
                        <button type="submit" onClick={this.handleClick} value={resultsArr[i]} className="btn-floating halfway-fab waves-effect waves-light indigo accent-2">+</button>
                    </div>
                    <div className="card-content pin-p">
                        <div className="card-content">
                            {breeds}
                            <p>{resultsArr[i].age.$t}</p>
                        </div>
                    </div>
                </div>
            );
        }
        return(
            <div className="results-page row">
                <div id="columns">
                {allResults}
                </div>
            </div>
        );
    }
}

export default Results;