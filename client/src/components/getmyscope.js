import React from 'react';
import {connect} from 'react-redux';
import GetHoroscope from './get-button';
import GetAnotherHoroscope from './get-another-button';
import HoroscopeList from './horoscopelist';
import PickSign from './pick-sign';
import './getmyscope.css';
import Navbar from './nav-bar';
import {fetchHoroscopes} from '../actions';


export class GetMyScope extends React.Component {
   componentDidMount(){
     this.props.dispatch(fetchHoroscopes());
   }
  
  
    render() {
      if(this.props.clicked === false){
         return (
          <div className="navbar-only">
           <Navbar />
             <div className="container"> 
               <div className="info">
                <h1>What is Your Horoscope?</h1>
                <PickSign />
                <GetHoroscope /> 
              </div>
             </div>
          </div>
        ) 
      } 
      // console.log('from GetMyScope', this.props)
      return (
        <div className="navbar-only">
         <Navbar />
              <div className="container">
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
    clicked: state.clicked,
    sign: state.sign,
    horoscopes: state.horoscopes,
   

  })

  export default connect(mapStateToProps)(GetMyScope);

//export default class GetMyScope extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         clicked: false,
    //         horoscope: "",
    //         quote: [],
    //         zodiac: '',
    //         links:[
    //           {
    //                 text: 'HOME',
    //                 href: '#'
    //             },{
    //                 text: "BACK",
    //                 href: "#"
    //             }
                
    //         ]
    //     }
      
    // this.setZodiac=this.setZodiac.bind(this);
    
    // }
