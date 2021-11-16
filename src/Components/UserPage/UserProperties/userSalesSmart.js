import { useState, useEffect } from "react";
import UserSalesListDumb from "./userSalesDumb";
import "./userTransac.css"

function AllUpToSales() {
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
        console.log("Success:", result);
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
      <h3>
        Bonjour {firstName} {lastName}, montant actuel de votre portefeuille :{" "}
        {wallet}{" "}
      </h3>
      <UserSalesListDumb/>
    </div>
  );
}

export default AllUpToSales;
