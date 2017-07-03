import React from 'react';
import './pick-sign.css'

export default function PickSign (props){
  return (
    //why would it matter if the value= " " had a space instead of being ""? onChange={ e => props.onChange(e) }
    <form>
      <select value={props.zodiac} className="zodiac-signs" onChange={ e => props.onChange(e) }>
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