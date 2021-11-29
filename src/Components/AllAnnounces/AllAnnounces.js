import React, { useState, useEffect } from "react";
import Axios from "axios";
import Announce from "../Announce/Announce";
import Selector from "../Selector/Selector";
import "./AllAnnounces.css";
import "./AllAnnounces.scss";

function AllAnnounces() {
  const [announcesList, setAnnouncesList] = useState([]);
  const [filteredList, setFilteredList] = useState();
  const [filterRegion, setFilterRegion] = useState("all");
  const [filterBedrooms, setFilterBedrooms] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [filterPrice, setFilterPrice] = useState(10000000)
  let url = `https://uppertown-back.osc-fr1.scalingo.io` || `http://localhost:1337`
  //Au chargement fait un requete pour recuperer toutes les annonces de la BDD
  useEffect(() => {
    Axios.get(`${url}api/announces/allAnnounces`).then(
      (response) => {
        //Place la reponse dans les states
          //State des annonces global
        setAnnouncesList(response.data);
          //State des annonces filtrées, initialisé avec toutes les annonces
        setFilteredList(response.data);
      }
    );
  }, []);
  
  //A chaque changement dans les filtres
  //passe a la moulinette les annonces
  useEffect(() => {
    //1: prend toutes les annonces et les filtre par rapport au filtre de region et return un array
    const filteredByRegion = announcesList.filter((announce) =>  verifyRegion(announce))
    //2: prend l'array du dessus et le re filtre par rapport au filtre du nb de chambre et return un array
    const filteredByBedrooms = filteredByRegion.filter((announce) => verifyBedrooms(announce))
    //3: prend l'array du dessus et le re filtre par rapport au filtre du type
    const filteredByType =  filteredByBedrooms.filter((announce) => verifyType(announce))
    //4: prend l'array du dessus et le re filtre par rapport au filtre du prix
    const filteredByPrice = filteredByType.filter((announce) => verifyPrice(announce))
    // le resultat est mis dans le setter
    setFilteredList(filteredByPrice);
  }, [filterRegion, filterBedrooms, filterPrice, filterType] )

  //fonction qui filtre par rapport a la region
  const verifyRegion = (announce) => {
    //Si le filtre region = all
    if (filterRegion === "all") {
      return announce
      // Si la region de l'annonce = la region du filtre
    } else if (announce.region === filterRegion) {
      return announce
    }
  }
  //fonction qui filtre par rapport au nb de chambre
  const verifyBedrooms = (announce) => {
    //si le filtre nb de chambre = all
    if (filterBedrooms === "all") {
      return announce
      //si le nb de chambre de l'annonce = le filtre nb de chambre
    } else if (announce.bedrooms === filterBedrooms) {
      return announce
      //si le filtre du nb de chambre = 7 et que l'annonce a 7 chambre et +
    } else if (filterBedrooms === 7 && announce.bedrooms >= 7) {
      return announce
    }
  }
  //fonction qui filtre par rapport au prix
  const verifyPrice = (announce) => {
    //si le prix du bien est inf ou egale au filtre du prix
    if (announce.price <= filterPrice) {
      return announce
    } 
  }
  //fonction qui filtre par rapport au type
  const verifyType = (announce) => {
    if (filterType === "all") {
      return announce
    } else if (announce.type === filterType) {
      return announce
    } 
  }
  
  return (
    <div className="announces-page-container">
        <Selector
          filterRegion={filterRegion} setFilterRegion={setFilterRegion} 
          filterBedrooms={filterBedrooms} setFilterBedrooms={setFilterBedrooms}
          filterPrice={filterPrice} setFilterPrice={setFilterPrice}
          filterType={filterType} setFilterType={setFilterType}
        />
        <div className="announces-page">
          {filteredList &&
            filteredList.map((announce, index) => {
              return (
                <Announce announce={announce} key={index}/>
            );
          })}
      </div>
    </div>
  );
}

export default AllAnnounces;
