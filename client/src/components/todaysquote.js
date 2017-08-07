import React from 'react';
import './horoscopelist.css';
import HoroscopeList from './horoscopelist'
import {connect} from 'react-redux'


export class TodaysQuote extends React.Component {
   
 
    render(){
        
          return (
                <div className="horoscope-list" aria-live="polite">
                   <HoroscopeList />
                </div>
            );
            
    }

    
}