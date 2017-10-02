import React from 'react';
import './horoscopelist.css';
import {connect} from 'react-redux';

export class HoroscopeList extends React.Component {
    render(){
        let x = this.props;
        let arr = x.scopeOfDay
        if (x.horoscopes){
            return (
            <div className="horoscope-list" aria-live="polite">
                <h2>{x.sign.toUpperCase()}</h2>
                <h3>{arr[Math.floor(Math.random()*arr.length)]}</h3>
            </div>
        );
        }
        
    }
}
const mapStateToProps = state => ({
    horoscopes:state.zodiacReducer.horoscopes,
    scopeOfDay:state.zodiacReducer.scopeOfDay,
    sign:state.zodiacReducer.sign,
    name:state.zodiacReducer.name
})
export default connect(mapStateToProps)(HoroscopeList)