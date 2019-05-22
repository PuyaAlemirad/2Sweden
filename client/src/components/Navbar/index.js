import React from 'react';



export default function Navbar(){
    return(
      
     <nav className="col-lg-8 col-md-8">
        <div className="navbar bigNav">
        <ul className="ul-list">
        <a href="index.html" className="n-link">Sök resor</a>
        <a href="index.html" className="n-link">Läs om eventet</a>
        <a href="index.html" className="n-link">Läs om våra orter</a>
        <a href="index.html" className="n-link">Se rekommendationer</a>
    </ul>
        </div>
        <div><h3 className="tosweden-h3 d-md-block">2Sweden</h3></div>
        <div className="pos-f-t smallNav">


<div className="collapse" id="navbarToggleExternalContent">
<div className="p-4">
<ul className="ul-list">
        <a href="index.html" className="n-link">Sök resor</a>
        <a href="index.html" className="n-link">Läs om eventet</a>
        <a href="index.html" className="n-link">Läs om våra orter</a>
        <a href="index.html" className="n-link">Se rekommendationer</a>
    </ul>
</div>
</div>
</div>                 
        </nav>
        
   
    );
}