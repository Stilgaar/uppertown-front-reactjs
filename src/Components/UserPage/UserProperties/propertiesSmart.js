import { useState, useEffect } from "react";
import UserProperties from "./propertiesDumb";
import "./userTransac.css"

function AllPropertiesSmart() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [wallet, setWallet] = useState();
  const userOnline = localStorage.getItem("id");

  function getUserDatas() {
    const url = "http://localhost:1337/api/users/" + userOnline;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setWallet(result.stableCoins);
        setFirstName(result.firstname);
        setLastName(result.lastname);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    getUserDatas();
  }, []);

  return (
    <div>
     <UserProperties />
    </div>
  );
}

export default AllPropertiesSmart;
