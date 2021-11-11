import React from 'react'
import './AdminPage.css';
import './AdminPage.scss';
import { useEffect, useState } from 'react';
import GestionUtils from './GestionUtils/GestionUtils';
import SearchUser from './SearchUser/SearchUser';
import AddRib from './Addrib/AddRib';
const axios = require('axios');


function AdminPage() {


    const [users, setUsers] = useState([]);

    const adminRefresh = () => {
        axios.get("http://localhost:1337/api/users/users")
            .then((res) => setUsers(res.data))}
            
    useEffect(() => {
    adminRefresh();
            },[])
    //a l'affichage requete qui recupere tous les users
    //a l'affichage requete qui recupere tous les biens

    //2 partie
        //1° avec une liste des users
        //2° avec une liste les annonces
    
    //sur chaque item des listes ouvre une page avec plus d'infos sur cette item

    return (
        <div className="admin-page">
            <SearchUser users={users} adminRefresh={adminRefresh} />
            <GestionUtils users={users} adminRefresh={adminRefresh}/>
            <AddRib />
        </div>
    )
}

export default AdminPage;
