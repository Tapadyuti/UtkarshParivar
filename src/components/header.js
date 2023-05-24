import React from 'react'
import logo from './../images/UTKARSH_logo.png';
import './../styles/header.css';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="error" style={{height:'44px', width: '70px'}} />
                </a>
                <div class="collapse navbar-collapse justify-content-end " id="navbarNavDropdown">
                    <ul class="navbar-nav justify-content-around">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/gallery">Gallery</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/donate">Donate</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact-us">Contact US</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Organization Work
                            </a>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to="/login">Login</Link></li>
                                <li><a class="dropdown-item" href="#">Upcomming Event</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        </>
    )
}

export default Header