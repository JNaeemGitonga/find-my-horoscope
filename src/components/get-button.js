import React from 'react';
import './get-button.css';

export default function GetHoroscope(props) {

    return (
      
      <div className="get-button">
        <button onClick={e=>props.onClick(e)}>Get My Horoscope</button>
      </div>
    )
}

