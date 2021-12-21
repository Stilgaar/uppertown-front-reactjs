import React, { useState, useEffect } from "react";
import './userTransac.css'
import useURL from '../../../Hooks/useURL';

function UserProperties() {
  const [obj, setObj] = useState([]);
  const [url] = useURL()
  const userOnline = localStorage.getItem("id");

  function getProp() {

    fetch(`${url}/api/properties/allProperties`, {
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
          <div className="userroprieties">
            <div>Référence du bien : {properties.announceId}</div>
            <div>{properties.title}</div>
            <div>{properties.content}</div>
            <div>{properties.type}</div>
            <div>Superficie : {properties.surface} </div>
            <div>Total des Jetons acquis dans la propriété: {properties.totalToken} tokens</div>
            <div>Ville : {properties.city}</div>
            <div>Region : {properties.region}</div>
            <div>Loyer annuel : {properties.gross_rent_by_year}</div>
            <div>Différentes options : {properties.options}</div>
            <img className="transacuser" src={properties.image[0]} />
          </div>
        );
      }
    });
  };

  useEffect(() => {
    getProp();
  }, []);

  return (<><h3>Toutes les transactions</h3>
    {propList(obj)}</>)
}

export default UserProperties;
