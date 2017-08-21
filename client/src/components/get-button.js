import React from 'react';
import './get-button.css';
import {connect} from 'react-redux';
import {fetchHoroscopes, getButtonClicked, switchBack, scopeOfDay} from '../actions';

export class GetHoroscope extends React.Component {
    
    componentWillMount(){
      this.props.dispatch(fetchHoroscopes());
    }
    getHoroscope(){
      this.props.dispatch(getButtonClicked());
      // window.setTimeout(() => this.props.dispatch(switchBack()), 5000)
      this.props.dispatch(scopeOfDay())
    }

  render(){
      return (
        <div className="get-button">
          <button onClick={() => this.getHoroscope()}>Get My Horoscope</button>
        </div>
      )
  }
}

const mapStateToProps = state => ({
  clicked: state.clicked,
})
export default connect(mapStateToProps)(GetHoroscope)