import { useState, useEffect } from "react";
import UserProperties from "./propertiesDumb";
import "./userTransac.css"

function AllPropertiesSmart() {
  const userOnline = localStorage.getItem("id");
  let url = `https://uppertown-back.osc-fr1.scalingo.io` || `http://localhost:1337`

  function getUserDatas() {
      fetch(`${url}/api/users/${userOnline}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
                           console.log(result)})
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
