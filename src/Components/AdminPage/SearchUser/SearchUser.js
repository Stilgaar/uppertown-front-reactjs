import './SearchUser.css'
import axios from "axios";
import { useContext, useEffect, useState } from 'react';
import UserLine from '../UserLine/UserLine';
import useAxios from '../../../Hooks/useAxios';
import URLcontext from '../../../Context/URLcontext';


function SearchUser() {

    const URLContextValue = useContext(URLcontext)
    const [users, adminRefresh] = useAxios(`${URLContextValue.url}/api/users/users`)
    const [filterOne, setFilterOne] = useState("");
    const [filtrerdListOne, setFiltrerdListOne] = useState();

    useEffect(() => { adminRefresh() }, [])

    useEffect(() => {
        const filtrerdListOne = users.filter((userOne) =>
            verifiyOne(userOne)
        );
        setFiltrerdListOne(filtrerdListOne);
    }, [filterOne, users]);

    const verifiyOne = (userOne) => {
        let regex = new RegExp(filterOne.toLowerCase());
        if (
            regex.test(userOne?.lastname?.toLowerCase())
            || regex.test(userOne?.firstname?.toLowerCase())
            || regex.test(userOne?.email?.toLowerCase())
            || regex.test(userOne?._id?.toLowerCase())) {
            return userOne;
        }
    }

    return (
        <div className="searchuser-container"> <h3>Recherche dans tous les utilisateurs, par nom, prénom, email ou ID</h3>
            <input type="text" placeholder="Recherche" onChange={(e) => setFilterOne(e.target.value)} />
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

