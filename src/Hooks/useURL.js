import axios from "axios";
import env from "react-dotenv";
import { useState } from "react";

export default function useURL() {

  // UNE URL POUR LES GOUVERNER TOUS !
  const [url, setURL] = useState(env.URLLOCAL)

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