import React from "react";

// Link Css
import './Background.css'

// Style
import BackgroundPicture from '../../assets/bannier-home.png';

export default function Background() {
    return (
        <div className="bannierHome">
            <div className="bannierHomeOverlay"></div>
            <p className="bannierHomeText">Chez vous, partout et ailleurs</p>
        </div>
    )
}