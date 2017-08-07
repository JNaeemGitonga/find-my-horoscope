import {createStore, applyMiddleware} from 'redux';
import zodiacReducer from './reducers';
import thunk from 'redux-thunk';

export default createStore(zodiacReducer, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION(), applyMiddleware(thunk));
