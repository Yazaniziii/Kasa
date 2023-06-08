import React, { useState, useTransition } from "react";

// Link Css
import './Drops.css'

export default function Drops() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);

  const changeState = () => {
    setIsExpanded1(!isExpanded1)
  }
  const changeState2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  const changeState3 = () => {
    setIsExpanded3(!isExpanded3);
  };
  const changeState4 = () => {
    setIsExpanded4(!isExpanded4);
  };

  return (
    <section className="accordion">
      <div className="contenBx">
        <div className={`label`} onClick={changeState}>
          Fiabilité
        </div>
        {isExpanded1 && <div className={`content`}>
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
          </p>
        </div>}
      </div>
      <div className="contenBx">
        <div className={`label`} onClick={changeState2}>
          Respect
        </div>
        {isExpanded2 && <div className={`content`}>
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </p>
        </div>
        }
      </div>
      <div className="contenBx">
        <div className={`label`} onClick={changeState3}>
          Service
        </div>
        {isExpanded3 && <div className={`content`}>
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
          </p>
        </div>
        }
      </div>
      <div className="contenBx">
        <div className={`label`} onClick={changeState4}>
          Responsabilité
        </div>
        {isExpanded4 && <div className={`content`}>
          <p>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </div>
        }
      </div>
    </section>
  );
}