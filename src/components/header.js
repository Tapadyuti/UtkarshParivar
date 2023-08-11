import React from 'react'
//import logo from './../assets/images/UTKARSH_logo.png';
import './../styles/header.css';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"  >
                        <img src='./assets/images/UTKARSH_logo.png' alt="error" style={{width: '80px' }} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-lg-end justify-content-md-end " id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/gallery">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/donate">Donate</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us">Contact US</Link>
                            </li>
                            <li className="nav-item">
                                {/*  <a className="nav-link" href="/login" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Organization Work
                                </a> */}
                                <Link className="nav-link" to="/login">Organization Work</Link>
                                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="/login">Login</a></li>
                                    <li><a className="dropdown-item" href="/upcommings">Upcomming</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                </ul> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header