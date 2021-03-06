import React from "react";

const Nav = () =>{
    
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <a className="navbar-brand" href="#">SEA WAYS</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse pl-5 ml-5 d-flex justify-content-end" id="navbarNav">
        <ul className="navbar-nav ml-5">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
         
        </ul>
      </div>
    </nav>

    )
}

export default Nav;