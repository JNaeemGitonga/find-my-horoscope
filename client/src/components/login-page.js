import React from 'react';
import {connect} from 'react-redux';
import './getmyscope.css';
import Navbar from './nav-bar';
import solar from './solar-eclipse_1024.jpg';


export class LoginPage extends React.Component {
    render() {
    //   if(this.props.clicked === false){
         return (
        <div className='outter-container'>
            
          <div className="navbar-only">
           <Navbar />
             <div className="container"> 
                <img src={solar}/>
               <div className="info">
                <h1>What is Your Horoscope?</h1>
              </div>
             </div>
          </div>
        </div>
        ) 
    //   } 
    //   return (
    //     <div className="navbar-only">
    //      <Navbar />
    //           <div className="container">
    //           <img src={solar}/>
    //             <div className="info">
                    
    //               <h1>Here&#39;​s Your Horoscope!</h1>
    //               <HoroscopeList  />
    //               <PickSign  />
    //               <GetAnotherHoroscope  />
    //             </div>
    //           </div>
    //    </div>
    //   )

    }
}

 
  const mapStateToProps = state => ({
    clicked: state.clicked,
    sign: state.sign,
   

  })

  export default connect(mapStateToProps)(LoginPage);