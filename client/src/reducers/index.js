// import * as actions from '../actions';

const initialState = {
    loading:false,
    clicked:false,
    error:null,
    sign:'',
    horoscopes:[],
    scopeOfDay:[],
    day:'',
    currentUser:null,
    name:'',
    password:null,
    errorMessage:'Password does not match',
    errorVisible:false,
    confirmPassword:null,
    jwt:null,
    valid:false,
    value:null,
    validate:null,
    username:null,
    userId:null
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
    }    else if (action.type === 'GET_BUTTON_CLICKED'){
        return Object.assign({}, state, {
            clicked: true
        })
    }else if (action.type === 'SWITCH_BACK'){
        return Object.assign({}, state, {
            clicked: false
        })
    }else if (action.type === 'SCOPE_OF_DAY'){
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
    }else if (action.type === 'GET_CURRENT_USER_SUCCESS'){
        return Object.assign({}, state, {
            currentUser:action.currentUser,
        })
    }else if (action.type === 'NAME') {
        return Object.assign({}, state, {
            name:action.name
        })
    }else if (action.type === 'ENTER_PASSWORD') {
        return Object.assign({}, state, {
            password:action.password
        })
    }else if (action.type === 'SET_JWT') {
        return Object.assign({}, state, {
            jwt:action.jwt
        })
    }else if (action.type === 'SET_CONFIRM_PASSWORD') {
        return Object.assign({}, state, {
            confirmPassword:action.confirmPass
        })
    }else if (action.type === 'VALIDATE') {
        return Object.assign({}, state, {
            validate:(action.val === state.password),
            confirmPassword:action.val
        })
    }else if (action.type === 'VALUE') {
        return Object.assign({}, state, {
            value:action.num
        })
    }else if (action.type === 'VALID') {
        return Object.assign({}, state, {
            valid:action.q,
            errorVisible:action.b
        })
    }else if (action.type === 'SET_USERID') {
        return Object.assign({}, state, {
            userId:action.userId
        })
    }else if (action.type === 'USER_LOGOUT') {
        return state = null
        }
    

    return state
}   

export default zodiacReducer