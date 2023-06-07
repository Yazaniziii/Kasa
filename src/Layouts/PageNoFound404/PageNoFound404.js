import React from 'react'
import { Link } from 'react-router-dom'

import './PageNoFound404.css'

export default function PageNoFound404() {
  return (
    <div className='PageNoFound'>
      <h2 className='PageNoFoundTitle'>404</h2>
      <p className="PageNoFoundParagraphe">Oups! La page que vous demandez n'existe pas.</p>
      <Link className='PageNoFoundLink' to='/'>Retourner sur la page d'acceuil</Link>
    </div>
  )
}
