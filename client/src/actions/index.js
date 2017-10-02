import request from "superagent";
import * as Cookies from 'js-cookie';
import {push} from 'react-router-redux';


export const FETCH_HOROSCOPE_REQUEST = 'FETCH_HOROSCOPE_REQUEST';
export const fetchHoroscopeRequest = () => ({
        type: FETCH_HOROSCOPE_REQUEST,
});

export const FETCH_HOROSCOPE_SUCCESS = 'FETCH_HOROSCOPE_SUCCESS';
export const fetchHoroscopeSuccess = (horoscopes) => ({
    type: FETCH_HOROSCOPE_SUCCESS,
    horoscopes
    
});
 
export const FETCH_HOROSCOPE_ERROR = 'FETCH_HOROSCOPE_ERROR';
export const fetchHoroscopeError = error => ({
    type: FETCH_HOROSCOPE_ERROR,
    error
});

export const  PICK_SIGN = 'PICK_SIGN';
export const pickSign = sign => ({
    type: PICK_SIGN,
    sign
});

export const GET_BUTTON_CLICKED = 'GET_BUTTON_CLICKED';
export const getButtonClicked = clicked => ({
    type: GET_BUTTON_CLICKED,
    clicked
})

export const SWITCH_BACK = 'SWITCH_BACK';
export const switchBack = clicked => ({
    type: SWITCH_BACK,
    clicked
})

export const SET_DAY = 'SET_DAY';
export const setDay = day => ({
    type: SET_DAY,
    day
})

export const SCOPE_OF_DAY = 'SCOPE_OF_DAY';
export const scopeOfDay = () => ({
    type: SCOPE_OF_DAY,
})

export const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
export const getCurrentUserSuccess = currentUser => ({
    type: GET_CURRENT_USER_SUCCESS,
    currentUser
})

export const GET_CURRENT_USER_ERROR = 'GET_CURRENT_USER_ERROR';
export const getCurrentUserError = error => ({
    type: GET_CURRENT_USER_ERROR,
    error
});

export const GET_CURRENT_USER_REQUEST = 'GET_CURRENT_USER_REQUEST';
export const getCurrentUserRequest = () => ({
    type: GET_CURRENT_USER_REQUEST,
});

export const fetchHoroscopes = (jwt)=> dispatch =>{
    let accessToken = Cookies.get('accessToken') ;
    let horoscopesArray;
    dispatch(fetchHoroscopeRequest())
    request
        .get('/api/getmyScope/horoscopes')
        .set({'Authorization': `Bearer ${accessToken}`})
        .then( res => {
        if (!res.ok){
            return Promise.reject(res.statusText);
        } 
        horoscopesArray = res.body
        return horoscopesArray ; 
    }).then( horoscopesArray => {
        return dispatch(fetchHoroscopeSuccess(horoscopesArray))
    });
}
 
export const getCurrentUser = () => dispatch => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
        dispatch(getCurrentUserRequest());
        request
            .get('/api/me')
            .set({'Authorization':`Bearer ${accessToken}`})
            .then(res => {
                if (!res.ok) {  
                    if (res.status === 401) {
                    Cookies.remove('accessToken');
                    return;
                    }
                    throw new Error(res.statusText)
                }
                dispatch(getCurrentUserSuccess(res.body))
            })
            .catch(err => dispatch(getCurrentUserError(err)))
    }
}

export const LOGON_REQUEST = 'LOGON_REQUEST';
export const logonRequest = () => ({
    type:LOGON_REQUEST
})

export const LOGON_SUCCESS = 'LOGON_SUCCESS';
export const logonSuccess = () =>({
    type:LOGON_SUCCESS
})

export const NAME = 'NAME';
export const name = name => ({
    type:NAME,
    name
})
export const logon = () => dispatch =>{
    const accessToken = Cookies.get('accessToken');
    fetch('/api/me', {
       headers: {
           'Authorization': `Bearer ${accessToken}`
       }
   }).then(res => {
       if (!res.ok) {
           if (res.status === 401) {
               Cookies.remove('accessToken');
               return;
           }
           throw new Error(res.statusText);
       }
       return res.json();
   }).then(currentUser => {
        dispatch(name(currentUser.name))
       dispatch(getCurrentUserSuccess(currentUser))
       dispatch(logonRequest())}
   )
   .then(() => dispatch(logonSuccess()));
}

export const ENTER_PASSWORD = 'ENTER_PASSWORD';
export const enterPass = password => ({
    type:ENTER_PASSWORD,
    password
})

export const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD';
export const setConfirmPass = confirmPass => ({
    type:SET_CONFIRM_PASSWORD,
    confirmPass
})

export const SET_JWT = 'SET_JWT';
export const setJWT = jwt => ({
    type:SET_JWT,
    jwt
})

export const VALIDATE = 'VALIDATE';
export const validate = val => ({
    type:VALIDATE,
    val
})

export const VALUE = 'VALUE'
export const value = num =>({
    type:VALUE, 
    num
})

export const VALID = 'VALID';
export const valid = (q,b) =>({
    type:VALID,
    q,
    b
})

export const SET_USERNAME = 'SET_USERNAME';
export const setUsername = username => ({
    type:SET_USERNAME,
    username
})

export const SET_USERID = 'SET_USERID';
export const setUserId = userId => ({
    type:SET_USERID,
        userId
})

export const createUser = (username, password, fName, lName) => dispatch => {
    let newUser = {

            username:username,
            firstName:fName,
            lastName:lName,
            password:password,
            name: `${fName} ${lName}`
    }
    let userId;
    return fetch('/api/getmyscope/users/signup', {
        method:'POST',
        headers: {
            Accept: 'application/json', 
            'Content-type': 'application/json',
           },
        body: JSON.stringify(newUser)
        })
        .then(res => {
            if (res.ok) {
                return request 
                .post('/api/getmyscope/auth/login')
                .set( 'Accept','application/json')
                .set('Content-type', 'application/json')
                .send(JSON.stringify({username:username,password:password})) 
                .then(res => {
                    dispatch(setJWT(res.body.authToken))
                    userId = res.body.user._id;
                    dispatch(setUserId(res.body.user._id))
                    dispatch(getCurrentUserSuccess(res.body.user.name))
                })
               .then(() => dispatch(push(`/getmyscope/${userId}`)))
               .catch(err => console.log('error from login', err))
            }
            else{  console.log(res.message)}
            
        })
        .catch(err => {
            alert(`${err} is your error!`)
        })
}

export const login = (username,password) => dispatch => {
    
    let obj = {
        username:username ,
        password:password
    }
    
    let userId;
    request 
        .post('/api/getmyscope/auth/login')
        .set( 'Accept','application/json')
        .set('Content-type', 'application/json')
        .send(JSON.stringify(obj)) 
        .then((res) => {
            dispatch(setJWT(res.body.authToken))
            dispatch(getCurrentUserSuccess(res.body.user))
            dispatch(name(res.body.user.firstName))
            userId = res.body.user._id;
            dispatch(setUserId(res.body.user._id))
            
        })
        .then(() => dispatch(push(`/getmyscope/${userId}`)))  
        .catch(err => console.log('error from login', err))
}

export const fetchHoroscopes2 = (jwt)=> dispatch =>{
    
    let horoscopesArray;
    dispatch(fetchHoroscopeRequest())
    request
        .get('/api/getmyScope2/horoscopes')
        .set({'Authorization': `Bearer ${jwt}`})
        .then( res => {
        if (!res.ok){
            return Promise.reject(res.statusText);
        } 
        horoscopesArray = res.body
        return horoscopesArray ; 
    }).then( horoscopesArray => {
        return dispatch(fetchHoroscopeSuccess(horoscopesArray))
    });
}