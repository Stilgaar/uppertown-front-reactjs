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

  useEffect(() => {
    Axios.get("http://localhost:1337/api/announces/allAnnounces").then(
      (response) => {
        setAnnouncesList(response.data);
        setFilteredList(response.data);
        console.log(response.data);
      }
    );
  }, []);

  //____________________________________

  useEffect(() => {
    const filteredList = announcesList.filter((announce) =>
      verifyCorrespondance(announce)
    );
    setFilteredList(filteredList);
    console.log("liste filtrée", filteredList);
  }, [filterRegion, filterBedrooms]);

  useEffect(() => {
    console.log(filterRegion);
    console.log(filterBedrooms);
  }, [filterRegion, filterBedrooms]);

  //____________________________________

  function verifyCorrespondance(announce) {
    if (filterRegion === "all") {
      if (filterBedrooms === "all") {
        return announce;
      } else if (announce.bedrooms === filterBedrooms) {
        return announce;
      }
    } else {
      if (filterBedrooms === "all") {
        if (announce.region === filterRegion) {
          return announce;
        }
      } else if (
        announce.region === filterRegion &&
        announce.bedrooms === filterBedrooms
      ) {
        return announce;
      }
    }
  }

  return (
    <div className="announces-page-container">
      <div className="announces-search">
      <Selector
        filterRegion={filterRegion}
        setFilterRegion={setFilterRegion}
        filterBedrooms={filterBedrooms}
        setFilterBedrooms={setFilterBedrooms}
      />
      </div>
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
