import * as actions from '../actions';

const initialState = {
    clicked: false,
    loading: false,
    horoscope: "",
    quote: [],
    zodiac: '',
    links:[
        {
          text: 'HOME',
          href: '#'
        },
        {
          text: "BACK",
          href: "#"
        }
                
    ]
    
    
 }


export const zodiacReducer = (state = initialState, action) => {
    if (action.type === actions.PICK_ZODIAC) {
        return Object.assign({}, state, {
            zodiac: actions.PICK_ZODIAC
        })
    }
}

//export const GET

