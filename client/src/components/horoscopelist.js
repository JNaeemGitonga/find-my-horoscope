import React from 'react';
import './horoscopelist.css';
import {connect} from 'react-redux'


export class HoroscopeList extends React.Component {
 
render(){
        const horoscopes = this.props.signsAndQuotes.map((horoscope,index)=> {
            
            for(let sign in horoscope){
                if(this.props.zodiac === horoscope.sign){
                return (
                    <div key={index}>                                     
                        <h3>{horoscope.sign.toUpperCase()}</h3>
                        <h4>{horoscope.quotes[Math.floor(Math.random()*horoscope.quotes.length)]}</h4>
                    </div>
                
                ); 
            }
            
            }

        })
console.log('these are your horoscopes ===>',this.props.horoscope)
        return (
            <div className="horoscope-list" aria-live="polite">
                {horoscopes}
            </div>
        );
        
    }
}
const mapStateToProps = state => ({
    signsAndQuotes: state.signsAndQuotes,
    zodiac: state.zodiac
})

export default connect(mapStateToProps)(HoroscopeList)