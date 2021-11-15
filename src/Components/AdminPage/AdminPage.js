import React from 'react'
import './AdminPage.css';
import './AdminPage.scss';
import { useEffect, useState } from 'react';
import GestionUtils from './GestionUtils/GestionUtils';
import SearchUser from './SearchUser/SearchUser';
import AddRib from './Addrib/AddRib';
import PostAnnounce from './PostAnnounce/PostAnnounce'
const axios = require('axios');


function AdminPage() {


    const [showSearch, setShowSearch] = useState(false)
    const [showGestion, setShowGestion] = useState(false)
    const [showAddRib, setShowAddRib] = useState(false)
    const [showPostAnn, setShowPostAnn] = useState(false)

    const [users, setUsers] = useState([]);

    const adminRefresh = () => {
        axios.get("http://localhost:1337/api/users/users")
            .then((res) => setUsers(res.data))
    }

    useEffect(() => {
        adminRefresh();
    }, [])
    //a l'affichage requete qui recupere tous les users
    //a l'affichage requete qui recupere tous les biens

    //2 partie
    //1° avec une liste des users
    //2° avec une liste les annonces

    //sur chaque item des listes ouvre une page avec plus d'infos sur cette item

    const search = () => {
        setShowSearch(current => !current)
        setShowGestion(false)
        setShowAddRib(false)
        setShowPostAnn(false)
    }
    const gestion = () => {
        setShowSearch(false)
        setShowGestion(current => !current)
        setShowAddRib(false)
        setShowPostAnn(false)
    }
    const rib = () => {
        setShowSearch(false)
        setShowGestion(false)
        setShowAddRib(current => !current)
        setShowPostAnn(false)
    }
    const ann = () => {
        setShowSearch(false)
        setShowGestion(false)
        setShowAddRib(false)
        setShowPostAnn(current => !current)
    }

    return (
        <div className="admin-page">

            <div className="admin-page-container">
    
                <div className="adminpage-boutons-admin">
                    <button className="adminpage-button-validate" onClick={() => search()}>Recherche</button>
                    <button className="adminpage-button-validate" onClick={() => gestion()}>Gestion utilisteur</button>
                    <button className="adminpage-button-validate" onClick={() => rib()}>Ajouter/Modifier le Rib</button>
                    <button className="adminpage-button-validate" onClick={() => ann()}>Poster une nouvelle annonce</button>
                </div>

                <div className="adminpage-components">
                    {showSearch &&
                        <SearchUser users={users} adminRefresh={adminRefresh} />}

                    {showGestion &&
                        <GestionUtils users={users} adminRefresh={adminRefresh} />}

                    {showAddRib &&
                        <AddRib />}

                    {showPostAnn &&
                        <PostAnnounce />}
                </div>
 
            </div>
        </div>
    )
}

export default AdminPage;
