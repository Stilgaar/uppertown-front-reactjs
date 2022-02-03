import { useState, useEffect } from "react";
import axios from "axios";
import useURL from "./useURL";
import { useCallback } from "react";


function useToken() {

    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [pending, setPending] = useState(false)
    const [isUser, setIsUser] = useState(false)
    const [URLContextValue] = useURL();

    const hardRefresh = useCallback(() => {

        setPending(true)
        setError(null)

        let localToken = localStorage.getItem("@updownstreet-token")

        if (localToken === null) {
            return setUser(null);
        }

        axios.get(`${URLContextValue.url}/api/users/token`, {
            headers: { authorization: `Bearer ${localToken}` },
        })
            .then((res) => {
                if (res.data === "token expire") {
                    localStorage.removeItem("@updownstreet-token")
                    localStorage.removeItem("@uppertown-url")
                    document.location.replace("/")
                } else {
                    setUser(res.data)
                    setIsUser(true)
                    setPending(false)
                    setError(null)
                }
            })
            .catch((err) => {
                setError(err.message)
                console.log(err.message)
            });
    }, [URLContextValue.url])


    useEffect(() => {
        hardRefresh()
    }, [hardRefresh]);

    return { user, hardRefresh, error, pending, isUser }

}

export default useToken;