import React from 'react'

export default function Header() {

  // add classNameName navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classNameNameList.add('navbarDark');
    }
    else {
        header.classNameNameList.remove('navbarDark');
    }
}
  
  return (
<nav classNameNameName="navbar navbar-expand-lg fixed-top navbarScroll">
        <div classNameNameName="container">
            <a classNameNameName="navbar-brand" href="#">Brad</a>
            <button classNameNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span classNameNameName="navbar-toggler-icon"></span>
            </button>
            <div classNameNameName="collapse navbar-collapse" id="navbarSupportedContent">
                <ul classNameNameName="navbar-nav ms-auto">
                    <li classNameNameName="nav-item active">
                        <a classNameNameName="nav-link" href="#home">Home</a>
                    </li>
                    <li classNameNameName="nav-item">
                        <a classNameNameName="nav-link" href="#about">About</a>
                    </li>
                    <li classNameNameName="nav-item">
                        <a classNameNameName="nav-link" href="#services">Services</a>
                    </li>
                    <li classNameNameName="nav-item">
                        <a classNameNameName="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li classNameNameName="nav-item">
                        <a classNameNameName="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
  )
}