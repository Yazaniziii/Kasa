import React from 'react'

import './Housing.css'

export default function Housing() {


  return (

    <section className='housingContainer'>
      <article className="housingInfo">
        <h2 className='housingInfoTitle'>Studio de charme - Buttes Chaumont</h2>
        <p className='housingInfoLocalisation'>Ile de France - Paris 20e</p>
        <div>

        </div>
      </article>

      <article className="housingUser">
        <div className='housingUserInfo'>
            <h3>Franck Maher</h3>
            <div className='housingUserInfoImgUser'>
                <img src='' alt='' />
            </div>
        </div>
        <ul className='housingUserIcone'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </article>
    </section>
  )
}
