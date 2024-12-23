import React from 'react'



export default function Header() {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container">
    <a className="navbar-brand" href="#" style={{color: '#04B9F2', fontSize: '25px', fontWeight: '700'}}>Oriental Rug Service</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <a href={"#home"} className="nav-link active" aria-current="page" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#services" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Services
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Hand Washing</a></li>
            <li><a className="dropdown-item" href="#">Thorough Cleaning</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Expert Repair</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#gallery">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
        <li className="nav-item ms-4">
            <div className="header-btn">
            <a className="nav-link" href="#"> <i class="fa-solid fa-phone me-1"></i>1234567890</a>
            </div>
         
        </li>
      </ul>
      
    </div>
  </div>
</nav>
   </>
  )
}
