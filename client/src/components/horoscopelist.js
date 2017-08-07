import React from 'react';
import './horoscopelist.css';
import {connect} from 'react-redux'


export class HoroscopeList extends React.Component {
   
    render(){
        let field  ;
        let d = new Date();
        let hrArr = this.props.horoscopes;
        let index;
        let zodiacObj;
        let zodiacSign;
        let todaysScope; // = hrArr.find(this.props.sign)
        for (let p = 0; p < hrArr.length; p++) {
            if (this.props.sign === hrArr[p].sign) {
                index = p
                zodiacObj = hrArr[p]
                zodiacSign = hrArr[p].sign
            }
        }
        let getScopesArr = hrArr[index].horoscopes;

        for (let a = 0; a < getScopesArr.length; a++) {
            console.log(getScopesArr)
            if ( getScopesArr[a].day === d.getDay()) {
                console.log(getScopesArr[a])
                    todaysScope = getScopesArr[a].quotes[Math.floor(Math.random()*getScopesArr[a].quotes.length)]
            }
        }

        console.log('index:',index, ' sign:', zodiacSign,' quote:', todaysScope)
        if (this.props.horoscopes){
           
            // field = hrArr.forEach((oneHoroscope,index) => {
            //     for (let sign in oneHoroscope){
            //         if (this.props.sign === oneHoroscope.sign){
            //             oneHoroscope.horoscopes.forEach((day, index2) => {
            //                 for (let date in day) {
            //                     if (parseInt(day.day) === d.getDay() ) {
            //                         // console.log('today  random quote', day.quotes[Math.floor(Math.random()*day.quotes.length)])
            //                         // console.log('one horoscope sign', oneHoroscope.sign)
            //                         return (
            //                             <div key={index2}>   
            //                                 <p>something rendered</p>                                  
            //                                 <h3>{oneHoroscope.sign.toUpperCase()}</h3>
            //                                 <h4>{day.quotes[Math.floor(Math.random()*day.quotes.length)]}</h4>
            //                             </div>
            //                         ); 
            //                     }
            //                 }
            //             });
            //         }
            //     }
            // });
        }
        // console.log(field)
       // console.log(this.props.horoscopes)
        return (
            <div className="horoscope-list" aria-live="polite">
                    {field}
                    <p>Look I work</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
   
    sign: state.sign,
    horoscopes:state.horoscopes
})

export default connect(mapStateToProps)(HoroscopeList)