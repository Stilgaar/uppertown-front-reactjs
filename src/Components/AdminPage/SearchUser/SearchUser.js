import './SearchUser.css'
import axios from "axios";
import { useEffect, useState } from 'react';
import UserLine from '../UserLine/UserLine';

function SearchUser({ adminRefresh }) {
    // tous les Users
    const [users, setUsers] = useState([]);
    // filtres pour une personne
    const [filterOne, setFilterOne] = useState("");
    const [filtrerdListOne, setFiltrerdListOne] = useState();

    useEffect(() => {
        axios.get("http://localhost:1337/api/users/users")
            .then((res) => {
                setUsers(res.data);
                setFiltrerdListOne(res.data)
            })
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
                           
                                <UserLine key={key} userdata={userdata} adminRefresh={adminRefresh}/>
                           
                        )
                    })}


            </div>
        </div>
    )
}

export default SearchUser;

