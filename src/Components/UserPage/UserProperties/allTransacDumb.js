import UserTransac from "./userTransacDumb";
import "./userTransac.css";
import { useState, useEffect } from "react";

function AllTransacDumb() {
  const [ann, setAnn] = useState([]);
  const [obj, setObj] = useState({ user: "", announce: "" });

  function getTransac() {
    //on prend toutes les annonces :

    const todb = "http://localhost:1337/api/announces/allannounces";
    fetch(todb, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("Success ALL ANNONCES:", res);
        setAnn(res);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // on essaie de filtrer :

    const url = "http://localhost:1337/api/transactions/history";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success TRANSAC :", result);
        let userId = [];
        for (let i = 0; i < result.length; i++) {
          userId.push(result[i].userId);
          setObj({ ...obj, user: result[i].userId });
        }
        let announceId = [];
        for (let i = 0; i < result.length; i++) {
          announceId.push(result[i].announceId);
          setObj({ ...obj, announce: result[i].announceId });
        }
        //setObj(announce)
        console.log("ANNONCE :" + announceId);
        console.log("USER :" + userId);
        console.log("USER SETTE :" + obj.user);
        console.log("ANN SETTE :" + obj.announce);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function getAnnDatas() {
    //on prend toutes les annonces :

    const todb = "http://localhost:1337/api/announces/allannounces";
    fetch(todb, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("Success ALL ANNONCES:", res);
        setAnn(res);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const transacUser = (ann) => {
    return ann.map((ann) => {
      if (ann._id === obj.announce) {
        console.log(
          "ANNONCE ID MAP : " + obj.user + " ANNBASIC :" + obj.announce
        );
        return (
          <div>
            <UserTransac />
          </div>
        );
      }
    });
  };

  useEffect(() => {
    getAnnDatas();
    getTransac();
  }, []);

  return <>{transacUser(ann)}</>;
}

export default AllTransacDumb;
