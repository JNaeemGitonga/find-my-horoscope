import React from 'react';
import './pick-sign.css';
import {connect} from 'react-redux';
import {pickZodiac} from '../actions'

export class PickSign extends React.Component{

  pickZodiac(e){
    e.preventDefault();
    const value = this.input.value;
    console.log("this the value from PickSign", value, this.props)
    this.props.dispatch(pickZodiac( value))
    console.log("props from PickSign", this.props)
    return value

  }
  render(){
    return (
      <form onChange={e => this.pickZodiac(e)}>
        <select ref={input => this.input = input}>
            <option value="">Select Your Sign</option>  
            <option value="aries">Aries</option>
            <option value="aquarius">Aquarius</option>
            <option value="cancer">Cancer</option>
            <option value="capricorn">Capricorn</option>
            <option value="gemini">Gemini</option>
            <option value="leo">Leo</option>
            <option value="libra">Libra</option>
            <option value="sagittarius">Sagittarius</option>
            <option value="scorpio">Scorpio</option>
            <option value="pisces">Pisces</option>
            <option value="virgo">Virgo</option>
            <option value="taurus">Taurus</option>
        </select>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  zodiac: state.zodiac,
  signsAndQuotes: state.signsAndQuotes
})

export default connect(mapStateToProps)(PickSign);
// came from line 14value={props.zodiac} className="zodiac-signs" onChange={ e => props.onChange(e)}