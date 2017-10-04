import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './getmyscope.css';
import Banner from './banner';
import {login,logon} from '../actions';
import './login-page.css';
import * as Cookies from 'js-cookie';



export  class LoginPage extends React.Component {
    render() {
        return (
            <div className="navbar-only">
            <Banner />
              
                <div className='login-box'>
                    <ul>
                        <li className='link' onClick={() => {
                        this.props.dispatch(login('demo@dummy.com','123445asdfk'))    
                        }}>Demo</li>
                        <li className='link'><Link to='/signup'>Sign Up</Link></li>
                        <li className='link'><Link to='/login'>Login</Link></li>
                        <li><a href={'/api/auth/facebook'}>
                            <span className='login-span'>
                            Facebook Login</span></a>
                        </li>
                    
                    </ul>
                </div>
                <div className='about-us'>
                    <h2 className='about-heading'>About Us...</h2>
                    <div className='about-container'>
                        <p className='aboutUs'>Something fun/funny to help get you through your day. Not so much a horoscope; but rather,
                            some motivating or funny phrases and quotes special to you!
                        </p>
                    </div>
                    <h2 className='come-heading'>WHAT AWAITS YOU TODAY?</h2>
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        let accessToken = Cookies.get('accessToken');
        if (accessToken) {
            this.props.dispatch(logon())
        }
    }
}
export const mapStateToProps = (state,props) => {
    // const userId = props.match.params.userId;
    return{
     
    }
}
export default connect(mapStateToProps)(LoginPage)