import React from 'react';
import './Experience.css';
import {architecture,historic,relaxing,scenic} from './ExperienceImages';

let experience = '';

class Experience extends React.Component {
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
        this.chooseContinentInput = this.chooseExperienceInput.bind(this);
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
    chooseExperienceInput(event){
        return experience = event.target.value;
    }
    handleClick(){
        this.props.chooseExperience(experience);
    }
    handleClickReset(){
        this.props.chooseExperience('');
    }
    render(){
        return (
            <div className='experience-select-div container-fluid'>
                <div className='step-title row row-cols-1 justify-content-center'>
                    <h3>Step #2</h3>
                </div>
                <div className='component-title row row-cols-1 justify-content-center'>
                        <h2>What type of Experience would you like to have?</h2>
                </div>
                <div className='Experience_Search'>
                    <p>Now, let’s select what type of experience you would like to have in that region of the world. Are you looking for something scenic or a place to relax? Perhaps, you are looking for something to marvel about or get immersed in history. Select your interest from the buttons below. </p>
                    <form className="Form_Experiences" onClick={this.chooseExperienceInput}>
                        <ul className='List_Experiences row' id='List_Experiences'>
                            <li className='col-6 col-md-3'>
                                <div className='List_Icon'>
                                    <div onMouseEnter={()=>this.handleMouseEnter('Architectural')} onMouseLeave={this.handleMouseLeave} className={`${this.state.clickState ==='Architectural'? "active-icon" : ""} Architectural${this.state.hoverState ==='Architectural'? "IconHover" : ""} icon`}>
                                        {architecture}
                                    </div>
                                </div>
                                <input type="radio" name="experiences" value="Architectural" id="Btn_Architectural" className='input-test'/> 
                                <label onClick={()=>this.handleClickState('Architectural')} onMouseEnter={()=>this.handleMouseEnter('Architectural')} onMouseLeave={this.handleMouseLeave}for="Btn_Architectural" id="L_Architectural" className={`${this.state.clickState ==='Architectural'? "active" : ""} Architectural${this.state.hoverState ==='Architectural'? "Hover" : ""}`}>Architectural</label>      
                            </li>
                            <li className='col-6 col-md-3'>
                                <div className='List_Icon'>
                                    <div onMouseEnter={()=>this.handleMouseEnter('Historic')} onMouseLeave={this.handleMouseLeave} className={`${this.state.clickState ==='Historic'? "active-icon" : ""} Historic${this.state.hoverState ==='Historic'? "IconHover" : ""} icon`}>
                                        {historic}
                                    </div>
                                </div>
                                <input type="radio" name="experiences" value="Historic" id="Btn_Historic" className='input-test'/> 
                                <label onClick={()=>this.handleClickState('Historic')} onMouseEnter={()=>this.handleMouseEnter('Historic')} onMouseLeave={this.handleMouseLeave}for="Btn_Historic" id="L_Historic" className={`${this.state.clickState ==='Historic'? "active" : ""} Historic${this.state.hoverState ==='Historic'? "Hover" : ""}`}>Historic</label>      
                            </li>
                            <li className='col-6 col-md-3'>
                                <div className='List_Icon'>
                                    <div onMouseEnter={()=>this.handleMouseEnter('Relaxing')} onMouseLeave={this.handleMouseLeave} className={`${this.state.clickState ==='Relaxing'? "active-icon" : ""} Relaxing${this.state.hoverState ==='Relaxing'? "IconHover" : ""} icon`}>
                                        {relaxing}
                                    </div>
                                </div>
                                <input type="radio" name="experiences" value="Relaxing" id="Btn_Relaxing" className='input-test'/> 
                                <label onClick={()=>this.handleClickState('Relaxing')} onMouseEnter={()=>this.handleMouseEnter('Relaxing')} onMouseLeave={this.handleMouseLeave}for="Btn_Relaxing" id="L_Relaxing" className={`${this.state.clickState ==='Relaxing'? "active" : ""} Relaxing${this.state.hoverState ==='Relaxing'? "Hover" : ""}`}>Relaxing</label>      
                            </li>
                            <li className='col-6 col-md-3'>
                                <div className='List_Icon'>
                                    <div onMouseEnter={()=>this.handleMouseEnter('Scenic')} onMouseLeave={this.handleMouseLeave} className={`${this.state.clickState ==='Scenic'? "active-icon" : ""} Scenic${this.state.hoverState ==='Scenic'? "IconHover" : ""} icon`}>
                                        {scenic}
                                    </div>
                                </div>
                                <input type="radio" name="experiences" value="Scenic" id="Btn_Scenic" className='input-test'/> 
                                <label onClick={()=>this.handleClickState('Scenic')} onMouseEnter={()=>this.handleMouseEnter('Scenic')} onMouseLeave={this.handleMouseLeave}for="Btn_Scenic" id="L_Scenic" className={`${this.state.clickState ==='Scenic'? "active" : ""} Scenic${this.state.hoverState ==='Scenic'? "Hover" : ""}`}>Scenic</label>      
                            </li>
                        </ul>
                    </form>
                    <button className="input-button"  id="btn_submit" onClick={this.handleClick} >Make Your Selection</button>
                    <button className="input-button"  id="btn_reset" onClick={this.handleClickReset} >Reset</button>
                    <div id="disp" >
                        {this.props.selectedExperience && <p>You selected <span>{this.props.selectedExperience}</span> as your destination!</p>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;