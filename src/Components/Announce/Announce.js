import React, { useState, useEffect } from "react";
import Axios from "axios";
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
          <img src={announce?.image[0]} />
          <img src={announce?.image1} />
          <img src={announce?.image2} />
          <img src={announce?.image3} />
          <img src={announce?.res} />
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
          <p>Prix du jeton: {announce.share_price}€</p>
          <p>Nombre de jetons: {announce.share_number}</p>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Announce;
