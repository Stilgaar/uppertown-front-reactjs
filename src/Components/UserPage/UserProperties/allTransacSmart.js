import { useState, useEffect } from "react";
import AllTransacDumb from "./allTransacDumb";
import "./userTransac.css"

function AllTransacSmart() {
  const userOnline = localStorage.getItem("id");
  let url = `https://uppertown-back.osc-fr1.scalingo.io` || `http://localhost:1337`

  function getUserDatas() {
  
    fetch(`${url}/api/users/${userOnline}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result); })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    getUserDatas();
  }, []);

  return (
    <div>
          <AllTransacDumb />
    </div>
  );
}

export default AllTransacSmart;
