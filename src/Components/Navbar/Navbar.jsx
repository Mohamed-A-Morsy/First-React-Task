import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>
 <nav className="navbar navbar-expand-lg nav-bg navbar-dark" >
  <div className="container">
    <Link className="navbar-brand fw-bolder" to="/">Start FrameWork</Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
  </>
}
