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
    }, [])


    let clienttokens = 0;
    for (let i = 0; i < users.length; i++) { clienttokens += users[i].stableCoins }

    let freetokens = 0;
    for (let i = 0; i < ann.length; i++) { freetokens += ann[i].share_number }

    return (
        <div className="infos-container-container">

            <div className="infos-container">
                <div>Tokens Achetés</div>
                <div>{clienttokens}</div>
            </div>

            <div className="infos-container">

                <div>Utilisateurs</div>
                <div>{users.length}</div>
            </div>

            <div className="infos-container">


                <div>Biens Immobiliers</div>
                <div>{ann.length}</div>
            </div>

            <div className="infos-container">

                <div>Tokens Disponible</div>
                <div>{freetokens}</div>

            </div>

        </div>
    )
}

export default Infos;