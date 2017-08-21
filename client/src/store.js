import {createStore, applyMiddleware} from 'redux';
import zodiacReducer from './reducers';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';

export default createStore(zodiacReducer, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION(), applyMiddleware(thunk));
