import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import {Link} from "react-router-dom";


function Header() {
    return (

        <div>
            <header>
                <div className="container_12">
                    <div className="grid_12">
                        <h1>
                            <a href="index.html">
                                <img src={logo} alt="Your Happy Family" width={200} height={125}/>
                            </a>
                        </h1>
                        <div className="menu_block ">
                            <nav className="horizontal-nav full-width horizontalNav-notprocessed">
                                <ul className="sf-menu">
                                    <li><Link to="/home">Home</Link></li>
                                    <li className="link-separator">·</li>
                                    <li><Link to="/about">About us</Link></li>
                                    <li className="link-separator">·</li>
                                    <li><Link to="/gallery">Gallery</Link></li>
                                    <li className="link-separator">·</li>
                                    <li><Link to="/pets">Our pets</Link></li>
                                    <li className="link-separator">·</li>
                                    <li><Link to="/contacts">Contacts</Link></li>
                                    <li className="link-separator">·</li>
                                    <li><Link to="/login">Log in</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
