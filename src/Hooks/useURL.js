import axios from "axios";
import env from "react-dotenv";
import { useState } from "react";

export default function useURL() {


  // UNE URL POUR LES GOUVERNER TOUS !
  const [url, setURL] = useState(env.URL)

  const getURL = () => {
    axios.get(`${env.URLLOCAL}/admin/hostnamelocal`).catch(err => null)
      .then(res => {
        if (res?.data === "local") {
          setURL(env.URLLOCAL);
        }
      })
      .catch(err => { if (err) { return null } })
  };

  const URLContextValue = {
    url: url,
    getURL: getURL
  };

  return [URLContextValue];
}



// AXIOS MAP
//
// const hurles = [
//   url1 annonces
//   url2 users
//   url3
// ]
//
// const getURL = async () => {
//   await axios
//     .all(hurles.map((hurle) => axios.get(hurle).catch(err => null)))
//     .then((res) => {
//       if (res?.[0]?.data === "url" && res?.[1]?.data === "local") {
//         setURL(env.URLLOCAL);
//       }
//       setURL(env.URL)
//     })
//     .catch(err => {
//       if (err) { return null }
//     });
// };
// 
