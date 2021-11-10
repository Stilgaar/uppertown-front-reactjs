import React from 'react'
import './AdminPage.css';
import './AdminPage.scss';
import GestionUtils from './GestionUtils/GestionUtils';
import SearchUser from './SearchUser/SearchUser';
const axios = require('axios');


function AdminPage() {

    //a l'affichage requete qui recupere tous les users
    //a l'affichage requete qui recupere tous les biens

    //2 partie
        //1° avec une liste des users
        //2° avec une liste les annonces
    
    //sur chaque item des listes ouvre une page avec plus d'infos sur cette item

    return (
        <div className="admin-page">
            <SearchUser />
            <GestionUtils />
        </div>
    )
}

export default AdminPage;
