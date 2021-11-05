import React, { useState, useEffect } from "react";
//import Axios from "axios";
import "./AllAnnounces.css"
import Swal from "sweetalert2";

function Announce({ announce }) {

    function deleteAnnounces () {

        const url = "http://localhost:1337/api/announces/"+announce._id

        fetch(url, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            
          }).then(() => {
            Swal.fire({
              title: "Annonce supprimée !",
              //text: "Thanks",
              type: "success",
            });
            // vérification :
            console.log("Uploaded images : " + announce._id);
          });
        }

   /* useEffect(() => {
        deleteAnnounces()
      }, []);*/

  return (
    <div className="announce-container">
      <div className="announce-upper-container">
        <ul>
          <li>
          <a href="#" class="delete" onClick={deleteAnnounces}>Supprimer l'annonce</a>
          </li>
          <li>
          <a href="#" class="update">Modifier l'annonce</a>
          </li>
          </ul>
        <div className="announce-container-image">
          <img src={announce.image[0]} />
          <img src={announce?.gallery[0]?.data_url} />
          <img src={announce?.gallery[1]?.data_url} />
          <img src={announce?.gallery[2]?.data_url} />
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
          <p>Région: {announce.region}</p>
        </div>

        <div className="announce-container-price">
          <p>Prix total: {announce.price}€</p>
          <p>Prix de la part: {announce.share_price}€</p>
          <p>Nombre de parts: {announce.share_number}</p>
        </div>
      </div>
    </div>
  );
}

export default Announce;
