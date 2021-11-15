import React, { useState, useEffect } from "react";

function UserTransac() {
  const [obj, setObj] = useState([]);

  const userOnline = localStorage.getItem("id");

  function getTransac() {
    const url = "http://localhost:1337/api/transactions/history";
    fetch(url, {
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

  const transacUser = (obj) => {
    return obj.map((transac) => {
      if (userOnline == transac.userId) {
        //console.log("USER ID MAP from collec: "+transac.userId+" localstore :"+ userOnline)
        return (
          <div>
            <h6>Identifiant de la transaction : {transac._id}</h6>
            <h6>Identifiant du bien : {transac.announceId}</h6>
            <div>
              <img src={transac.image}></img>
            </div>
            <p>{transac.title}</p>
            <p>{transac.content}</p>
            <p>{transac.type}</p>
            <p>Jetons acquis dans la propriété: {transac.token} tokens</p>
            <p>Montant de la transaction : {transac.sc} SC</p>
            <p>Type de transaction : Achat</p>
            <p>Prix du bien au moment de l'achat : {transac.price}</p>
            <p>
              Date de la transaction :{" "}
              {transac?.created_at instanceof Date
                ? transac?.created_at.toLocaleDateString()
                : new Date(transac?.created_at).toLocaleDateString()}
            </p>
            <br/>
            <br/>
          </div>
        );
      }
    });
  };

  useEffect(() => {
    getTransac();
  }, []);

  return <>{transacUser(obj)}</>;
}

export default UserTransac;
