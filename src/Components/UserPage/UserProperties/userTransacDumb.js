import React, { useState, useEffect } from "react";

function UserTransac() {

    const [obj, setObj] = useState([])

    //const userOnline = localStorage.getItem("id")
    //console.log("USERID : "+userOnline);

    function getTransac () {
      
        const url = "http://localhost:1337/api/transactions/history"
        fetch(url,
          {
            method: "GET",
          }
        )
          .then((response) => response.json()) 
          .then((result) => {
            console.log("Success:", result);
            setObj(result)
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      
      }

      useEffect(() => {
        getTransac()
    }, [])

    return (
        <>
          {obj.map((transac) => (
            <div>
            <p>Jetons acquis dans la propriété: {transac.token} tokens</p>
            <p>Montant de la transaction : {transac.sc} SC</p>
            <p>Date de la transaction : {transac.created_at}</p>
            </div>
          ))}
        </>
      );

}

export default UserTransac;