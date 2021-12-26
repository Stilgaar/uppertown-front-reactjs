import axios from "axios";
import env from "react-dotenv";
import { useEffect } from "react";

export default function useURL() {
  let hurles = [
    `${env.URL}/admin/hostnameurl`,
    `${env.URLLOCAL}/admin/hostnamelocal`,
  ];

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
      .catch(err => { if (err) { return null }
      });
  };

  useEffect(() => {
    const isUrl = localStorage.getItem("@uppertown-url")
    if (!isUrl) {
      getURL();
    }
  },[])

  const url = localStorage.getItem("@uppertown-url");
  return [url];
}
