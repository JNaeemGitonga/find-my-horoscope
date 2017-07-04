import * as actions from '../actions';

const initialState = {
    loading: false,
    clicked: false,
    error: null,
    horoscope: '',
    signsAndQuotes: undefined,
    zodiac: ''    
 }


export const zodiacReducer = (state = initialState, action) => {
    if (action.type === actions.PICK_ZODIAC) {
        return Object.assign({}, state, {
            zodiac: action.zodiac
        })
    }
    else if (action.type === actions.FETCH_HOROSCOPE_REQUEST) {
        return Object.assign({}, state, {
            loading: true
            
        })
    }else if (action.type === actions.FETCH_HOROSCOPE_SUCCESS) {
        return Object.assign({}, state, {
            signsAndQuotes: action.horoscope

        })
    }else if (action.type === actions.FETCH_HOROSCOPE_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
        })
    }
    else if (action.type === actions.GET_BUTTON_CLICKED){
        return Object.assign({}, state, {
            clicked: true
        })
    }return state
}   

// .map( horoscope =>{
//                 for(let sign in horoscope){
//                     if(horoscope.sign === action.zodiac){
//                      return horoscope.quotes[Math.floor(Math.random()*horoscope.quotes.length)]
//                     }
//                 }
//             })


