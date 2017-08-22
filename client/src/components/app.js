import React from 'react';
// import * as Cookies from 'js-cookie';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import GetMyScope from './getmyscope';
// import {logon, getLessons} from '../actions'


export class App extends React.Component {
    
    // componentDidMount() {
    // this.props.dispatch(logon())
      
    // }
    render() {
        if (!this.props.currentUser) {
            // return <LoginPage />;
        }
        return (
            <Router>
                <div className='app'>
                    <main>
                        <Route  exact path='/' component={GetMyScope}  />
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