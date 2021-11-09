import React from "react";
import "./Announce.css"
import { Link } from "react-router-dom";

function Announce({ announce }) {
 

  return (
    <Link to={{ 
      pathname: '/announce-detail',
      state:{
        data: announce
      },
    }}  
    style={{textDecoration: "none", color: "black"}}>
    <div className="announce-container" href="/announce-detail">
      <div className="announce-upper-container">
        <div className="announce-container-image">
          <img alt="" src={announce?.image?.[0]} />
        </div>

        <div className="announce-container-title">
          <h3>{announce.title}</h3>
        </div>

        <div className="announce-container-content">
          <p>{announce.type}</p>
          <p>{announce.content}</p>
        </div>
      </div>
      <div className="announce-lower-container">
        <div className="announce-container-city">
          <p>Ville: {announce.city}</p>
          <p>Code postal: {announce.zip_code}</p>
          <p>Departement: {announce.region}</p>
        </div>

        <div className="announce-container-price">
          <p>Prix total: {announce.price}€</p>
          <p>Prix du jeton: {announce.share_price} SC</p>
          <p>Nombre de jetons: {announce.share_number}</p>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Announce;
