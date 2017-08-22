import React from 'react';
import {connect} from 'react-redux';
import './getmyscope.css';
import Navbar from './nav-bar';
import solar from './solar-eclipse_1024.jpg';
import './login-page.css';


export default class LoginPage extends React.Component {
    render() {
        return (
            <div className="navbar-only">
            <Navbar />
              <div className="container"> 
                 <img src={solar}/>
                <div className="info">
                    
                 <h1>What is Your Horoscope?</h1>
               </div>
              </div>
                <div className='login-box'>
                    <a href={'/api/auth/facebook'}><button className='login-button'>Login with Facebook</button></a>
                </div>
                <div className='about-us'>
                    <h2 className='about-heading'>About Us...</h2>
                    <div className='about-container'>
                        <p className='aboutUs'>Something fun/funny to help get you through your day. Not so much a horoscope; but rather,
                            some motivating or funny phrases and quotes special to you!
                        </p>
                    </div>
                    <h2 className='come-heading'>WHAT AWAITS YOU TODAY?</h2>
                </div>
            </div>
        )
    }
}

