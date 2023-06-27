import React, { useState, useEffect, useRef } from 'react';
import './Accordion.css';
import Chevron from '../../assets/chevron.svg';

const dataAccordion = [
  {
    title: 'Fiabilité',
    content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
  {
    title: 'Respect',
    content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    title: 'Service',
    content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: 'Responsabilité',
    content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

export default function Accordion() {
  const [accordions, setAccordions] = useState([]);

  useEffect(() => {
    // Initialisation des Collapase avec les données de dataAccordion
    setAccordions(
      dataAccordion.map((item) => ({
        ...item,
        toggle: false, // Ajout d'une propriété "toggle" pour gérer l'état d'ouverture/fermeture de chaque collapse
      }))
    );
  }, []);

  const toggleState = (index) => {
    setAccordions((prevState) =>
      prevState.map((item, i) => ({
        ...item,
        toggle: i === index ? !item.toggle : item.toggle, // Inversion de l'état "toggle" de l'accordéon cliqué, les autres restent inchangés
      }))
    );
  };

  return (
    <div className="accordion">
      {/* Boucle sur chaque accordéon dans le state "accordions" */}
      {accordions.map((item, index) => (
        <div key={index}>
          {/* Bouton pour basculer l'état de l'accordéon */}
          <button onClick={() => toggleState(index)} className="accordion-visible">
            <span>{item.title}</span>
            <img className={item.toggle ? 'active' : ''} src={Chevron} alt="Chevron" />
          </button>
          {/* Contenu de l'accordéon */}
          <div
            className={`accordion-toggle ${item.toggle ? 'animated' : ''}`}
            style={{ height: item.toggle ? 'auto' : '0px' }} // La hauteur est définie en fonction de l'état "toggle"
          >
            <p aria-hidden={item.toggle ? 'true' : 'false'}>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
