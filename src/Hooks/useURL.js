import env from "react-dotenv";
// import { useState } from "react";

// UNE URL POUR LES GOUVERNER TOUS !
export default function useURL() {
  // s'il est en ligne, mettre env.URL à la place de env.URLLOCAL dans le state
  // le hook choisira l'url qu'il faut en fonction si le back est online en local
  // const [url, setURL] = useState(env.URLLOCAL)
  const url = env.URLLOCAL

  // VU QUE JE TRAVAILLE QUE DANS LE BACK LOCAL MAINTENATN JAI DESACTIVER CETTE FONCTION
  //  const getURL = () => {
  //    axios.get(`${env.URLLOCAL}/admin/hostnamelocal`).catch(err => null)
  //      .then(res => {
  //        if (res?.data === "local") {
  //          setURL(env.URLLOCAL);
  //        }
  //      })
  //      .catch(err => { if (err) { return null } })
  //  };

  return [url];
}