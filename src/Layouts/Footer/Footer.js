import React from "react";

// Link Css
import './Footer.css'

// Style
import LogoFooter from '../../assets/logo_footer.png'

export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <img src={LogoFooter} alt="logo footer" className="footerLogo"/>
            <p className="footerDescription">
               &copy; {year} Kasa. All rights reserved
            </p>
        </footer>
    )
}