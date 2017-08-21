// import * as actions from '../actions';

const initialState = {
    loading: false,
    clicked: false,
    error: null,
    sign:'',
    horoscopes: [],
    scopeOfDay:[],
    day:''
}


 const zodiacReducer = (state = initialState, action) => {
    if (action.type === 'PICK_SIGN') {
        return Object.assign({}, state, {
            sign: action.sign
        })
    }
    else if (action.type === 'FETCH_HOROSCOPE_REQUEST') {
        return Object.assign({}, state, {
            loading: true
        })
    }else if (action.type === 'FETCH_HOROSCOPE_SUCCESS') {
        return Object.assign({}, state, {
            horoscopes: [...action.horoscopes]
        })
    }else if (action.type === 'FETCH_HOROSCOPE_ERROR') {
        return Object.assign({}, state, {
            error: action.error,
        })
    }
    else if (action.type === 'GET_BUTTON_CLICKED'){
        return Object.assign({}, state, {
            clicked: true
        })
    } else if (action.type === 'SWITCH_BACK'){
        return Object.assign({}, state, {
            clicked: false
        })
    } else if (action.type === 'SCOPE_OF_DAY'){
        let d = new Date();
        let today = d.getDay();
        let array;
        state.horoscopes.forEach((oneHoroscope,index) => {
            for (let sign in oneHoroscope){
                if (state.sign === oneHoroscope.sign){
                    oneHoroscope.horoscopes.find((day, index2) => {
                        if(parseInt(day.day) === today){
                            array = day.quotes
                        }
                    });
                }
            }
        })
        return Object.assign({}, state, {
                scopeOfDay:[...array]
        })
         
    }
    return state
}   

export default zodiacReducer