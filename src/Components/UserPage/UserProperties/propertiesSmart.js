import { useState, useEffect } from "react";
import UserProperties from "./propertiesDumb";
import "./userTransac.css"
import env from "react-dotenv";

function AllPropertiesSmart() {
  const userOnline = localStorage.getItem("id");
  let url = env.URLLOCAL || env.URL

  function getUserDatas() {
    fetch(`${url}/api/users/${userOnline}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
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
