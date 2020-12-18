import React from 'react';
import './Places.css';

class Places extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
    }
    componentDidMount(){
        this.props.getPlaces();
    }
    handleClick(){
        this.props.createPlacesArr();
        this.props.getPlaces();
    }
    handleClickNext(){
        window.scrollBy({
            top: 350,  
          });
    }
    render(){
        return (
            <div className='city-select-div container-fluid'>
                <div className='step-title-v2 row row-cols-1 justify-content-center'>
                    <h3>Step #4</h3>
                </div>
                <div className='component-title-v2 row row-cols-1 justify-content-center'>
                    <h2>Which places can you visit around that city?</h2>
                </div>
                <div className='Places_Select'>
                    <p>Alright! You have selected the city where you will start your next adventure. Visiting a different city in the world is fun, but don’t you want to know what type of places you can visit from there? That may reinforce your curiosity, but it can also make you rethink your selection. See below what places can be visited from there.</p>
                    <button className="input-button-v2"  id="btn_submit-v2" onClick={this.handleClick} >Show the Places to Explore</button>
                    {this.props.placesComplete && (<div><ul className='List_Places'>{this.props.placesComplete.map((place,i) => <li key={i}>{place[0]}<p>{place[1]}</p></li>)}</ul><button className="next-button"  id="btn_next"
                onClick={this.handleClickNext} >Next Step</button></div>)}
                </div>
            </div>
        )
    }
}

export default Places;