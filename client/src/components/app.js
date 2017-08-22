import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import GetMyScope from './getmyscope';
import LoginPage from './login-page';
import {logon} from '../actions';


export class App extends React.Component {
    
    componentDidMount() {
    this.props.dispatch(logon())
      
    }
    render() {
        if (!this.props.currentUser) {
            return <LoginPage />;
        }
        if (window.location.hash == '#_=_'){
            history.replaceState 
                ? history.replaceState(null, null, window.location.href.split('#')[0])
                : window.location.hash = '';
        }
        return (
            <Router>
                <div className='app'>
                    <main>
                       
                        <Route exact path='/' component={GetMyScope}  />
                    </main>
                </div>
            </Router>
        )
    }
}
const mapStateToProps = state => {
    return {
        currentUser:state.currentUser,
    }
}
export default connect(mapStateToProps)(App)