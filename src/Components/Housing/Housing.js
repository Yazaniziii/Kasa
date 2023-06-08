import React from 'react'

import './Housing.css'

export default function Housing(props) {


  return (

    <section className='housingContainer'>
      <article className="housingInfo">
        <h2 className='housingInfoTitle'>{props.title}</h2>
        <p className='housingInfoLocalisation'> {props.location} </p>
        <div className='housingInfoTags'>
          {props.tags.map((tag, index) => (
            <p key={index} className='housingInfoTagsPara'>{tag}</p>
          ))}
        </div>
      </article>

      <article className="housingUser">
        <div className='housingUserInfo'>
            <h3> {props.hostName} </h3>
            <div className='housingUserInfoImgUser'>
                <img src={props.hostPicture} alt='' />
            </div>
        </div>
        <ul className='housingUserIcone'>
            <li> {} </li>
        </ul>
      </article>
    </section>
  )
}
