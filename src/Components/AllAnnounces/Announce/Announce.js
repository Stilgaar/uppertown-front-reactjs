import React from "react";
import { Link } from "react-router-dom";

function Announce({ announce }) {

  return (
    <Link to={{
      pathname: '/announce-detail',
      state: {
        data: announce._id
      },
    }}
      style={{ textDecoration: "none", color: "black" }}
      className="card container col-12-md col-9-md col-6-lg col-4-xl animation-scale">

      <div>
        <img className="br-xs" src={announce?.image[0]} alt="" />
      </div>
      <p className="bg-primary text-white t-center p-075 br-xs">{announce?.region} / {announce?.city}</p>
      <h6 className="bg-secondary t-center text-white font-md br-xs m-1 ml-3 mr-3 p-075">{announce?.title} </h6>


      <div className="row display-f justify-center">
        <div className="card  col-12-md col-6-lg col-4-xl bg-white z-5 pl-2 pr-2">
          <p className="t-center text-primary fw-br">Prix</p>
          <p className="t-center text-secondary fw-br">{(announce?.price?.toLocaleString())} €</p>
        </div>
        <div className="card col-12-md col-6-lg col-4-xl bg-white z-5">
          <p className="t-center text-primary fw-br">m²</p>
          <p className="t-center text-secondary fw-br">{announce.surface} m²</p>
        </div>
        <div className="card col-12-md col-6-lg col-4-xl bg-white z-5">
          <p className="t-center text-primary fw-br">Chambre(s)</p>
          <p className="t-center text-secondary fw-br ">{announce.bedrooms} ch</p>
        </div>
      </div>

    </Link >
  );
}

export default Announce;
