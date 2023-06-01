import React, { useState } from "react";

// Link Css
import './Drops.css'

export default function Drops() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);

  const toggleExpand1 = () => {
    setIsExpanded1(!isExpanded1);
  };
  const toggleExpand2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  const toggleExpand3 = () => {
    setIsExpanded3(!isExpanded3);
  };
  const toggleExpand4 = () => {
    setIsExpanded4(!isExpanded4);
  };

  return (
    <section className="accordion">
      <div className="contenBx">
        <div className={`label ${isExpanded1 ? 'expanded' : ''}`} onClick={toggleExpand1}>
          Fiabilité
        </div>
        <div className={`content ${isExpanded1 ? 'expanded' : ''}`}>
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
          </p>
        </div>
      </div>
      <div className="contenBx">
        <div className={`label ${isExpanded2 ? 'expanded' : ''}`} onClick={toggleExpand2}>
          Respect
        </div>
        <div className={`content ${isExpanded2 ? 'expanded' : ''}`}>
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </p>
        </div>
      </div>
      <div className="contenBx">
        <div className={`label ${isExpanded3 ? 'expanded' : ''}`} onClick={toggleExpand3}>
          Service
        </div>
        <div className={`content ${isExpanded3 ? 'expanded' : ''}`}>
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
          </p>
        </div>
      </div>
      <div className="contenBx">
        <div className={`label ${isExpanded4 ? 'expanded' : ''}`} onClick={toggleExpand4}>
          Responsabilité
        </div>
        <div className={`content ${isExpanded4 ? 'expanded' : ''}`}>
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </div>
      </div>
    </section>
  );
}