import React from 'react';
import './nav-bar.css';
import {connect} from 'react-redux'

export class Navbar extends React.Component {
  
    render(){
        return (
        
            <div className="navigation-bar">
            <nav className="navigation-bar-nav">
                <ul>
                    <li>HOME</li>
                    <li>BACK</li>
                </ul>
            </nav>
            </div>
        );

    }
}
export default connect()(Navbar)