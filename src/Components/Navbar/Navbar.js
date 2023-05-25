import React from "react";
import { Link } from "react-router-dom";

// Link Css
import './Navbar.css'

// Style
import Logo from '../../assets/logo_light.svg';

export default function Navbar() {
    return (
        <header className="header">
            <nav>
                <Link to="/">
                    <img src={Logo} alt="logo" className="navLogo"/>
                </Link>
            </nav>
            <nav className="nav">
                <Link to="/" className="navLink">Acceuil</Link>
                <Link to="/about" className="navLink">A Propos</Link>
            </nav>
        </header>
    )
}