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


export class GetMyScope extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mar:0
		} 
	}

	componentDidMount() {
		if (this.props.currentUser) return this.setState({mar:'100px'})
	}
    render() {
      if(this.props.clicked === false){
         return (
          <div className="navbar-only">
           <Navbar />
             	<div className="container"> 
					<img src={solar} style={{marginBottom:this.state.mar}}alt='eclispsed moon'/>
					<div className="info">
					<h1 className='scope-header one'>What is Your Horoscope?</h1>
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
                    
					<h1 className='scope-header'>Here&#39;​s Your Horoscope!</h1>
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
	currentUser:state.zodiacReducer.currentUser,
   

  })

  export default connect(mapStateToProps)(GetMyScope);