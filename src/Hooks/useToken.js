import axios from "axios";
import { useState, useEffect } from "react";

function UseToken(url) {
    const [user, setUser] = useState({});
    let isLog = user !== null

    const hardRefresh = () => {
        let localToken = localStorage.getItem("@updownstreet-token")
        if (localToken === null) {
            return setUser(null)
        }

        axios
            .get(url, { headers: { authorization: `Bearer ${localToken}` }, })
            .then((res) => {
                if (res.data === "token expire") {
                    localStorage.removeItem("@updownstreet-token");
                    localStorage.removeItem("@uppertown-url");
                    document.location.replace("/");
                } else {
                    setUser(res.data);
                }
            }).catch(err => console.log(err))
    }


    return [user, isLog, hardRefresh]
}

export default UseToken;