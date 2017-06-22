import React from 'react';
import '../nav-bar.css';

export default function Navbar(props){
    const links = props.links.map( (link, index) =>(
       <li key={index}>
           <a href={link.href}>
               {link.text}
            </a>
       </li>     

    ));

    return (
       
        <div className="navigation-bar">
           
           <nav className="navigation-bar-nav">
            <ul>
                {links}
            </ul>
           </nav>
        </div>
    );
    
}