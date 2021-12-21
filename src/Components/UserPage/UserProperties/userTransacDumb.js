import React, { useState, useEffect } from "react";
import './userTransac.css'
import env from "react-dotenv";

function UserTransacImmo() {
  const [obj, setObj] = useState([]);
  let url = env.URLLOCAL || env.URL

  const userOnline = localStorage.getItem("id");

  function getTransac() {

    fetch(`${url}api/transactions/history`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setObj(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const transacUser = (obj) => {
    return obj.map((transac) => {
      if (userOnline == transac.userId) {
        return (
          <div className="userroprieties">
            <div>Référence transaction : {transac._id}</div>
            <div>Référence du bien : {transac.announceId}</div>
            <div>Bien : {transac.title} // Type de bien : {transac.type}</div>
            <div>Jetons acquis dans la propriété: {transac.token} tokens</div>
            <div>Montant de la transaction : {transac.sc} SC</div>
            <div>Prix du bien au moment de l'achat : {transac.price}</div>
            <div>Date de la transaction : {transac?.created_at}</div>
            <img className="transacuser" src={transac.image[0]}></img>
          </div>
        );
      }
    });
  };

  useEffect(() => {
    getTransac();
  }, []);

  return <><h3>Parts de biens immobiliers dans lequel nous détennons des tokens</h3>
    {transacUser(obj)}</>;
}

export default UserTransacImmo;
