import React from 'react';
import CoverImage from './Cover-Image.jpg';
import Logo from './seeking-adventure-icon.png'
import './App.css';
import MapSelect from '../MapSelect/MapSelect';

const continentSelection = {
  NorthAmerica:'North America',
  SouthAmerica: 'South America',
  Europe: 'Europe',
  Asia: 'Asia',
  Africa: 'Africa',
  Oceania: 'Oceania'
};

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //These are the continent results that are selected
      continents: ''
    };
    this.chooseContinent = this.chooseContinent.bind(this);
  }

  chooseContinent(continent){
    this.setState({continents:continentSelection[continent]});
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
          <div className='map-select row row-cols-1'>
            <MapSelect className='col' chooseContinent={this.chooseContinent} selectedContinent={this.state.continents}/>
          </div>
        </body>  
      </div>
    );
  }
}

export default App;
