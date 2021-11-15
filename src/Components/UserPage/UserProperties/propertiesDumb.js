import React, { useState, useEffect } from "react";

function UserProperties() {
  const [obj, setObj] = useState([]);

  const userOnline = localStorage.getItem("id");

  function getProp() {
    const url = "http://localhost:1337/api/properties/allProperties";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
         console.log("Success Properties :", result);
        setObj(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const propList = (obj) => {
    return obj.map((properties) => {
      if (userOnline == properties.idUser) {
        return (
          <div>
            
            <h6>Identifiant du bien : {properties.announceId}</h6>
            <div>
              <img src={properties.image}/>
            </div>
            <p>{properties.title}</p>
            <p>{properties.content}</p>
            <p>{properties.type}</p>
            <p>Superficie : {properties.surface} </p>
            <p>Total des Jetons acquis dans la propriété: {properties.totalToken} tokens</p>
            <p>Ville : {properties.city}</p>
            <p>Region : {properties.region}</p>
            <p>Loyer annuel : {properties.gross_rent_by_year}</p>
            <p>Différentes options : {properties.options}</p>
            <br/>
            <br/>
          </div>
        );
      }
    });
  };

  useEffect(() => {
    getProp();
  }, []);

  return <>{propList(obj)}</>;
}

export default UserProperties;
