
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





export const  PICK_ZODIAC = 'PICK_ZODIAC';
export const pickZodiac = zodiac => ({
    type: PICK_ZODIAC,
    zodiac
});

export const GET_BUTTON_CLICKED = 'GET_BUTTON_CLICKED';
export const getButtonClicked = (clicked) => ({
    type: GET_BUTTON_CLICKED,
    clicked
})


export const fetchHoroscopes = ()=> dispatch =>{
    return fetch('api/horoscopes').then( res => {
        if (!res.ok){
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then( horoscope => {
       // console.log("horoscopes from actions fetch", horoscope)
        dispatch(fetchHoroscopeSuccess(horoscope))
    });
}