import React from 'react';
import './horoscopelist.css';

export default function HoroscopeList(props){
    const horoscopes=props.horoscopes.map((horoscope,index)=> {
      
      for(let sign in horoscope){
        if(props.zodiac !== "" && horoscope.sign === props.zodiac){
          return (
              <div key={index}>                                     
                  <h3>{horoscope.sign.toUpperCase()}</h3>
                  <h4>{horoscope.quotes[Math.floor(Math.random()*horoscope.quotes.length)]}</h4>
              </div>
        
         ); 
      }
     
    }

    })
    return (
        <div className="horoscope-list" aria-live="polite">
            {horoscopes}
        </div>
    );
}