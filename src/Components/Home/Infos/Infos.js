import './Infos.css'
import { useEffect, useState } from 'react';
const axios = require('axios');

function Infos() {

    const [users, setUsers] = useState([]);
    const [ann, setAnn] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1337/api/users/users")
            .then((res) => setUsers(res.data))
        axios.get("http://localhost:1337/api/announces/allAnnounces")
        .then((res) => setAnn(res.data))       
        },[])


    return(
        <div>
            <div>Utilisateurs Engeristrés</div>
            <div>{users.length}</div>

            <div>Biens Immobiliers</div>
            <div>{ann.length}</div>

        </div>
    )
}

export default Infos;