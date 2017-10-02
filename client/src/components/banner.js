import React from 'react';
import './getmyscope.css';
import Navbar from './nav-bar';
import solar from './solar-eclipse_1024.jpg';
import './login-page.css';


export default class Banner extends React.Component {
    render() {
        return (
            <div className="navbar-only">
            <Navbar />
              <div className="container"> 
                 <img src={solar} alt='eclipsed moon'/>
                <div className="info">
                    
                 <h1>What is Your Horoscope?</h1>
               </div>
              </div>
               
                
            </div>
        )
    }
}

