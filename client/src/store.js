import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import zodiacReducer from './reducers';
import {routerMiddleware,routerReducer} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const combinedReducer = combineReducers({zodiacReducer,router:routerReducer});
export const history = createHistory();
const middleWare= routerMiddleware(history);
const store = createStore(combinedReducer,  
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(thunk,middleWare)));
export default store