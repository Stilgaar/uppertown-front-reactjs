import React, { useState, useEffect } from "react";
import Axios from "axios";
import Announce from "./AnnounceAdmin";
import "./AllAnnounces.css";
import useURL from '../../Hooks/useURL'

function AllAnnouncesAdmin() {
  const [announcesList, setAnnouncesList] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredList, setFilteredList] = useState();

  const [url] = useURL()

  useEffect(() => {
    Axios.get(`${url}/api/announces/allAnnounces`).then(
      (response) => {
        setAnnouncesList(response.data);
        setFilteredList(response.data);
        console.log(response.data);
      }
    );
  }, []);

  useEffect(() => {
    const filteredList = announcesList.filter(announce => verifyCorrespondance(announce));
    setFilteredList(filteredList);
    console.log("liste filtrée", filteredList);
  }, [filter])

  function handleInput(e) {
    setFilter(e.target.value);
  }


  function verifyCorrespondance(announce) {
    let regex = new RegExp(filter.toLowerCase());
    let result = regex.test(announce.city.toLowerCase());
    if (result) {
      return announce;
    }
  }

  return (
    <>
      <h2>Pages Annonces</h2>
      <div className="announces-search">
        <input type="text" placeholder="rechercher par ville"
          onChange={(e) => handleInput(e)} />
        <button>rechercher</button>
      </div>
      <div className="announces-page">
        {filteredList && filteredList.map((announce, index) => {
          return (
            <div key={index}>
              <Announce announce={announce} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllAnnouncesAdmin;
