
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HHeader() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            
            <div class="container">
              <a class="navbar-brand" href="#"><img src="https://www.pngall.com/wp-content/uploads/5/Job-Employment-PNG-Picture.png" style={{width:"70px"}} alt="" /></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto ms-auto">
<Link to={"/"} style={{textDecoration:"none"}}>                  <li class="nav-item">

                        Dashboard</li>
    
</Link>                 
                  <li class="nav-item">
<Link to={"/list"} style={{textDecoration:"none"}}>
List
</Link>

                  </li>
       
                 </ul>
               
              </div>
            </div>
          </nav>
        </>
  );
};

export default HHeader;
