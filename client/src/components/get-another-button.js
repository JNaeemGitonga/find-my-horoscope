import React from 'react';
import './get-another-button.css'
import {connect} from 'react-redux';
import{scopeOfDay, fetchHoroscopes} from '../actions'

export class GetAnotherHoroscope extends React.Component {
    componentWillMount(){
        this.props.dispatch(fetchHoroscopes());
    }
    getAnotherHoroscope(e){
        e.preventDefault();
        this.props.dispatch(scopeOfDay());
    }
    render(){
        return (
            <div className="get-another-button">
                <button onClick={(e=> this.getAnotherHoroscope(e))}>Get Another Horoscope</button>
            </div>
        )

    }
    
}
const mapStateToProps = state => ({
    horoscopes: state.horoscopes,
})
export default connect(mapStateToProps)(GetAnotherHoroscope)