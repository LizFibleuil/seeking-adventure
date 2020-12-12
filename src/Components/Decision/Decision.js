import React from 'react';
import './Decision.css';
import {NorthAmerica,SouthAmerica,Europe,Africa,Asia,Oceania} from './WorldMapFigures';

let decision;
let regionMap;
class Decision extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clickState:false
        };
        this.chooseDecisionInput = this.chooseDecisionInput.bind(this);
        this.handleClickState = this.handleClickState.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickReset = this.handleClickReset.bind(this);
    }
    componentDidMount(){
        if(this.props.continent === 'North America'){
            return regionMap = NorthAmerica;
        }
        else if(this.props.continent === 'South America'){
            return regionMap = SouthAmerica;
        }
        else if(this.props.continent === 'Europe'){
            return regionMap = Europe;
        }
        else if(this.props.continent === 'Africa'){
            return regionMap = Africa;
        }
        else if(this.props.continent === 'Asia'){
            return regionMap = Asia;
        }
        else if (this.props.continent === 'Oceania'){
            return regionMap = Oceania;
        }
    }
    chooseDecisionInput(event){
        return decision = event.target.value;
    }
    handleClickState(id){
        this.setState({clickState:id});
    }
    handleClick(){
        this.props.chooseDecision(decision);
    }
    handleClickReset(){
        this.props.resetAll();
        window.scrollTo({
            top: 500,
            behavior: 'smooth',
          })
    }
    render(){
        return(
            <div className='city-select-div container-fluid'>
                <div className='step-title-v2 row row-cols-1 justify-content-center'>
                    <h3>Step #5</h3>
                </div>
                <div className='component-title-v2 row row-cols-1 justify-content-center'>
                    <h2>Will you go?</h2>
                </div>
                <div className='Decision_Select'>
                    <div id='disp-decision'>
                        <p >You have selected <span>{this.props.cityName}</span> as your destination, are you sure you want to go there?</p>
                        <form className='Form_Decision' onClick={this.chooseDecisionInput}>
                            <ul className='List_Decision'>
                                <li>
                                    <input type="radio" name="decision" value="Yes" id="Btn_Yes" className='decision'/> 
                                    <label for='Btn_Yes' className={`${this.state.clickState ==='Yes'? "active-decision" : ""} decision-label`} onClick={()=>this.handleClickState('Yes')} >Yes! Can't Wait!</label>
                                </li>
                                <li>
                                    <input type="radio" name="decision" value="No" id="Btn_No" className='decision'/> 
                                    <label for='Btn_No' className={`${this.state.clickState ==='No'? "active-decision" : ""} decision-label`} onClick={()=>this.handleClickState('No')} >No, I need a new suggestion</label>
                                </li>
                            </ul>
                        </form>
                        <button className="input-decisions"  id="btn_decisions" onClick={this.handleClick} >Ready to Choose!</button>
                    </div>
                    {this.props.decision && <div className='row row-cols-1'>
                        {this.props.decision === 'Yes' ? <div className='col justify-content-center'>
                            <p className='pack'>Pack your bags! You can count <span>{this.props.continent}</span> off your bucket list!</p>
                            <div className='region-map'>
                                {regionMap}
                                <p>{this.props.continent}</p>
                            </div>
                            <p className='pack'>Let's start booking flights and do some research. See below for some helpful links:</p>
                            <div>
                                <ul className='List_Links'>
                                    <li><a href='https://www.kayak.com/' target="_blank" rel="noopener noreferrer">Kayak - Booking</a></li>
                                    <li><a href='https://www.tripadvisor.com/' target="_blank" rel="noopener noreferrer">Trip Advisor - Research</a></li>
                                    <li><a href='https://www.expedia.com/' target="_blank" rel="noopener noreferrer">Expedia - Planning</a></li>
                                </ul>
                            </div>
                            <p className='final-text'>Happy Travels!</p>
                        </div> : <div>
                            <p className='pack'>Would you like to start from scratch?</p>
                            <button className="input-button"  id="btn_reset-all" onClick={this.handleClickReset} >Let's Start Again</button>
                        </div>}
                        </div>}
                </div>
            </div>
        )
    }
}

export default Decision;