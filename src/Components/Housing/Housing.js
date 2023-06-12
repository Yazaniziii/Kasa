import React from 'react';
import Star from '../../assets/star.svg';

import './Housing.css';

export default function Housing(props) {
  const rating = props.rating; // Modifier cette ligne

  const starElements = [];

  for (let i = 1; i <= rating; i++) {
    const starColor = i <= rating ? '#ff6060' : '#f7f7f7';
    starElements.push(
      <li key={i}>
        <img src={Star} alt='star' style={{ fill: starColor }} />
      </li>
    );
  }

  return (

      <section className='housingContainer'>
      <article className="housingInfo">
        <h2 className='housingInfoTitle'>{props.title}</h2>
        <p className='housingInfoLocalisation'>{props.location}</p>
        <div className='housingInfoTags'>
          {props.tags.map((tag, index) => (
            <p key={index} className='housingInfoTagsPara'>{tag}</p>
          ))}
        </div>
      </article>

      <article className="housingUser">
        <div className='housingUserInfo'>
          <h3>{props.hostName}</h3>
          <div className='housingUserInfoImgUser'>
            <img src={props.hostPicture} alt='' />
          </div>
        </div>
        <ul className='housingUserIcone'>{starElements}</ul>
      </article>
    </section>

  );
}
