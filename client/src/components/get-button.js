import React from 'react';
import './get-button.css';
import {connect} from 'react-redux';
import {fetchHoroscopes, getButtonClicked,scopeOfDay,fetchHoroscopes2} from '../actions';

export class GetHoroscope extends React.Component {
    
    componentWillMount(){
      if (this.props.jwt) return this.props.dispatch(fetchHoroscopes2( ));
      return this.props.dispatch(fetchHoroscopes())
    }
    getHoroscope(){
      this.props.dispatch(getButtonClicked());
      // window.setTimeout(() => this.props.dispatch(switchBack()), 5000)
      this.props.dispatch(scopeOfDay())
    }
 
  render(){
    
      return (
        <div className="get-button">
          <button onClick={() =>{
            if (this.props.sign === ''){
              return 
               
            }this.getHoroscope()} }>Get My Horoscope</button>
        </div>
      )
  }
}

const mapStateToProps = state => ({
  clicked: state.zodiacReducer.clicked,
  sign:state.zodiacReducer.sign,
  jwt:state.zodiacReducer.jwt,
})
export default connect(mapStateToProps)(GetHoroscope) 