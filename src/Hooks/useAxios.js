import axios from 'axios'
import { useEffect, useState } from 'react'

// HOOK POUR FETCH PARTOUT EN UNE LIGNE

const useAxios = (url) => {

    const [data, setData] = useState([])

    const adminRefresh = () => {
        axios.get(url)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        adminRefresh()
    }, [url])

    return [data, adminRefresh];

}

export default useAxios;
