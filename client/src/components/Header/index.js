import React from 'react';


export default function Header(){
    const logo = require('./projektlogga.png');
    return(
        <div className="header-div">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 sweLoggo"><img src={logo} className="sweden-loggo"/>
                    <button className="navbar-toggler btn nav-drop yellow smallNav" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
    </button>
                    </div>
    

                    <nav className="col-lg-8 col-md-6">
                    <div className="navbar bigNav">
                    <ul className="ul-list">
                    <a href="#" className="n-link">Sök resor</a>
                    <a href="#" className="n-link">Läs om eventet</a>
                    <a href="#" className="n-link">Läs om våra orter</a>
                    <a href="#" className="n-link">Se rekommendationer</a>
                </ul>
                    </div>
                    <div><h3 className="tosweden-h3 bigNav">2Sweden</h3></div>
                    <div className="pos-f-t smallNav">
  
  
  <div className="collapse" id="navbarToggleExternalContent">
    <div className="p-4">
    <ul className="ul-list">
                    <a href="#" className="n-link">Sök resor</a>
                    <a href="#" className="n-link">Läs om eventet</a>
                    <a href="#" className="n-link">Läs om våra orter</a>
                    <a href="#" className="n-link">Se rekommendationer</a>
                </ul>
    </div>
  </div>
</div>                 
                    </nav>
                    
                  
                    
                  
                </div>              
            </div>
        </div>
    );
}