import React from 'react';
import {connect} from 'react-redux';
import GetHoroscope from './get-button';
import GetAnotherHoroscope from './get-another-button';
import HoroscopeList from './horoscopelist';
import PickSign from './pick-sign';
// import CommentsBox from './comments-box'
import './getmyscope.css';
import Navbar from './nav-bar';
import solar from './solar-eclipse_1024.jpg';
import {fetchHoroscopes,logon} from '../actions';
import * as Cookies from 'js-cookie';


export class GetMyScope extends React.Component {
	componentDidMount() {
			let accessToken = Cookies.get('accessToken');
			if (accessToken) {
				console.log(accessToken)
				this.props.dispatch(logon())
			}
	}
    render() {
      if(this.props.clicked === false){
         return (
          <div className="navbar-only">
           <Navbar />
             	<div className="container"> 
					<img src={solar} alt='eclispsed moon'/>
					<div className="info">
					
						<h1>What is Your Horoscope?</h1>
						<PickSign />
						<GetHoroscope /> 
					</div>
             	</div>
          </div>
        ) 
      } 
      return (
        <div className="navbar-only">
         <Navbar />
            <div className="container">
              	<img src={solar} alt='eclipsed moon'/>
                <div className="info">
                    
					<h1>Here&#39;​s Your Horoscope!</h1>
					<HoroscopeList  />
					<PickSign  />
					<GetAnotherHoroscope  />
                </div>
            </div>
       </div>
      )

    }
}

 
  const mapStateToProps = state => ({
    clicked: state.zodiacReducer.clicked,
    sign: state.zodiacReducer.sign,
   

  })

  export default connect(mapStateToProps)(GetMyScope);