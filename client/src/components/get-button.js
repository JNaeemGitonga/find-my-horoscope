import React from 'react';
import './get-button.css';
import {connect} from 'react-redux';
import {fetchHoroscopes, getButtonClicked, pickZodiac, switchBack} from '../actions';

export class GetHoroscope extends React.Component {
    constructor(props){
      super(props)
      this.getHoroscope = this.getHoroscope.bind(this)
    }
    getHoroscope(){
      this.props.dispatch(fetchHoroscopes());
      this.props.dispatch(getButtonClicked());
      window.setTimeout(() => this.props.dispatch(switchBack()), 5000)
    }

  render(){
      return (
        <div className="get-button">
          <button onClick={this.getHoroscope}>Get My Horoscope</button>
        </div>
      )
  }
}

const mapStateToProps = state => ({
  clicked: state.clicked,
  sign:state.sign,
  horoscopes: state.horoscopes,
  
})
export default connect(mapStateToProps)(GetHoroscope)