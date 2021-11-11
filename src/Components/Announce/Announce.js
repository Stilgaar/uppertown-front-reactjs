import React from "react";
import "./Announce.scss"
import { Link } from "react-router-dom";

function Announce({ announce }) {

  //fonction trouver sur google pour espacer les chiffres des prix
  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }
 

  return (
    <Link to={{ 
      pathname: '/announce-detail',
      state:{
        data: announce
      },
    }}  
    style={{textDecoration: "none", color: "black"}}
    className="announce-container">
      <div className="top-container">
        <img src={announce?.image[0]} alt="" />
      </div>
      <p className="image-bottom-grey-bar">{announce?.region} / {announce?.city}</p>
      <h6 className="announce-title">{announce?.title}</h6>
      <div className="bottom-container">
        <div className="price-block">
          <p className="title-block">Prix</p>
          <p className="data-block">{numberWithSpaces(announce.price)} €</p>
        </div>
        <div className="surface-block">
          <p className="title-block">m²</p>
          <p className="data-block">{announce.surface} m²</p>
        </div>
        <div className="bedroom-block">
          <p className="title-block">Chambre(s)</p>
          <p className="data-block">{announce.bedrooms} ch</p>
        </div>
      </div>
    </Link>
  );
}

export default Announce;
