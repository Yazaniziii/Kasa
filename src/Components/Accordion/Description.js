import React, { useState, useEffect, useRef } from 'react';
import './Descriptions.css';
import Chevron from '../../assets/chevron.svg';

export default function Description(props) {
    const [toggleDescription, setToggleDescription] = useState(false); // État pour gérer l'état d'ouverture/fermeture de la description
    const [toggleEquipments, setToggleEquipments] = useState(false); // État pour gérer l'état d'ouverture/fermeture des équipements

    const [heightDescription, setHeightDescription] = useState(); // État pour stocker la hauteur de la description
    const [heightEquipments, setHeightEquipments] = useState(); // État pour stocker la hauteur des équipements

    const refHeightDescription = useRef(); // Référence pour accéder à la hauteur de la description
    const refHeightEquipments = useRef(); // Référence pour accéder à la hauteur des équipements

    useEffect(() => {
        // Effectuer une action après le rendu initial pour calculer les hauteurs
        setHeightDescription(`${refHeightDescription.current.scrollHeight}px`); // Récupérer la hauteur réelle de la description
        setHeightEquipments(`${refHeightEquipments.current.scrollHeight}px`); // Récupérer la hauteur réelle des équipements
    }, []);

    const toggleState = (section) => {
        // Fonction pour basculer l'état d'ouverture/fermeture d'une section (description ou équipements)
        if (section === 'description') {
            setToggleDescription(!toggleDescription); // Inverser l'état d'ouverture/fermeture de la description
        } else if (section === 'equipments') {
            setToggleEquipments(!toggleEquipments); // Inverser l'état d'ouverture/fermeture des équipements
        }
    };

    return (
        <section className='containerDescription'>
            <div className="description">
                {/* Bouton pour basculer l'état d'ouverture/fermeture de la description */}
                <button onClick={() => toggleState('description')} className="accordion-visible">
                    <span>Description</span>
                    <img className={toggleDescription && 'active'} src={Chevron} />
                </button>

                {/* Contenu de la description */}
                <div
                    className={toggleDescription ? 'accordion-toggle animated' : 'accordion-toggle'}
                    style={{ height: toggleDescription ? `${heightDescription}` : '0px' }}
                    ref={refHeightDescription}
                >
                    <p aria-hidden={toggleDescription ? 'true' : 'false'}>{props.description}</p>
                </div>
            </div>

            <div className="description">
                {/* Bouton pour basculer l'état d'ouverture/fermeture des équipements */}
                <button onClick={() => toggleState('equipments')} className="accordion-visible">
                    <span>Equipements</span>
                    <img className={toggleEquipments && 'active'} src={Chevron} />
                </button>

                {/* Contenu des équipements */}
                <div
                    className={toggleEquipments ? 'accordion-toggle animated' : 'accordion-toggle'}
                    style={{ height: toggleEquipments ? `${heightEquipments}` : '0px' }}
                    ref={refHeightEquipments}
                >
                    <ul className='descriptionEquipments' aria-hidden={toggleEquipments ? 'true' : 'false'}>
                        {/* Boucle sur chaque équipement pour les afficher dans des balises li */}
                        {props.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
