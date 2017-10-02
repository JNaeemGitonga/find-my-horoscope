import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {ConnectedRouter as Router} from 'react-router-redux';
import GetMyScope from './getmyscope';
import LoginPage from './login-page';
import SignUp from './signup';
import LoginBox from './login-box';
import {history} from '../store';
import {logon} from '../actions'


export class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(logon())
        if (window.location.hash == '#_=_' ){
            
                return window.location.hash = '';
        }
    }
    render() {
        if (!this.props.currentUser) {
            return (
            <Router history={history}>
                <div className='app'>
                    <main>
                        <Route exact path='/' component={LoginPage} />
                        <Route exact path='/signup' component={SignUp} />
                        <Route exact path='/login' component={LoginBox} />
                    </main>
                </div>
            </Router>);
        }
        
        return (
            <Router history={history}>
                <div className='app'>
                    <main>
                        <Route exact path='/getmyscope/:userId' component={GetMyScope}  />
                    </main>
                </div>
            </Router>
        )
    }
}
const mapStateToProps = (state ) => {
   
    return {
        currentUser:state.zodiacReducer.currentUser,
    }
}
export default connect(mapStateToProps)(App)