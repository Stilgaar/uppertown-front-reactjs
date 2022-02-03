import React, { useState, useEffect, useCallback } from "react";
import Announce from "./Announce/Announce"
import Selector from "../Selector/Selector";
import useFetch from "../../Hooks/useFetch";
import { useCon } from "../../Hooks/useCon";

function AllAnnounces() {
  const { url } = useCon()
  const [filteredList, setFilteredList] = useState();
  const [filterRegion, setFilterRegion] = useState("all");
  const [filterBedrooms, setFilterBedrooms] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [filterPrice, setFilterPrice] = useState(10000000)

  //Au chargement fait un requete pour recuperer toutes les annonces de la BDD
  //Place la reponse dans les states
  //State des annonces global
  //State des annonces filtrées, initialisé avec toutes les annonces

  const { data: announcesList, refresh: annRefresh, pending, error } = useFetch(`${url}/api/announces/allAnnounces`)

  console.log(announcesList)

  useEffect(() => { annRefresh() }, [annRefresh])

  //fonction qui filtre par rapport a la region
  const verifyRegion = useCallback((announce) => {
    //Si le filtre region = all
    if (filterRegion === "all") {
      return announce
      // Si la region de l'annonce = la region du filtre
    } else if (announce.region === filterRegion) {
      return announce
    }
  }, [filterRegion])

  //fonction qui filtre par rapport au nb de chambre
  const verifyBedrooms = useCallback((announce) => {
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
  }, [filterBedrooms])

  //fonction qui filtre par rapport au prix
  const verifyPrice = useCallback((announce) => {
    //si le prix du bien est inf ou egale au filtre du prix
    if (announce.price <= filterPrice) {
      return announce
    }
  }, [filterPrice])
  //fonction qui filtre par rapport au type
  const verifyType = useCallback((announce) => {
    if (filterType === "all") {
      return announce
    } else if (announce.type === filterType) {
      return announce
    }
  }, [filterType])

  //passe a la moulinette les annonces
  useEffect(() => {
    //1: prend toutes les annonces et les filtre par rapport au filtre de region et return un array
    const filteredByRegion = announcesList?.length > 0 && announcesList.filter((announce) => verifyRegion(announce))
    //2: prend l'array du dessus et le re filtre par rapport au filtre du nb de chambre et return un array
    const filteredByBedrooms = filteredByRegion?.length > 0 && filteredByRegion.filter((announce) => verifyBedrooms(announce))
    //3: prend l'array du dessus et le re filtre par rapport au filtre du type
    const filteredByType = filteredByBedrooms?.length > 0 && filteredByBedrooms.filter((announce) => verifyType(announce))
    //4: prend l'array du dessus et le re filtre par rapport au filtre du prix
    const filteredByPrice = filteredByType?.length > 0 && filteredByType.filter((announce) => verifyPrice(announce))
    // le resultat est mis dans le setter
    setFilteredList(filteredByPrice);
  }, [filterRegion, filterBedrooms, filterPrice, filterType, announcesList, verifyRegion, verifyType, verifyPrice, verifyBedrooms])



  return (
    <div className="container-xl bg-white p-1 br-xs">
      <h3 className="bg-primary text-white t-center font-xl br-xs ml-5 mr-5 mb-2 p-1">
        Annonces
      </h3>
      <Selector
        filterRegion={filterRegion} setFilterRegion={setFilterRegion}
        filterBedrooms={filterBedrooms} setFilterBedrooms={setFilterBedrooms}
        filterPrice={filterPrice} setFilterPrice={setFilterPrice}
        filterType={filterType} setFilterType={setFilterType}
      />
      <div className="global-page-container bg-white mt-3 p-2 br-xs">
        {pending && <div>Loading ... </div>}
        {error && <div>{error}</div>}
        {filteredList && filteredList.map((announce, index) => (
          <Announce announce={announce} key={index} />
        ))}
      </div>
    </div>
  );
}

export default AllAnnounces;
