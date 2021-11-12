import React, { useState, useEffect } from "react";

function UserTransac() {

    const [obj, setObj] = useState([])

    const userOnline = localStorage.getItem("id")
    console.log("USERID TRANSAC DUMB : "+userOnline);

    function getTransac () {
      
        const url = "http://localhost:1337/api/transactions/history"
        fetch(url,
          {
            method: "GET",
          }
        )
          .then((response) => response.json()) 
          .then((result) => {
            console.log("Success TRANSAC :", result);
            setObj(result)
            
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      
      }

      const transacUser = (obj) => {
        return obj.map((transac) => {
          if(userOnline==transac.userId){
            console.log("USER ID MAP from collec: "+transac.userId+" localstore :"+ userOnline)
            return (
                <div>
                <p>Jetons acquis dans la propriété: {transac.token} tokens</p>
                <p>Montant de la transaction : {transac.sc} SC</p>
                <p>Date de la transaction : {transac.created_at}</p>
                </div>
             )
            }
        })
    }
      
      useEffect(() => {
        getTransac()
    }, [])

    return (
        <>
          {transacUser(obj)}
        </>
      );

}

export default UserTransac;