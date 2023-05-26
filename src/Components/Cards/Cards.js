import React from "react";
import Data from '../../Datas/data.json';
import './Cards.css';

export default function Cards() {
  return (
    <main className="main">
      <div className="mainContainer">
        {Data.map((card) => (
          <div className="mainCards" key={card.id}>
            <a href="#">
                <img className="mainCardsImg" src={card.cover} alt="Cover" />
            </a>
            <p className="mainCardsTitle">{card.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
}