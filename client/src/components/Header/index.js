import React from 'react';
import Navbar from '../Navbar';


export default function Header(){
    const logo = require('./projektlogga.png');
    return(
        <div className="header-div">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 sweLoggo"><img src={logo} className="sweden-loggo" alt="logo"/>
                    <button className="navbar-toggler btn nav-drop yellow smallNav" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
    </button>
                    </div>                
                    <Navbar/>     
                </div>              
            </div>
        </div>
    );
}