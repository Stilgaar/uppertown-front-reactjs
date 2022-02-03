import { useState, useEffect } from "react";
import axios from "axios";
import { useCallback } from "react";
import { useCon } from "./useCon";


function useToken() {

    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [pending, setPending] = useState(false)
    const { url } = useCon();

    const hardRefresh = useCallback(() => {

        setPending(true)
        setError(null)

        let localToken = localStorage.getItem("@updownstreet-token")

        if (localToken === null) {
            return setUser(null);
        }

        axios.get(`${url}/api/users/token`, {
            headers: { authorization: `Bearer ${localToken}` },
        })
            .then((res) => {
                if (res.data === "token expire") {
                    localStorage.removeItem("@updownstreet-token")
                    localStorage.removeItem("@uppertown-url")
                    document.location.replace("/")
                } else {
                    setUser(res.data)
                    setPending(false)
                    setError(null)
                }
            })
            .catch((err) => {
                setError(err.message)
                console.log(err.message)
            });
    }, [url])


    useEffect(() => {
        hardRefresh()
    }, [hardRefresh]);

    return { user, hardRefresh, error, pending }

}

export default useToken;