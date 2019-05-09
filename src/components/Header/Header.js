import React from 'react';
import  './Header.css';

function Header(){
    return(
        <div className="header-comp">
             <h3>2SWEDEN</h3>
   
            <nav className="navbar">
                <ul className="navbar-ul">
                    <a href="SearchResult.js" className="navbar-list">Sök resor</a>
                    <a href="#" className="navbar-list">Läs om eventet</a>
                    <a href="#" className="navbar-list">Läs om våra orter</a>
                    <a href="#" className="navbar-list">Se rekommendationer</a>
                </ul>
            </nav>
        </div>
    );
}
export default Header;