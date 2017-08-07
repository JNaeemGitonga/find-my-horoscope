import React from 'react';
import './get-another-button.css'
import {connect} from 'react-redux';
import{fetchHoroscopes} from '../actions'

export class GetAnotherHoroscope extends React.Component {
    getAnotherHoroscope(){
        // e.preventDefualt();
        this.props.dispatch(fetchHoroscopes());
    }

    render(){
        return (
                <div className="get-another-button">
                <button onClick={e=> this.getAnotherHoroscope(e)}>Get Another Horoscope</button>
                </div>
        )

    }
    
}
const mapStateToProps = state => ({
 
    horoscopes: state.horoscopes,
    
})
export default connect(mapStateToProps)(GetAnotherHoroscope)