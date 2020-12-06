import React from 'react';
import './CitySelect.css';
import Weather from '../Weather/Weather';

let city = '';
class CitySelect extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleSelectCity = this.handleSelectCity.bind(this);
        this.handleClickReset = this.handleClickReset.bind(this);
    }
    handleClick(){
        this.props.getCities();
    }
    handleChangeCity(event){
        this.props.getWeather(event.target.value);
        return city = event.target.value;
      }
    handleSelectCity(){
        this.props.chooseCity(city);
    }
    handleClickReset(){
        this.props.chooseCity('');
        this.props.resetPlaces();
    }
    render(){
        return (
            <div className='city-select-div container-fluid'>
                <div className='step-title row row-cols-1 justify-content-center'>
                    <h3>Step #3</h3>
                </div>
                <div className='component-title row row-cols-1 justify-content-center'>
                        <h2>To which city would you like to go to?</h2>
                </div>
                <div className='City_Select'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl pretium fusce id velit ut. Integer vitae justo eget magna fermentum. Tristique nulla aliquet enim tortor. </p>
                    <button className="input-button"  id="btn_submit" onClick={this.handleClick} >Show Cities to Explore</button>
                    {this.props.cityList && <ul className='List_Cities'>{this.props.cityList.map((city,i) => <li key={i}>{city}</li>)}</ul>}
                </div>
                {/*Weather Information to be Displayed Below */}
                <div className='weather-select'>
                    <h2>Current Weather</h2>
                    <p>Select the City that you would like to know what its current weather is by using the list below</p>
                    <select onChange={this.handleChangeCity} className='selectList'>
                    {this.props.cityList.length === 0 && <option>No Cities Added Yet</option>}
                    {this.props.cityList.length > 0 && <option>Select a City</option>}
                    {this.props.cityList.map((city,i) => <option key={i}>{city}</option>)}
                    </select>
                </div>
                <Weather data={this.props.weather} className='weather'/>
                {city && <div className='City_Select'>
                    <p id='p-select-city'>If you like the weather in <span>{city}</span>, would you like to select this city as your destination?</p>
                    <button className="input-button"  id="btn_select" onClick={this.handleSelectCity} >Select {city}</button>
                    <button className="input-button"  id="btn_reset-select" onClick={this.handleClickReset} >Reset</button>
                </div>
                }            
                <div id="disp-city" >
                        {this.props.selectedCity && <p>You have selected <span>{this.props.selectedCity}</span> as your destination!</p>}
                    </div>
            </div>
        );
    }
}

export default CitySelect;