import UserTransac from "./userTransacDumb";
import "./userTransac.css";
import { useState, useEffect } from "react";
import UserTransacImmo from "./userTransacDumb";
import useURL from '../../../Hooks/useURL';

function AllTransacDumb() {
  const [ann, setAnn] = useState([]);
  const [obj, setObj] = useState({ user: "", announce: "" });
  const [url] = useURL()


  function getTransac() {

    fetch(`${url}/api/announces/allannounces`, {
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

    fetch(`${url}/api/transactions/history`, {
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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function getAnnDatas() {

    fetch(`${url}/api/announces/allannounces`, {
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
            <UserTransacImmo />
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
