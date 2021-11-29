import './SearchUser.css'
import axios from "axios";
import { useEffect, useState } from 'react';
import UserLine from '../UserLine/UserLine';

function SearchUser() {
    // tous les Users
    const [users, setUsers] = useState([]);
    // filtres pour une personne
    const [filterOne, setFilterOne] = useState("");
    const [filtrerdListOne, setFiltrerdListOne] = useState();
    let url = `https://uppertown-back.osc-fr1.scalingo.io` || `http://localhost:1337`

    const adminRefresh = () => {
        axios.get(`${url}api/users/users`)
            .then((res) => {
                setUsers(res.data);
                setFiltrerdListOne(res.data)
            })}

    useEffect(() => {
        adminRefresh()
    }, [])

    const handleOne = (e) => {
        setFilterOne(e.target.value);
    }

    useEffect(() => {
        const filtrerdListOne = users.filter((userOne) =>
            verifiyOne(userOne)
        );
        setFiltrerdListOne(filtrerdListOne);
    }, [filterOne, users]);


    // filtrage par nom de famille, prenom, email ou ID
    // id pour trouver les personnes pour faire les virements == simplicité \o/
    const verifiyOne = (userOne) => {
        let regex = new RegExp(filterOne.toLowerCase());
        if (regex.test(userOne?.lastname?.toLowerCase()) || regex.test(userOne?.firstname?.toLowerCase()) || regex.test(userOne?.email?.toLowerCase()) || regex.test(userOne?._id?.toLowerCase())) {
            return userOne;
        }
    }

    return (
        <div className="searchuser-container"> <h3>Recherche dans tous les utilisateurs, par nom, prénom, email ou ID</h3>
            <input type="text" placeholder="Recherche" onChange={(e) => handleOne(e)} />
            <div>
                {filtrerdListOne &&
                    filtrerdListOne.map((userdata, key) => {
                        return (

                            <UserLine key={key} userdata={userdata} adminRefresh={adminRefresh} />

                        )
                    })}


            </div>
        </div>
    )
}

export default SearchUser;

