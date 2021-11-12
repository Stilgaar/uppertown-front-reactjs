import UserTransac from "./userTransacDumb";
import "./userProperties.css"
import { useState, useEffect } from "react";

function UserPropertiesDumb(props) {

    const [ann, setAnn] = useState([]) 
    const userOnline = localStorage.getItem("id")
    const [obj, setObj] = useState([])
    
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
          let announce = [];    
            for(let i=0;i<result.length;i++){ 
            announce.push(result[i].announceId);
            setObj(result[i].announceId)
            }
            //setObj(result.announce_id)
            console.log("OBJET :"+obj)
          
          
        })
        .catch((error) => {
          console.error("Error:", error);
        });

        const todb = "http://localhost:1337/api/announces/allannounces"
        fetch(todb,
          {
            method: "GET",
          }
        )
          .then((response) => response.json()) 
          .then((res) => {
            console.log("Success ALL ANNONCES:", res);
            setAnn(res)
            
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      
    
    }
    
     const transacUser = (ann) => {
        return ann.map((item) => {
          if(item.obj===item._id){
            console.log("USER ID MAP : "+item.obj, userOnline)
            return (
              
              <div>
                    <h2>Annonce en détail</h2>
                    <div>ID de l'annonce : {item._id}</div>
                    <div className="detail-container">
                      <div className="detail-upper-container">
                        <div className="detail-image-container">
                          <img src={item.image} alt="Photos du bien" />
                        </div>
                        <div className="detail-description-container">
                        <h3>{item.title}</h3>
                          <p>{item.type}</p>
                          <p>{item.content}</p>
                        </div>
                      </div>
                      <div className="detail-lower-container">
                        <div className="detail-economic-container">
                          <p>Identifiant du bien: {item?.announceId} €</p>
                          <p>Prix du bien: {item?.price} €</p>
                          <p>Prix actuel du jeton: { //props?.share_price.toFixed(2)
                          item?.share_price} SC</p>
                          <p>Nombre de jetons restants: {item?.share_number} </p>
                           
                        </div>
                        <div className="detail-economic-container">
                        <h6>Liste des transactions (Achat, unité: stable coins) : </h6>
                        <UserTransac/>
                        </div>
                        <div className="detail-rent-container">
                          <p>Loyer par an brut: {item.gross_rent_by_year} €</p>
                          <p>Loyer par mois brut: {item.gross_rent_by_year / 12} €</p>
                          <p>Coûts mensuels: {item.monthly_cost} €</p>
                          <p>
                            Loyer net par mois:{" "}
                            {item.gross_rent_by_year / 12 - item.monthly_cost} €
                          </p>
                          <p>Gain mensuel par jeton: {(((item.gross_rent_by_year / 12) - item.monthly_cost) / item.share_number).toFixed(2)} €</p>
                        </div>
                        <div className="detail-geographical-container">
                          <p>Ville: {item.city}</p>
                          <p>Département: {item.region}</p>
                          <p>Code postal: {item.zip_code}</p>
                        </div>
                      </div>
                    </div>
                </div>
            
            )
            }
        })
    }

    useEffect(() => {
    //getAnnDatas()
    getTransac()
  }, [])

  return(
    <>
        {transacUser(ann)}
            
    </>
  )
    
  }
  
  export default UserPropertiesDumb;