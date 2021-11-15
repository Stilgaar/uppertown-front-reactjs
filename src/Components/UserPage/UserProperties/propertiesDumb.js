import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import Axios from "axios";

function UserProperties() {
  const [obj, setObj] = useState([]);
  const [sales, setSales] = useState({tokenForSale:"",tokenPrice:""})
  const [currentShareNumber, setCurrentShareNumber]= useState()
  const [itemId, setItemId]= useState()
  const [limitToken, setLimitToken]= useState("")
  const d = new Date();

      function getTokens(e){
          setSales({...sales, tokenForSale:e.target.value})
          console.log(e.target.value)
      }

      function getSharePrice(e){
          setSales({...sales, tokenPrice:e.target.value})
          console.log(e.target.value)
      }


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

  function sendUpForSale (){
    let announceId = document.querySelector("#hiddenItemid").value
    setItemId(announceId)
    console.log("HIDDENITEM :"+announceId)

    let currentToken = document.querySelector("#hiddentoken").value
        console.log("HIDDENTOKEN :"+currentToken)
        console.log("TOKENFORSALE: "+sales.tokenForSale)

        //le nombre de token dans l'annonce actuelle :
        const url2 = "http://localhost:1337/api/announces/"+announceId
            fetch(url2,
              {
                method: "GET",
              }
            )
              .then((response) => response.json()) 
              .then((result) => {
              console.log("Success SHARE NUMBER "+result.share_number);
              setCurrentShareNumber(result.share_number)
              })
              .catch((error) => {
                console.error("Error:", error);
              });

    if(Number(sales.tokenForSale) < Number(currentToken)){

      const data = {
        userId:userOnline,
        announceId:announceId,
        token:sales.tokenForSale,
        sc:sales.tokenPrice,
        created_at:d
    }

      const url = "http://localhost:1337/api/sales/sell"
  
            Axios.post(url,data)
            .then(res=>console.log(res))
            .then(Swal.fire({
            title: "Transaction effectuée !",
            //text: "Thanks",
            type: "success",
            }))
            .catch(err=>console.log(err))
          
          }else{
            setLimitToken("Vous ne pouvez pas mettre en vente une quantité de token supérieure à celle que vous possédez en propre")
            return false;
          }

            
      /*const updateToken = "http://localhost:1337/api/announces/"+announceId; //chemin vers le backend
      fetch(updateToken, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          share_number: sales.tokenForSale + currentShareNumber
          //share_price: announce.price/(announce.share_number - invest)
        }),
      }).then(() => {
        // vérification :
        console.log("New share number : " + (sales.tokenForSale + currentShareNumber));
        });*/
  

  
}

  

  const propList = (obj) => {
    return obj.map((properties) => {
      if (userOnline == properties.idUser) {
        return (
          <div>
            
            <h6>Identifiant du bien : {properties.announceId}</h6>
            <input id="hiddenItemid" type="hidden" value={properties.announceId}/>
            <div>
              <img src={properties.image}/>
            </div>
            <p>{properties.title}</p>
            <p>{properties.content}</p>
            <p>{properties.type}</p>
            <p>Superficie : {properties.surface} </p>
            <p>Total des Jetons acquis dans la propriété: {properties.totalToken} tokens</p>
            <input id="hiddentoken" type="hidden" value={properties.totalToken}/>
            <p>Ville : {properties.city}</p>
            <p>Region : {properties.region}</p>
            <p>Loyer annuel : {properties.gross_rent_by_year}</p>
            <p>Différentes options : {properties.options}</p>
            <br/>
            <h6>Mettre vos tokens en vente</h6>
            <p>Choisissez le nombre de tokens :</p>
            <input type="number" onChange={getTokens}/><br/>
            <p>Choisissez leur prix au détail :</p>
            <input type="number" onChange={getSharePrice}/><br/><br/>
            <button type="submit" onClick={sendUpForSale}>Mettre en vente</button>
            <p>{limitToken}</p>
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
