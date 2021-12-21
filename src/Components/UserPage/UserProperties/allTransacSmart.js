import { useState, useEffect } from "react";
import AllTransacDumb from "./allTransacDumb";
import "./userTransac.css"
import env from "react-dotenv";

function AllTransacSmart() {
  const userOnline = localStorage.getItem("id");
  let url = env.URLLOCAL || env.URL

  function getUserDatas() {

    fetch(`${url}/api/users/${userOnline}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
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
      <AllTransacDumb />
    </div>
  );
}

export default AllTransacSmart;
