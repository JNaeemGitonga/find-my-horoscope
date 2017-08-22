import React from 'react';
import './nav-bar.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class Navbar extends React.Component {
  
    render(){
        let style ={
            'textAlign':'left'
        }
        if (!this.props.currentUser){
            return (
                
                    <div className="navigation-bar">
                        
                    <nav className="navigation-bar-nav">
                        <span className='welcome-message'>Welcome to What's My Scope?</span>
                        <ul>
                            <a href={"/api/auth/facebook"} ><li>LOGIN</li></a>
                            
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
                    <a to='/'><li>HOME</li></a>
                    <a href='/api/auth/logout'><li>LOGOUT</li></a>
                </ul>
            </nav>
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        currentUser:state.currentUser,
        name:state.name
    }
}
export default connect(mapStateToProps)(Navbar)