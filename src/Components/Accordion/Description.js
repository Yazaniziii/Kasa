import React from "react";

import './Descriptions.css'

export default function Description(props) {

    return (
        <section className="containerDescription">
            <div className="description">
                <div className="descriptionTitle">
                    <h3>Description</h3>
                </div>
                <div className="descriptionP">
                    <p> {props.description} </p>
                </div>
            </div>

            <div className="description">
                <div className="descriptionTitle">
                    <h3>Equipements</h3>
                </div>
                <ul className="descriptionEquipments"> 
                    {props.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}