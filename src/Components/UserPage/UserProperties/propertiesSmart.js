import { useState, useEffect } from "react";
import UserProperties from "./propertiesDumb";
import "./userTransac.css"
import useURL from '../../../Hooks/useURL';

function AllPropertiesSmart() {
  const userOnline = localStorage.getItem("id");
  const [url] = useURL()

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
