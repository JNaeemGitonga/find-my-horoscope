import React from 'react';
import './get-another-button.css'


export default function GetAnotherHoroscope(props) {
    return (
        <div className="get-another-button">
          <button onClick={e=>props.onClick(e)}>Get Another Horoscope</button>
        </div>
    )
}

