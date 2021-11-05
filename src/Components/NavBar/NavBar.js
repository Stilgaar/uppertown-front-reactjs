import './NavBar.css';
import './NavBar.scss';

import { Link } from "react-router-dom";
import React from 'react'

function NavBar({formState, setFormState, isLog, user}) {

    //Recupere de App le niveau de permission du user pour afficher de maniere conditionnel le menu
        //si log tous le menu sauf admin
        //si admin tous

    function showForm(){
        setFormState("signin")
    }
    function logout(){
        localStorage.removeItem("@updownstreet-token");
        document.location.replace('/');
    }

    console.log(user?.isAdmin);

    return (
        <div className="navbar">
            <h1 className="logo">UpDownStreet</h1>
            <div className="menu">
                {isLog ?
                <>
                    <Link to="/"><p>Accueil</p></Link>
                    <Link to="/announces"><p>Annonces</p></Link>
                    <Link to="/userpage"><p>UserPage</p></Link>
                    {user?.isAdmin && <Link to="/admin"><p>AdminPage</p></Link>}
                    <p className="btn-connecter" onClick={() => logout()}>Logout</p>
                </>
                : 
                    <p className="btn-connecter" onClick={() => showForm()}>Se Connecter</p>
                }
            </div>
        </div>
    )
}

export default NavBar;
