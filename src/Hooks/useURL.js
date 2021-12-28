import axios from "axios";
import env from "react-dotenv";
import { useEffect, useState } from "react";

export default function useURL() {
  let hurles = [
    `https://uppertown-back.osc-fr1.scalingo.io/admin/hostnameurl`,
    `http://localhost:1337/admin/hostnamelocal`,
  ];

  const [url, setURL] = useState()

  const getURL = () => {
    axios
      .all(hurles.map((hurle) => axios.get(hurle).catch(err => null)))
      .then((res) => {
        if (res?.[0]?.data === "url" && res?.[1]?.data === "local") {
          localStorage.setItem("@uppertown-url", env.URLLOCAL);
        }
        if (res?.[0]?.data === "url" && res?.[1]?.data === undefined) {
          localStorage.setItem("@uppertown-url", env.URL);
        }
      })
      .catch(err => {
        if (err) { return null }
      });
  };

  useEffect(() => {
    const isUrl = localStorage.getItem("@uppertown-url")
    if (!isUrl) {
      getURL();
    } else {
      setURL(isUrl)
    }
  }, [])

  const URLContextValue = {
    url: url,
    getURL: getURL
  };


  return [URLContextValue];
}
