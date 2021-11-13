import UserTransac from "./userTransacDumb";
import "./userTransac.css"
import { useState, useEffect } from "react";

function AllTransacDumb(props) {

    const [ann, setAnn] = useState([]) 
    const [obj, setObj] = useState({user:"",announce:""})
    const userOnline = localStorage.getItem("id")
    
    function getTransac () {

      //on prend toutes les annonces :

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
         /* let announceBasic = [];    
            for(let i=0;i<res.length;i++){ 
            announceBasic.push(res[i]._id);
            setAnnBasic(res[i]._id)
            }
          console.log("Success ANNBASIC:", announceBasic);*/
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      
      // on essaie de filtrer :

      const url = "http://localhost:1337/api/transactions/history"
      fetch(url,
        {
          method: "GET",
        }
      )
        .then((response) => response.json()) 
        .then((result) => {
          console.log("Success TRANSAC :", result);
          let userId = [];    
            for(let i=0;i<result.length;i++){ 
            userId.push(result[i].userId);
            setObj({...obj, user:result[i].userId})
            }
            let announceId = [];    
            for(let i=0;i<result.length;i++){ 
            announceId.push(result[i].announceId);
            setObj({...obj, announce:result[i].announceId})
            }
            //setObj(announce)
            console.log("ANNONCE :"+announceId)
            console.log("USER :"+userId)
            console.log("USER SETTE :"+obj.user)
            console.log("ANN SETTE :"+obj.announce)
          
          
        })
        .catch((error) => {
          console.error("Error:", error);
        });

    }
    
     const transacUser = (ann) => {
        return ann.map((ann) => {
          if(ann._id===obj.announce){
            console.log("ANNONCE ID MAP : "+obj.user + " ANNBASIC :" +obj.announce)
            return (
              
              <div>
                    <h2>Annonce en détail</h2>
                    <div>Identifiant du bien : {ann._id}</div>
                    <div className="detail-container">
                      <div className="detail-upper-container">
                        <div className="detail-image-container">
                          <img src={ann.image} alt="Photos du bien" />
                        </div>
                        <div className="detail-description-container">
                        <h3>{ann.title}</h3>
                          <p>{ann.type}</p>
                          <p>{ann.content}</p>
                        </div>
                      </div>
                      <div className="detail-lower-container">
                        <div className="detail-economic-container">
                          <p>Identifiant du bien: {ann?.announceId} €</p>
                          <p>Prix du bien: {ann?.price} €</p>
                          <p>Prix actuel du jeton: { //props?.share_price.toFixed(2)
                          ann?.share_price} SC</p>
                          <p>Nombre de jetons restants: {ann?.share_number} </p>
                           
                        </div>
                        
                        <div className="detail-rent-container">
                          <p>Loyer par an brut: {ann.gross_rent_by_year} €</p>
                          <p>Loyer par mois brut: {ann.gross_rent_by_year / 12} €</p>
                          <p>Coûts mensuels: {ann.monthly_cost} €</p>
                          <p>
                            Loyer net par mois:{" "}
                            {ann.gross_rent_by_year / 12 - ann.monthly_cost} €
                          </p>
                          <p>Gain mensuel par jeton: {(((ann.gross_rent_by_year / 12) - ann.monthly_cost) / ann.share_number).toFixed(2)} €</p>
                        </div>
                        <div className="detail-geographical-container">
                          <p>Ville: {ann.city}</p>
                          <p>Département: {ann.region}</p>
                          <p>Code postal: {ann.zip_code}</p>
                        </div>
                      </div>
                    </div>
                    {/*LISTE DES TRANSACTIONS : */}
                    <div className="detail-economic-container">
                        <h6>Liste des transactions (Achat, unité: stable coins) : </h6>
                        <UserTransac/>
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
  
  export default AllTransacDumb;