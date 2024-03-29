import React from 'react';
import './nav-bar.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class Navbar extends React.Component {
  
    render(){
        
        if (!this.props.currentUser){
            return (
                
                <div className="navigation-bar">
                    <nav className="navigation-bar-nav">
                        <span className='welcome-message'>
                            Welcome to <Link to='/'>What's My Scope?</Link></span>
                        <ul>
                            <li><Link to='/login'>LOGIN</Link></li>
                                
                        </ul>
                    </nav>
                </div>
                );
        }
        return (
        
            <div className="navigation-bar">
            <nav className="navigation-bar-nav">
                <span className='welcome-message'>Welcome home {this.props.name}!</span>
                <ul>
                    <a href='/api/auth/logout'><li>LOGOUT</li></a>
                </ul>
            </nav>
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        currentUser:state.zodiacReducer.currentUser,
        name:state.zodiacReducer.name
    }
}
export default connect(mapStateToProps)(Navbar)