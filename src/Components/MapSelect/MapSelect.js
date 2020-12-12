import React from 'react';
import './MapSelect.css';

let continent = '';

class MapSelect extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hoverState:false,
            clickState:false
        };
        this.handleClickState = this.handleClickState.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickReset = this.handleClickReset.bind(this);
        this.chooseContinentInput = this.chooseContinentInput.bind(this);
    }
    handleClickState(id){
        this.setState({clickState:id});
        this.setState({hoverState:false});
    }
    handleMouseEnter(id){
        this.setState({hoverState:id});
    }
    handleMouseLeave(){
        this.setState({hoverState:false});
    }
    chooseContinentInput(event){
        return continent = event.target.value;
    }
    handleClick(){
        this.props.chooseContinent(continent);
    }
    handleClickReset(){
        this.props.chooseContinent('');
    }
    render(){
        return (
        <div className='map-select-div container-fluid '>
            <div className='step-title row row-cols-1 justify-content-center'>
                    <h3>Step #1</h3>
            </div>
            <div className='component-title row row-cols-1 justify-content-center'>
                    <h2>Which region would you like to visit?</h2>
            </div>
            <div className='Continent_Search'>
                <p>The first step in our journey is to decide which region of the world you are more curious about. Below you will see the world map and the names of the regions associated with each continent. Select where you like to go from the buttons below.</p>
                <form className="Form_Continents" onClick={this.chooseContinentInput}>
                    <ul className='List_Continents' id='List_Continents'>
                        <li>
                            <input type="radio" name="continents" value="NorthAmerica" id="Btn_North" className='input-test'/> 
                            <label onClick={()=>this.handleClickState('North')} onMouseEnter={()=>this.handleMouseEnter('North')} onMouseLeave={this.handleMouseLeave}for="Btn_North" id="L_North_America" className={`${this.state.clickState ==='North'? "active" : ""} NorthAmerica${this.state.hoverState ==='North'? "Hover" : ""}`}>North America</label>
                        </li>
                        <li>
                            <input type="radio" name="continents" value="SouthAmerica" id="Btn_South" className='input-test'/> 
                            <label onClick={()=>this.handleClickState('South')} onMouseEnter={()=>this.handleMouseEnter('South')} onMouseLeave={this.handleMouseLeave}for="Btn_South" id="L_South_America" className={`${this.state.clickState ==='South'? "active" : ""} SouthAmerica${this.state.hoverState ==='South' ? "Hover" : ""}`}>South America</label>
                        </li>
                        <li>
                            <input type="radio" name="continents" value="Europe" id="Btn_Europe" className='input-test'/> 
                            <label onClick={()=>this.handleClickState('Europe')} onMouseEnter={()=>this.handleMouseEnter('Europe')} onMouseLeave={this.handleMouseLeave}for="Btn_Europe" id="L_Europe" className={`${this.state.clickState ==='Europe'? "active" : ""} Europe${this.state.hoverState ==='Europe' ? "Hover" : ""}`}>Europe</label>
                        </li>
                        <li>
                            <input type="radio" name="continents" value="Africa" id="Btn_Africa" className='input-test'/> 
                            <label onClick={()=>this.handleClickState('Africa')} onMouseEnter={()=>this.handleMouseEnter('Africa')} onMouseLeave={this.handleMouseLeave}for="Btn_Africa" id="L_Africa" className={`${this.state.clickState ==='Africa'? "active" : ""} Africa${this.state.hoverState ==='Africa' ? "Hover" : ""}`}>Africa</label>
                        </li>
                        <li>
                            <input type="radio" name="continents" value="Asia" id="Btn_Asia" className='input-test'/> 
                            <label onClick={()=>this.handleClickState('Asia')} onMouseEnter={()=>this.handleMouseEnter('Asia')} onMouseLeave={this.handleMouseLeave}for="Btn_Asia" id="L_Asia" className={`${this.state.clickState ==='Asia'? "active" : ""} Asia${this.state.hoverState ==='Asia' ? "Hover" : ""}`}>Asia</label>
                        </li>
                        <li>
                            <input type="radio" name="continents" value="Oceania" id="Btn_Oceania" className='input-test'/> 
                            <label onClick={()=>this.handleClickState('Oceania')} onMouseEnter={()=>this.handleMouseEnter('Oceania')} onMouseLeave={this.handleMouseLeave} for="Btn_Oceania" id="L_Oceania" className={`${this.state.clickState ==='Oceania'? "active" : ""} Oceania${this.state.hoverState ==='Oceania' ? "Hover" : ""}`}>Oceania</label>
                        </li>
                    </ul>            
                </form>
                <button className="input-button"  id="btn_submit"
                onClick={this.handleClick} >Make Your Selection</button>
                <button className="input-button"  id="btn_reset"
                onClick={this.handleClickReset} >Reset</button>
                <div id="disp" >
                    {this.props.selectedContinent && <p>You selected <span>{this.props.selectedContinent}</span> as your destination!</p>}
                </div>
            </div> 

            <div className='Map_Continents'>
                <svg xmlns="http://www.w3.org/2000/svg" width="998.9" height="497" viewBox="0 0 998.9 497">
                <title>Map of the Continents</title>
                <g id="Oceania" onMouseEnter={()=>this.handleMouseEnter('Oceania')} onMouseLeave={this.handleMouseLeave} className={`${this.state.clickState ==='Oceania'? "active" : ""} OceaniaMap${this.state.hoverState ==='Oceania' ? "Hover" : ""}`}>
                    <path id="Australia" d="M878,332.4c17.5,5.9,9.7,11.9,26.7,19.6,2.7-8,5.4-16,8-24.1,6.8,13.9,7.7,29.1,13.9,43.1,4.5,10,8.4,12.3,6.3,23-1.4,7.1-12.5,23.5-16.4,28.7-27.5,37-39.9-10.1-65.5-12.7-10.3-1-37,14.7-45.1,8.8-2.3-1.7-.8-36,.2-38.6C817.1,353,863.3,348.8,878,332.4Z"/>
                    <path id="Tasmania" d="M883,444a30.2,30.2,0,0,1,12.7-.6c-3.4,4-6.9,7.9-10.4,11.9C884.5,451.5,883.8,447.8,883,444Z"/>
                    <path id="NewZealandSouth" d="M956.9,451.3c4.2-1.9,8.5-3.6,12.8-5.4a20.7,20.7,0,0,1,2.8-.3l-6,6.2c-2.8,3-5.6,6.1-8.3,9.2a6.1,6.1,0,0,1-5.6,2.6c-3.9-.1-7.9,0-12.8,0,2.9-3,4.9-5.6,7.5-7.4"/>
                    <path id="NewZealandNorth" d="M998.9,432.2,981.6,445c-1.6-7,7.1-25.1,10.5-24.8"/>
                </g>
                <g id="Asia" onMouseEnter={()=>this.handleMouseEnter('Asia')} onMouseLeave={this.handleMouseLeave}className={`${this.state.clickState ==='Asia'? "active" : ""} AsiaMap${this.state.hoverState ==='Asia' ? "Hover" : ""}`}>
                    <path id="AsiaMainland" d="M760.7,224.5c-14.7,8.5-19.1-8.6-26.6-21-7.7,7-23.9,18.5-28.3,27.9-6.9,14.7,1.3,18.1-13,28.5-5.1-14.4-7.4-40.4-16.5-52.3l-7.4,2.2c-4.8-4.7-9.6-9.4-14.2-14.1-8.3-4.6-18.1-1.6-27.1-4.1s-18.2-11.4-28.4-14a110.6,110.6,0,0,0,5.7,17.7c3.2-.9,6.5-1.9,9.7-3,9.1,4.1,12.9,4.4,21.6,14.1-12.8,8.1-28,22.1-42.3,27-16.1,5.6-7.2,7.7-18.9-7.5s-22.9-36.9-23.8-53.8c-1.2-21.1,8.1-13.8-9.3-20.2-6-2.2-12.4,4.1-17.7-1.6-9-9.8.5-10.7,1.7-14.6s11.2-14.3,13.7-21.4l24.2,16c-2.8-23.3-5.8-46.6-7.7-70-.3-4.2-3.9-20.3.4-24.6s29.1,1.7,37.5,0c17.3-3.4,10.8-7.9,23.1-14.2,6.5-3.3,18.2,1.1,25.9-.6,23.5-5.2,27-11.9,52.5-6.7,40.8,8.4,81,15.9,122.5,19.8,30.7,2.9,63.8,2.2,93.9,8.4L898.8,51c16.1,12.3.4,16.9-13.4,16,1.5,3.2,15.7,29,13.9,30.7-19.9-12.2-24.4-12.1-23.6-35.8-18.4-5.8-42.4,8.9-52.8,21.9,14.8,7.9,30.2,11.1,29,32.9-.9,14.7-8.1,5.7-12.8,19.3-2,5.9,12.8,21.3,7.5,25.5-10.5-8.6-22.8-23.7-38.2-21.7,6.9,21.5,34.9,36.4,15.4,58.3-9.8,11.1-28.4,13.9-42,18.1,4.3,5.5,16,15.4,16.8,21.7,1.3,9.5-4.5,11.9-13.7,21-4-5.5-7.9-11.1-11.6-16.7-1,15.7,6,24.3,12.3,38.1C764.1,262.1,764.3,251.4,760.7,224.5Z"/>
                    <path id="IndonisiaNorth" d="M801,280.1c11.1-4,10.9-5.8,20.9-11.1,13.8-7.3,9.9-9.3,10.9,9.3.6,11.4-1.1,24-12.5,24.1C807.1,302.6,805.6,290.1,801,280.1Z"/>
                    <path id="MalasiaNorth" d="M756.7,272.8c7.6,4,47.1,20.1,31.3,37.4C776.9,302.8,762.9,284.8,756.7,272.8Z"/>
                    <path id="PhillipinesSouth" d="M860.1,261.1l-1.4-6.6c-10.4,2.2-11.7,7.4-3.8,15.5A12.9,12.9,0,0,0,860.1,261.1Z"/>
                    <path id="PhillipinesNorth" d="M857.9,247c-4.3,5.2-12.8,2.9-17-1.7-7.6-8.2-2.7-14.6,1.7-23.2l-.6,9.2"/>
                    <path id="IndonesiaSouth" d="M855.9,283.3c-3.6,14.4-10.9,8.7-7.2,25.1-3.8,1.9-6.4-1-7.8-8.8-1.8,4.6-3.6,9.2-5.3,13.8-2.8-.3-.2-20-.1-21.8"/>
                    <path id="MalasiaSouth" d="M819.1,317.5c-3.5-4.1-20.1-7.3-25.4-3.3"/>
                    <path id="PapuaNewGuinea" d="M877.9,292.6c20.7,10.1,35.2,7.7,56.2,21.6-7.4,6.7-2.2,9.4,2.6,17.7C931.9,328.8,868.8,301.6,877.9,292.6Z"/>
                    <path id="JapanSouth" d="M872.5,149.3c-2.2-9.1-4.2-18.2-6.1-27.4l19.2-2.2c-.9,9.6-3,11-12.3,11,.8,8.2,8.1,14.8,5,22.2-4.4,10.5-14.3,11.8-24,11.8C860.5,150.8,859.9,152.8,872.5,149.3Z"/>
                    <path id="JapanNorth" d="M870.3,112c-10.8,5.3-19.5-23-19.4-23.2Z"/>
                </g>
                <g id="Europe" onMouseEnter={()=>this.handleMouseEnter('Europe')} onMouseLeave={this.handleMouseLeave}className={`${this.state.clickState ==='Europe'? "active" : ""} EuropeMap${this.state.hoverState ==='Europe' ? "Hover" : ""}`}>
                    <path id="Ireland" d="M415.1,90c6.8-2.9,7.7-5.2,4.5-10.1"/>
                    <path id="EuropeMainland" d="M559,123.4l-22.4-15.6c-7.5,18.3-19.7,27.2-27,45.5-7.8-17.8-9.1-27.2-28.1-36.1,10.2,11.6,14.4,12,8.1,27.4-5.6-2.1-12.1-14-15.8-16.9-3.2-10.3-7.5-12-12.8-5.1-5.4,4.2-10.8,8.2-16.3,12.2-8.9,6.3-18.1,17.3-29.3,12.6s-5.7-14.7-6.2-27.5c6.2.4,12.5.9,18.7,1.6,1.2-15.1.3-16.8,11.4-26.1s16.4-8.1,22-22.7c14.1,21.1,41.6,2.9,58.1-9.6-17.3-1.9-15-3.4-16.5-20.5C494.6,52,489,65.1,482.8,75.9c-13-6.1-9.6-11-24.5-6.2-3.9-37.2,55.7-47.6,80.2-32.4C560.2,50.7,561.1,98.1,559,123.4Z"/>
                    <path id="UK" d="M439.9,90.2l-18,2.3c5.6-9.2,9-13.9,10.3-25.4C436.2,72.6,439.9,83.3,439.9,90.2Z"/>
                </g>
                <g id="South-America" data-name="South America" onMouseEnter={()=>this.handleMouseEnter('South')} onMouseLeave={this.handleMouseLeave} className={`${this.state.clickState ==='South'? "active" : ""} SouthAmericaMap${this.state.hoverState ==='South'? "Hover" : ""}`}>
                    <path id="SouthAmerica" d="M321.3,311.2c-6,18.7-10.3,43.1-21.1,59.2-4.4,6.6-12.6,9.6-16.9,16.8s-2.2,17.6-6.2,24.8c-6.7,12-24.2,15.6-29.9,27.9-9.3,20.2,4.7,41.2,14.2,57.1-15.3-7.2-34.7-25.3-45.8-37.4-14.2-15.6-8.5-36.3-8.1-57.9.3-16.1,2.1-27.1-3.9-40.1-8.3-18.2-26.1-34.4-31.9-54.7-3-10.7-3-33.4,7.7-42.3,6.8-5.6,41.1-4.7,50.6-4.8,17.2-.2,24.8,1.4,34,13.5,6.7,8.8,5,13.1,14.2,19.7C289.8,301.2,308.1,305.5,321.3,311.2Z"/>
                </g>
                <g id="Africa" onMouseEnter={()=>this.handleMouseEnter('Africa')} onMouseLeave={this.handleMouseLeave}className={`${this.state.clickState ==='Africa'? "active" : ""} AfricaMap${this.state.hoverState ==='Africa' ? "Hover" : ""}`}>
                    <path id="AfricaMainland" d="M382.4,265.1c-1.3-16.8-8.6-41.8-4-58.1,6.6-23.6,32.3-47.9,54.6-52.3,8.3-1.6,29-7.4,36.4-4.3,1.2,5,2.3,10,3.4,15l12.7,4.4c19.6,7.3,40.9-8.4,62.8,5.2-14.4,11-4.2,14.8,5,31.1,5.3,9.3,11.1,23.8,18,31.9,11.9,13.8,15.2,9.5,34,6.9-8.3,17.9-23.1,33.7-30.4,52-5.1,12.8.7,30.8-4.6,41.7-3.9,8.2-12.4,8.7-17.3,15.5-11.7,15.9-2.9,37.7-15.8,54.5-7.8,10.3-27,19.3-40.6,9.9-7.7-5.4-24.9-54.6-24.2-62.7.6-6.5,8.1-10.9,9-17,1.5-9.2-6.3-18.8-8.7-27.4s-2.2-23.1-6-30.9c-7.9-16.3.4-7.9-15.7-9.5C425.1,268.5,409.3,275.3,382.4,265.1Z"/>
                    <path id="Madagascar" d="M582.7,386.9c-11.4-27.5-5.7-36,20.3-49.8Z"/>
                </g>
                <g id="North-America" data-name="North America" onMouseEnter={()=>this.handleMouseEnter('North')} onMouseLeave={this.handleMouseLeave} className={`${this.state.clickState ==='North'? "active" : ""} NorthAmericaMap${this.state.hoverState ==='North'? "Hover" : ""}`}>
                    <path id="NorthAmericaMainland" d="M53.1,149.1c10.3-12.2,21-20.2,24-35.2,2.3-11.8,3.1-39.8-5.4-43.9C56.2,62.5,18.4,74.6,0,74.6c53.6-59.5,155.9-43.9,227-39-4.6,9.4-19.4,12.5-25.1,20.9-10.2,3.7-11.5,8.7-3.7,14.9,3.6,5,7.1,10,10.6,15.1,14-17.7,15.8-24,39.4-24,15,.1,14.6-2,23.8,9.6,6.3,8,9.8,20.6,14.1,29.7-44.8,16.4-90.9,38.2-106.7,86.4-14.1-12.7-31.1-22.2-50.8-9.5-9.9,6.4-5.8-.2-6.2,13.8-.2,7.5,3.8,17.5,5.3,25,18.2-8.3,19.4-12.1,29.4,6.7,6.8,12.7,11.9,26.1,17.9,39.2-11.1,1.1-44.8-29.2-53.1-34.6-21-13.7-28.3-26.5-46.1-42.9-2.6,2.8-3,16.3-3.6,18.6C64.4,186.7,59.2,167.5,53.1,149.1Z"/>
                    <path id="CanadaNorth04" d="M261.6,15.4l-5.5-8.5,44.4-5.6C301,3.5,265.2,14.1,261.6,15.4Z"/>
                    <path id="Nunavut" d="M247.1,30.6c-1,6.5-2.6,12.6-4.2,19a84.6,84.6,0,0,1-14.3-7.5A53.3,53.3,0,0,1,247.1,30.6Z"/>
                    <path id="CanadaNorth01" d="M151.8,21.8l34.6-2.2C175.1,31.4,163.9,28.3,151.8,21.8Z"/>
                    <path id="CanadaNorth03" d="M226.3,14.9h17.5c-4.9,3.1-21.5,6.8-19.9,15.4A22.8,22.8,0,0,1,226.3,14.9Z"/>
                    <path id="CanadaNorth02" d="M197.4,31.6,191,21.7l20.8,4C211.9,27.3,197.7,31.5,197.4,31.6Z"/>
                    <path id="NorthWesternTerritories" d="M271.5,22.7c-16.1-4.3-21.3-7.2-35.6,2.5,8.3,4,16.3,7.9,24.4,12.2-4.5,2.9-7,9-11.6,11.8,9.8,3.4,34.3,9.3,35.8-6.5C284.9,38,274.2,26.8,271.5,22.7Z"/>
                    <path id="Greenland" d="M418.9,0c-14.1,16.7-28.6,26.7-48.6,35.4S345.6,53.9,327.9,69c-12-14.9-10.9-17.4-12.1-34.2s-1.6-15.9-18-27.7C337.4,1.5,378.9,2.9,418.9,0Z"/>
                    <path id="Puerto_Rico" data-name="Puerto Rico" d="M210.2,217.8c-4.9-6.7-10-6.8-15.2-.4"/>
                    <path id="Cuba" d="M165.1,205.6l-5.5-1.6c9.4-2.4,26.2-4.2,31.3,7.8l-8.6-2.6"/>
                </g>
                </svg>
            </div>
        </div>);
    }
}

export default MapSelect;