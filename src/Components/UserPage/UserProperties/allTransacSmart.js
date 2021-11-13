import { useState, useEffect } from "react";
import AllTransacDumb from "./allTransacDumb";

function AllTransacSmart() {
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
      <AllTransacDumb />
    </div>
  );
}

export default AllTransacSmart;
