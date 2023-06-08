import React, {useState} from 'react'
import "./Accordion.css"
import Chevron from '../../assets/chevron.svg'

const dataCollection = [
  {
    "title": "Fiabilité",
    "content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  },
  {
    "title": "Respect",
    "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
      "title": "Service",
      "content": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  },
  {
      "title": "Responsabilité",
      "content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  }
]

export default function Accordion() {

  const [accordion, setActiveAccordion] = useState(-1);

  function toogleAccordion(index) {
    if(index === accordion){
      setActiveAccordion(-1)
      return
    }
    setActiveAccordion(index)
  }

    return (

        <section className='container'>
          <div className="accordion__faq">
            {dataCollection.map((item, index) => (
              <div className='accordion__faq-gg' key={index} onClick={() => toogleAccordion(index)}>
                <div className='accordion__faq-heading'>
                  <h3 className={accordion === index ? "active" : ""} > {item.title} </h3>
                  {accordion === index ? (<><img src={Chevron} alt="" /></>) : (<><img src={Chevron} alt="" /></>)}
                </div>
                  
                <div className='accordion-text'>
                  <p className={accordion === index ? "active" : "inactive"}>
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
      </section>
    
    )
}
