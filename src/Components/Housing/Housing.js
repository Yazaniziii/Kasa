import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './Housing.css';

export default function Housing(props) {
  // Déstructuration des propriétés
  const { title, location, tags, hostName, hostPicture, rating } = props;

  // Fonction pour générer les étoiles
  const renderStars = () => {
    const filledStarColor = '#ff6060'; // Couleur des étoiles remplies
    const emptyStarColor = '#E3E3E3'; // Couleur des étoiles vides

    // Création du tableau d'étoiles
    const stars = Array.from({ length: 5 }).map((_, index) => {
      const starColor = index < rating ? filledStarColor : emptyStarColor; // Détermination de la couleur de l'étoile
      return <FontAwesomeIcon className='stars' key={index} icon={faStar} style={{ color: starColor }} />; // Rendu de l'icône d'étoile avec la couleur correspondante
    });

    return stars; // Retourne le tableau d'étoiles
  };

  return (
    <section className="housingContainer">
      <article className="housingInfo">
        <h2 className="housingInfoTitle">{title}</h2> {/* Affichage du titre */}
        <p className="housingInfoLocalisation">{location}</p> {/* Affichage de la localisation */}
        <div className="housingInfoTags">
          {tags.map((tag, index) => (
            <p key={index} className="housingInfoTagsPara">
              {tag}
            </p>
          ))}
        </div>
      </article>

      <article className="housingUser">
        <div className="housingUserInfo">
          <h3>{hostName}</h3> {/* Affichage du nom de l'hôte */}
          <div className="housingUserInfoImgUser">
            <img src={hostPicture} alt="" /> {/* Affichage de l'image de l'hôte */}
          </div>
        </div>
        <ul className="housingUserIcone">{renderStars()}</ul> {/* Appel de la fonction pour générer les étoiles */}
      </article>
    </section>
  );
}
