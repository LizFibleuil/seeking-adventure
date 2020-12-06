import React from 'react';
import Logo from './seeking-adventure-icon.png'
import './App.css';
import MapSelect from '../MapSelect/MapSelect';
import Experience from '../Experience/Experience';
import CitySelect from '../CitySelect/CitySelect';
import Places from '../Places/Places';
import Decision from '../Decision/Decision';

const continentSelection = {
  NorthAmerica:'North America',
  SouthAmerica: 'South America',
  Europe: 'Europe',
  Asia: 'Asia',
  Africa: 'Africa',
  Oceania: 'Oceania'
};
const experienceSelection = {
  Architectural:'Architectural',
  Historic: 'Historic',
  Relaxing: 'Relaxing',
  Scenic: 'Scenic',
};

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //These are the continent results that are selected
      continents: 'Asia',
      typeOfExperience: 'Historic',
      weather: null,
      cityList: [],
      cityName: 'Kyoto',
      placesList:[],
      placesDescription:[],
      placesComplete: [],
      decisions:null
    };
    this.chooseContinent = this.chooseContinent.bind(this);
    this.chooseExperience = this.chooseExperience.bind(this);
    this.chooseCity = this.chooseCity.bind(this);
    this.chooseDecisions = this.chooseDecisions.bind(this);
    this.getCityList = this.getCityList.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddCity = this.handleAddCity.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.getPlacesList = this.getPlacesList.bind(this);
    this.resetPlaces = this.resetPlaces.bind(this);
    this.createPlacesArr = this.createPlacesArr.bind(this);
    this.resetAll = this.resetAll.bind(this);
  }
  /*Method that allows for cities in database to be brought up into this file. This list of cities are brought up at the start of the render because of the componentDidMount method */
  getCityList(){
    fetch(`/api/cities/${this.state.continents}/${this.state.typeOfExperience}`)
    .then(res => res.json())
    .then(res =>{
      var cityList = res.map(result => result.city_name);
      this.setState({cityList:cityList});
      console.log(this.state.cityList);
    })
  }
  /*Method that gets weather information from the OpenWeatherMap API*/
  getWeather(city){
    fetch(`/api/weather/${city}`)
    .then(res => res.json())
    .then(weather => {
      console.log(weather);
      this.setState({weather:weather});
    })
  }
  /*Method that gets place list and place description from database*/
  getPlacesList(){
    fetch(`/api/cities/${this.state.cityName}`)
    .then(res => res.json())
    .then(res =>{
      var placesList = res.map(result => result.places);
      var placesDescription = res.map(result => result.places_description);
      this.setState({placesList:placesList, placesDescription:placesDescription});
      console.log(this.state.placesList);
      console.log(this.state.placesDescription);
    })
  }
  /*Method that joins lists of places and descriptions into 1 combined array*/
  createPlacesArr(){
    let newArr = [];
    let arrPlaces = this.state.placesList;
    let arrDescription = this.state.placesDescription;
    while (arrPlaces.length > 0){
      var arrPlacesFirst = arrPlaces.shift();
      var arrDescriptionFirst = arrDescription.shift();
      var tempArr = [arrPlacesFirst,arrDescriptionFirst];
      newArr.push(tempArr);
    }
    this.setState({placesComplete:newArr});
  }
   /*Methods that deal with clicking buttons or resetting States*/
  chooseContinent(continent){
    this.setState({continents:continentSelection[continent]});
  }
  chooseExperience(experience){
    this.setState({typeOfExperience:experienceSelection[experience]});
  }
  chooseCity(cityName){
    this.setState({cityName:cityName});
  }
  chooseDecisions(decision){
    this.setState({decisions:decision});
  }
  resetPlaces(){
    this.setState({placesList:[]});
  }
  resetAll(){
    this.setState({
      continents:'',
      typeOfExperience: '',
      weather: null,
      cityList: [],
      cityName: '',
      placesList:[],
      placesDescription:[],
      placesComplete: [],
      decisions:null
    });
  }
  handleInputChange(event){
    var newCityName = event.target.value;
    this.setState({cityName:newCityName});
  }
  handleAddCity(){
    fetch('/api/cities',{
      method:'post',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({city:this.state.cityName})
    })
    .then(res => res.json())
    .then(res => {
      this.getCityList();
      this.setState({cityName:''});
    });
  }

  render(){
    return (
      <div className="App">
        <header > 
          <div className='Page-Welcome'>
            <p>Want to explore the world?</p>
          </div>
          <div className="App-header">
            <img src={Logo} className='logo' alt="Seeking Adventure Logo" />
            <h1>Seeking Adventure</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet facilisis magna etiam tempor. Sit amet volutpat consequat mauris. Egestas purus viverra accumsan in. Eu non diam phasellus vestibulum lorem sed risus ultricies. Amet justo donec enim diam vulputate ut. </p>
          </div>
        </header>
        <body className='container-fluid'>
          {/*Step #1 - Selects Region*/}
          <div className='map-select row row-cols-1'>
            <MapSelect className='col' chooseContinent={this.chooseContinent} selectedContinent={this.state.continents}/>
          </div>
          {/*Step #2 - Selects Experience*/}
          <div className='row row-cols-1'>
            {this.state.continents ? <Experience className='col' chooseExperience={this.chooseExperience} selectedExperience={this.state.typeOfExperience}/> : <div className='next-step-text container-fluid'><p >You must select an Region before moving forward</p></div>}
          </div>
          {/*Step #3 - Selects City and Shows Weather*/}
          {this.state.continents && <div className='row row-cols-1'>
            {this.state.typeOfExperience ? <CitySelect className='col' getCities={this.getCityList} cityList={this.state.cityList} getWeather={this.getWeather} weather={this.state.weather} selectedCity={this.state.cityName} chooseCity={this.chooseCity} resetPlaces={this.resetPlaces}/> : <div className='next-step-text container-fluid'><p>You must select an Experience before moving forward</p></div>}
          </div>}
          {/*Step #4 - Shows Places*/}
          {this.state.typeOfExperience && <div className='row row-cols-1'>
            {this.state.cityName ? <Places className='col' placesList={this.state.placesList} getPlaces={this.getPlacesList } createPlacesArr={this.createPlacesArr} placesComplete={this.state.placesComplete}/> : <div className='next-step-text container-fluid'><p>You must select a City before moving forward</p>
              </div>}
            </div>}
          {/*Step #5 - Decision Time*/}
          {this.state.placesList.length > 0 && <div className='row row-cols-1'>
            {this.state.placesComplete.length > 0 ? <Decision className='col' cityName={this.state.cityName} chooseDecision={this.chooseDecisions} decision={this.state.decisions} continent={this.state.continents} resetAll={this.resetAll}/> : <div className='next-step-text container-fluid'><p>You must review the places for the selected city before moving forward</p>
              </div>}
            </div>}

          {/*Adding New City Name to Database Below
          <div className='addCityDatabase'>
            <input placeholder="New city name..." value={this.state.cityName} onChange={this.handleInputChange} />
            <button onClick={this.handleAddCity}>Add City to Database</button>
          </div> */}
          
        </body>
        <footer className='footer'>
          <div className="quote text-right p-5">
            <p className='mb-0'>Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.</p>
            <p className="blockquote-footer">Anthony Bourdain</p>
          </div>
        </footer>  
      </div>
    );
  }
}

export default App;
