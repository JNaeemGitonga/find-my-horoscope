import React from 'react';
import './pick-sign.css';
import {connect} from 'react-redux';
import {pickSign} from '../actions';

export class PickSign extends React.Component{
  
    selectZodiac(e){
    e.preventDefault();
    const value = e.target.value;
    this.props.dispatch(pickSign(value))
    }
  render(){
    return (
      <form onChange={e => this.selectZodiac(e)}>
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
  sign:state.sign
})

export default connect(mapStateToProps)(PickSign);