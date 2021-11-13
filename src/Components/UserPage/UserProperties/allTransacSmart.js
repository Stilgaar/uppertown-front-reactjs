import { useState, useEffect } from "react";
import AllTransacDumb from "./allTransacDumb";

function AllTransacSmart(props){

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [wallet, setWallet]= useState()
    const userOnline = localStorage.getItem("id")
    const [ann, setAnn] = useState([]) 
    const [obj, setObj] = useState([])
    
    
    function getUserDatas () {
      
      const url = "http://localhost:1337/api/users/"+userOnline
      fetch(url,
        {
          method: "GET",
        }
      )
        .then((response) => response.json()) 
        .then((result) => {
          console.log("Success:", result);
          setWallet(result.stableCoins)
          setFirstName(result.firstname)
          setLastName(result.lastname)
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    
    }

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
          
            setObj(result)
            console.log("OBJET :"+result)
            console.log("OBJET SETTE :"+obj)
          
          
        })
        .catch((error) => {
          console.error("Error:", error);
        });

    }

    const alltransac = (obj) => {
      return obj.map((transac) => {
        if(userOnline==transac.userId){
          //console.log("USER ID MAP from collec: "+transac.userId+" localstore :"+ userOnline)
          return (
              <div>
                <AllTransacDumb/>
              </div>
           )
          }
      })
  }
    useEffect(() => {
    getUserDatas()
    getTransac()
    
}, [])

  return(
      <div>
        <h3>Bonjour {firstName} {lastName}, montant actuel de votre portefeuille : {wallet} </h3>
        {alltransac(obj)}
      </div>
  )
}

export default AllTransacSmart;