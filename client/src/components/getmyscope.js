import React from 'react';
import {connect} from 'react-redux';
import GetHoroscope from './get-button';
import GetAnotherHoroscope from './get-another-button';
import HoroscopeList from './horoscopelist';
import PickSign from './pick-sign';
import './getmyscope.css';
import Navbar from './nav-bar';
import {fetchHoroscopes} from '../actions';
import solar from './solar-eclipse_1024.jpg';


export class GetMyScope extends React.Component {
    render() {
      if(this.props.clicked === false){
         return (
          <div className="navbar-only">
           <Navbar />
             <div className="container"> 
                <img src={solar}/>
               <div className="info">
                   
                <h1>What is Your Horoscope?</h1>
                <PickSign />
                <GetHoroscope /> 
              </div>
             </div>
          </div>
        ) 
      } 
      return (
        <div className="navbar-only">
         <Navbar />
              <div className="container">
              <img src={solar}/>
                <div className="info">
                    
                  <h1>Here&#39;​s Your Horoscope!</h1>
                  <HoroscopeList  />
                  <PickSign  />
                  <GetAnotherHoroscope  />
                </div>
              </div>
       </div>
      )

    }
}

 
  const mapStateToProps = state => ({
    clicked: state.clicked,
    sign: state.sign,
   

  })

  export default connect(mapStateToProps)(GetMyScope);