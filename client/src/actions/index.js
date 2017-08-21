
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

export const fetchHoroscopes = ()=> dispatch =>{
    return fetch('api/horoscopes').then( res => {
        if (!res.ok){
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then( horoscope => {
        return dispatch(fetchHoroscopeSuccess(horoscope))
    });
}