import React from 'react';
import './get-button.css';
import {connect} from 'react-redux';
import {fetchHoroscopes, getButtonClicked, pickZodiac} from '../actions';
import {value} from './pick-sign'

export class GetHoroscope extends React.Component {

    getHoroscope(e){
      e.preventDefault();
      
      this.props.dispatch(fetchHoroscopes())
      this.props.dispatch(getButtonClicked())
      console.log('Props from GetHoroscope', this.props)
      // this.props.dispatch(pickZodiac(value))
    }

  render(){
      return (
        
        <div className="get-button">
          <button onClick={e=>this.getHoroscope(e)}>Get My Horoscope</button>
        </div>
      )
  }
}

const mapStateToProps = state => ({
  clicked: state.clicked,
  zodiac: state.zodiac,
  horoscope: state.horoscope,
  signsAndQuotes: state.signsAndQuotes
})
export default connect(mapStateToProps)(GetHoroscope)