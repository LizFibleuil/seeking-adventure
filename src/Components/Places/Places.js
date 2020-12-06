import React from 'react';
import './Places.css';

class Places extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        this.props.getPlaces();
    }
    handleClick(){
        this.props.createPlacesArr();
        this.props.getPlaces();
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl pretium fusce id velit ut. Integer vitae justo eget magna fermentum. Tristique nulla aliquet enim tortor. </p>
                    <button className="input-button-v2"  id="btn_submit-v2" onClick={this.handleClick} >Show the Places to Explore</button>
                    {this.props.placesComplete && <ul className='List_Places'>{this.props.placesComplete.map((place,i) => <li key={i}>{place[0]}<p>{place[1]}</p></li>)}</ul>}
                </div>
            </div>
        )
    }
}

export default Places;