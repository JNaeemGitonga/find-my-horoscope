export const FETCH_HOROSCOPE_REQUEST = 'FETCH_HOROSCOPE_REQUEST';
export const fetchHoroscopeRequest = () => ({
        type: FETCH_HOROSCOPE_REQUEST,
});

export const FETCH_HOROSCOPE_SUCCESS = 'FETCH_HOROSCOPE_SUCCESS';
export const fetchHoroscopeSuccess = horoscope => ({
    type: FETCH_HOROSCOPE_SUCCESS,
    horoscope
});
 
export const FETCH_HOROSCOPE_ERROR = 'FETCH_HOROSCOPE_ERROR';
export const fetchHoroscopeError = error => ({
    type: FETCH_HOROSCOPE_ERROR,
    error
});

export const fetchHoroscope = horoscope => dispatch => {
    dispatch(fetchHoroscopeRequest());
   // ...
}



export const  PICK_ZODIAC = 'PICK_ZODIAC';
export const pickZodiac = zodiac => ({
    type: PICK_ZODIAC,
    zodiac
});

export const GET_ANOTHER_HOROSCOPE = 'GET_ANOTHER_HOROSCOPE';
export const getAnotherHoroscope = () => ({
    type: GET_ANOTHER_HOROSCOPE
});