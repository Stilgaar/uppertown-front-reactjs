import './SearchUser.css'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SearchUser() {
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
            }) }, [])

    const handleOne = (e) => {
        setFilterOne(e.target.value);
    }

    useEffect(() => {
        const filtrerdListOne = users.filter((userOne) =>
            verifiyOne(userOne)
        );
        setFiltrerdListOne(filtrerdListOne);
    }, [filterOne, users]);

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
                            <Link to={{
                                pathname: '/user-detail',
                                state: {
                                    data: userdata
                                },
                            }} style={{ textDecoration: "none", color: "black" }}>
                                <div className="searchuser-separated-stuff" key={key}>
                                    Prenom :  {userdata.firstname} {" "}
                                    Nom : {userdata.lastname} {" "}
                                    {userdata?.pi?.[0] ? " Piece identité : Oui" : "Piece d'itendité : Non "} {" "}
                                    {userdata?.JDD?.[0] ? " Justificatif domicile : Oui" : "Justificatif domicile: Non "} {" "}
                                    {userdata?.avisFiscal?.[0] ? " Fiscalité : Oui" : "Fiscalité : Non "} {" "}
                                </div>
                            </Link>
                        )
                    })}

            </div>
        </div>
    )
}

export default SearchUser;

