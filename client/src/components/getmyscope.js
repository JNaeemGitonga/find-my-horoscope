import React from 'react';

import GetHoroscope from './get-button';
import GetAnotherHoroscope from './get-another-button';
import HoroscopeList from './horoscopelist';
import PickSign from './pick-sign';
import './getmyscope.css';
import Navbar from './nav-bar';



export default class GetMyScope extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            horoscope: "",
            quote: [],
            zodiac: '',
            links:[
              {
                    text: 'HOME',
                    href: '#'
                },{
                    text: "BACK",
                    href: "#"
                }
                
            ]
        }
      
    this.setZodiac=this.setZodiac.bind(this);
    
    }
  
  setZodiac(sign){
    this.setState({zodiac:sign.target.value})
  } 
  getHeader(){
    //your code goes here 
  }
  
  
  //TO DRY UP CODE MAKE STATE OBJECT WITH VALUES YOU WANT TO DISPLAY
    render() {
      if(!this.state.clicked){
         return (
          <div className="navbar-only">
           <Navbar links={this.state.links}/>
             <div className="container"> 
               <div className="info">
                <h1>What is Your Horoscope?</h1>
                <PickSign zodiac={this.state.zodiac}  onChange={this.setZodiac}/>
                <GetHoroscope onClick={() => this.setState({clicked:true})}/> 
              </div>
             </div>
          </div>
        ) 
      } 
      return (
        <div className="navbar-only">
         <Navbar links={this.state.links}/>
              <div className="container">
                <div className="info">
                  <h1>Here&#39;​s Your Horoscope!</h1>
                  <HoroscopeList horoscopes={this.props.horoscopes} zodiac={this.state.zodiac}/>
                  <PickSign zodiac={this.state.zodiac} onChange={this.setZodiac}/>
                  <GetAnotherHoroscope onClick={() => this.setState({clicked:true})} />
                </div>
              </div>
       </div>
      )

    }
  }

