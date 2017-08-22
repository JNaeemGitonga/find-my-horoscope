import request from "superagent";
import * as Cookies from 'js-cookie';


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

export const fetchHoroscopes = ()=> dispatch =>{
    const accessToken = Cookies.get('accessToken')
    let horoscopesArray;
    dispatch(fetchHoroscopeRequest())
    request
        .get('api/horoscopes')
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
            console.log("HERE IS UR TOKEN====>",accessToken)
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
                console.log('this is res.body ======>',res.body)
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
    console.log('LOOOOOKKKKKK====>', accessToken)
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
       console.log('OJOO===>', currentUser)
        dispatch(name(currentUser.name))
       dispatch(getCurrentUserSuccess(currentUser))
       dispatch(logonRequest())}
   )
   .then(() => dispatch(logonSuccess()));
}
