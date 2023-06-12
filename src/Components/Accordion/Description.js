import React, { useState, useEffect, useRef } from 'react';
import './Descriptions.css';
import Chevron from '../../assets/chevron.svg';

export default function Description(props) {
    const [toggleDescription, setToggleDescription] = useState(false);
    const [toggleEquipments, setToggleEquipments] = useState(false);

    const [heightDescription, setHeightDescription] = useState();
    const [heightEquipments, setHeightEquipments] = useState();

    const refHeightDescription = useRef();
    const refHeightEquipments = useRef();

    useEffect(() => {
        setHeightDescription(`${refHeightDescription.current.scrollHeight}px`);
        setHeightEquipments(`${refHeightEquipments.current.scrollHeight}px`);
    }, []);

    const toggleState = (section) => {
        if (section === 'description') {
            setToggleDescription(!toggleDescription);
        } else if (section === 'equipments') {
            setToggleEquipments(!toggleEquipments);
        }
    };

    return (
        <section className='containerDescription'>
            <div className="description">
                <button onClick={() => toggleState('description')} className="accordion-visible">
                    <span>Description</span>
                    <img className={toggleDescription && 'active'} src={Chevron} />
                </button>

                <div
                    className={toggleDescription ? 'accordion-toggle animated' : 'accordion-toggle'}
                    style={{ height: toggleDescription ? `${heightDescription}` : '0px' }}
                    ref={refHeightDescription}
                >
                    <p aria-hidden={toggleDescription ? 'true' : 'false'}>{props.description}</p>
                </div>
            </div>

            <div className="description">
                <button onClick={() => toggleState('equipments')} className="accordion-visible">
                    <span>Equipements</span>
                    <img className={toggleEquipments && 'active'} src={Chevron} />
                </button>

                <div
                    className={toggleEquipments ? 'accordion-toggle animated' : 'accordion-toggle'}
                    style={{ height: toggleEquipments ? `${heightEquipments}` : '0px' }}
                    ref={refHeightEquipments}
                >
                    <ul className='descriptionEquipments' aria-hidden={toggleEquipments ? 'true' : 'false'}>
                        {props.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
