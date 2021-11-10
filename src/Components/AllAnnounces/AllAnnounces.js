import React, { useState, useEffect } from "react";
import Axios from "axios";
import Announce from "../Announce/Announce";
import Selector from "../Selector/Selector";
import "./AllAnnounces.css";
import "./AllAnnounces.scss";


function AllAnnounces() {
  const [announcesList, setAnnouncesList] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredList, setFilteredList] = useState();
  const [filterRegion, setFilterRegion] = useState();
  const [filterBedrooms, setFilterBedrooms] = useState();

  useEffect(() => {
    Axios.get("http://localhost:1337/api/announces/allAnnounces").then(
      (response) => {
        setAnnouncesList(response.data);
        setFilteredList(response.data);
        console.log(response.data);
      }
    );
  }, []);

  useEffect(() => {
    const filteredList = announcesList.filter((announce) =>
      verifyCorrespondance(announce)
    );
    setFilteredList(filteredList);
    console.log("liste filtrée", filteredList);
  }, [filter, announcesList]);

  useEffect(() => {
    console.log(filterBedrooms);
    
  }, [filterBedrooms])

  function handleInput(e) {
    setFilter(e.target.value);
  }

  function verifyCorrespondance(announce) {
    let regex = new RegExp(filter.toLowerCase());
    if (regex.test(announce?.city?.toLowerCase()) || regex.test(announce?.region?.toLowerCase()) || regex.test(announce?.zip_code)) {
      return announce;
    }
  }

  

  return (
    <div className="announces-page-container">
      <div className="announces-search">
          <label>Cherchez un bien par ville, code postal ou departement:</label>
        <input
          type="text"
          placeholder="rechercher par ville, code postal ou departement"
          onChange={(e) => handleInput(e)}
        />
      </div>
        <Selector filterRegion={filterRegion} setFilterRegion={setFilterRegion} 
        filterBedrooms={filterBedrooms} setFilterBedrooms={setFilterBedrooms}/>
      <div className="announces-page">
        {filteredList &&
          filteredList.map((announce, index) => {
            return (
              <div key={index}>
                <Announce announce={announce} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AllAnnounces;
