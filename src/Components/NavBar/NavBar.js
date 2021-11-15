import './NavBar.css';
import './NavBar.scss';

import { Link } from "react-router-dom";
import React from 'react'

function NavBar({formState, setFormState, isLog, user}) {

    function showForm(){
        setFormState("signin")
    }
    function logout(){
        localStorage.removeItem("@updownstreet-token");
        document.location.replace('/');
    }

    console.log('USERNAVBAR', user)

    return (
        <div className="navbar">
            <Link to="/"style={{textDecoration: "none", color: "white"}}><h1 className="logo"> <img className="logo-image" src="UpperLogo.png" alt="" /> UpDownStreet</h1></Link>
            <div className="menu">
                {isLog ?
                <>
                    <Link to="/"><p>Accueil</p></Link>
                    <Link to="/announces"><p>Annonces</p></Link>
                    <Link to="/userpage"><p>UserPage</p></Link>
                    <Link to="/stable-coins"><p>StableCoins</p></Link>
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
