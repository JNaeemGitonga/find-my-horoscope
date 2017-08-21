import React from 'react';
import './horoscopelist.css';
import {connect} from 'react-redux';
import {scopeOfDay} from '../actions';


export class HoroscopeList extends React.Component {
  
    render(){
        let arr = this.props.scopeOfDay
        if (this.props.horoscopes){
          console.log(this.props.scopeOfDay)
            
            return (
            <div className="horoscope-list" aria-live="polite">
                   
                        <h2>{this.props.sign.toUpperCase()}</h2>
                        <h3>{arr[Math.floor(Math.random()*arr.length)]}</h3>
                
            </div>
        );
        }
        
    }
}

const mapStateToProps = state => ({
   
    horoscopes:state.horoscopes,
    scopeOfDay:state.scopeOfDay,
    sign:state.sign
})
export default connect(mapStateToProps)(HoroscopeList)

