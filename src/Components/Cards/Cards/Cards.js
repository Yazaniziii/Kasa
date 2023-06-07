import React from "react";
import Data from "../../../Datas/data.json";
import { Link } from "react-router-dom";
import "./Cards.css";

export default function Cards() {
  return (
    <main className="main">
      <div className="mainContainer">
        {Data.map((card) => (
          <div className="mainCards" key={card.id}>
            <Link to={`/products/${card.id}`}>
              <img className="mainCardsImg" src={card.cover} alt="Cover" />
            </Link>
            <p className="mainCardsTitle">{card.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
