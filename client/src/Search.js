import React, { Component } from 'react';
import axios from 'axios';
import CatBreedList from './helper/CatBreedList.js';
import DogBreedList from './helper/DogBreedList.js';
import BirdBreedList from './helper/BirdBreedList.js';
import ReptileBreedList from './helper/ReptileBreedList.js';
import HorseBreedList from './helper/HorseBreedList.js';
import SmallFurryBreedList from './helper/SmallFurryBreedList.js';
import BarnYardBreedList from './helper/BarnYardBreedList.js';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            animal: '',
            breed: '',
            size: '',
            sex: '',
            age: '',
            location: '',
            shelterId: '',
            searchResults: [],
        }
        this.handleChangeAnimal = this.handleChangeAnimal.bind(this);
        this.handleChangeBreed = this.handleChangeBreed.bind(this);
        this.handleChangeSize = this.handleChangeSize.bind(this);
        this.handleChangeSex = this.handleChangeSex.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeZip = this.handleChangeZip.bind(this);
    }
    handleChangeAnimal = (e) => {
        this.setState({animal: e.target.value});
    }
    handleChangeSize = (e) => {
        this.setState({size: e.target.value});
    }
    handleChangeSex = (e) => {
        this.setState({sex: e.target.value});
    }
    handleChangeZip = (e) => {
        this.setState({location: e.target.value});
    }
    handleChangeBreed = (e) => {
        this.setState({breed: e.target.value});
    }
    handleChangeAge = (e) => {
        this.setState({age: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let a = this.state.animal;
        let b = this.state.breed;
        let si = this.state.size;
        let se = this.state.sex;
        let lo = this.state.location;
        let ag = this.state.age;
        console.log(a);
        console.log(b);
        console.log(si);
        console.log(se);
        console.log(lo);
        console.log(ag);
        axios.post('/pet/search',{
            animal: a,
            breed: b,
            size: si,
            sex: se,
            location: lo,
            age: ag
        }).then((result) => {
            console.log(result.data.pet);
            this.setState({searchResults: result.data.pet});
            console.log(this.state.searchResults);
            console.log('in the promise from post');
        }).catch((err) => {
            console.log(err);
        });
    }
    render(){
        let breeds = [<option value="">Breed List</option>,];
        if(this.state.animal == 'cat'){
            for(var i=0; i<CatBreedList.breed.length; i++){
                breeds.push(<option value={CatBreedList.breed[i].$t}>{CatBreedList.breed[i].$t}</option>);
            }
        }else if(this.state.animal == 'dog'){
            for(var i=0; i<DogBreedList.breed.length; i++){
                breeds.push(<option value={DogBreedList.breed[i].$t}>{DogBreedList.breed[i].$t}</option>);
            }
        }else if(this.state.animal == 'bird'){
            for(var i=0; i<BirdBreedList.breed.length; i++){
                breeds.push(<option value={BirdBreedList.breed[i].$t}>{BirdBreedList.breed[i].$t}</option>);
            }
        }else if(this.state.animal == 'reptile'){
            for(var i=0; i<ReptileBreedList.breed.length; i++){
                breeds.push(<option value={ReptileBreedList.breed[i].$t}>{ReptileBreedList.breed[i].$t}</option>);
            }
        }
        else if(this.state.animal == 'smallfurry'){
            for(var i=0; i<SmallFurryBreedList.breed.length; i++){
                breeds.push(<option value={SmallFurryBreedList.breed[i].$t}>{SmallFurryBreedList.breed[i].$t}</option>);
            }
        }
        else if(this.state.animal == 'barnyard'){
            for(var i=0; i<BarnYardBreedList.breed.length; i++){
                breeds.push(<option value={BarnYardBreedList.breed[i].$t}>{BarnYardBreedList.breed[i].$t}</option>);
            }
        }else if(this.state.animal == 'horse'){
            for(var i=0; i<HorseBreedList.breed.length; i++){
                breeds.push(<option value={HorseBreedList.breed[i].$t}>{HorseBreedList.breed[i].$t}</option>);
            }
        }else{
            breeds.push(<option value="">Please select an animal first!</option>)
        }
        return (
        <div className="search-page col s12">
                <form name="Country Code" className="search-form" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <select value={this.state.animal} className="form-select" onChange={this.handleChangeAnimal}>
                            <option selected value="">Choose an animal type!</option>
                            <option value="cat">Cats</option>
                            <option value="dog">Dogs</option>
                            <option value="bird">Birds</option>
                            <option value="reptile">Reptiles</option>
                            <option value="smallfurry">Small and Furry</option>
                            <option value="barnyard">Barnyard</option>
                            <option value="horse">Horses</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <select value={this.state.breed} className="form-select" onChange={this.handleChangeBreed}>
                            {breeds}
                        </select>
                    </div>
                    {console.log(breeds)}
                    <div className="input-field">
                        <select value={this.state.size} className="form-select" onChange={this.handleChangeSize}>
                            <option selected value="">Choose a size!</option>
                            <option value="S">Small</option>
                            <option value="M">Medium</option>
                            <option value="L">Large</option>
                            <option value="XL">Extra-Large</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <select value={this.state.age} className="form-select" onChange={this.handleChangeAge}>
                            <option selected value="">Choose an age range!</option>
                            <option value="Baby">Baby</option>
                            <option value="Young">Young</option>
                            <option value="Adult">Adult</option>
                            <option value="Senior">Senior</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <select value={this.state.sex} className="form-select" onChange={this.handleChangeSex}>
                            <option selected value="">Choose a sex!</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <input type="text" onChange={this.handleChangeZip} value={this.state.location} placeholder="Enter your zipcode!" />
                    </div>
              <input type="submit" value="Search" className="waves-effect waves-light btn" />
            </form>
          </div>
        );
    }
}

export default Search;