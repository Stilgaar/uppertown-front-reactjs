import React, { useState, useEffect } from "react";
import env from "react-dotenv";

function UserSalesListDumb() {
  const [obj, setObj] = useState([]);

  const userOnline = localStorage.getItem("id");
  let url = env.URLLOCAL || env.URL

  function getAllUpToSale() {
    fetch(`${url}/sales/history`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log("Success TRANSAC :", result);
        setObj(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const upToSaleUser = (obj) => {
    return obj.map((sales) => {
      if (userOnline == sales.userId) {
        //console.log("USER ID MAP from collec: "+transac.userId+" localstore :"+ userOnline)
        return (
          <div>
            <h6>Identifiant de la transaction : {sales._id}</h6>
            <h6>Identifiant du bien : {sales.announceId}</h6>
            <p>Quantité de tokens mis en vente : {sales.token} tokens</p>
            <p>Montant unitaire : {sales.sc} SC</p>
            <p>Type de transaction : Vente</p>
            <p>Statut : </p>
            <p>
              Mise en vente le :{" "}
              {sales?.created_at instanceof Date
                ? sales?.created_at.toLocaleDateString()
                : new Date(sales?.created_at).toLocaleDateString()}
            </p>
            <br />
            <br />
          </div>
        );
      }
    });
  };

  useEffect(() => {
    getAllUpToSale();
  }, []);

  return <>{upToSaleUser(obj)}</>;
}

export default UserSalesListDumb;
