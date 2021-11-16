import './NavBar.css';
import './NavBar.scss';

import { Link } from "react-router-dom";
import React from 'react'
import { useState } from 'react';

function NavBar({formState, setFormState, isLog, user}) {

    const [showMenu, setShowMenu] = useState(false)

    function showForm(value){
        setFormState(value)
    }
    function logout(){
        localStorage.removeItem("@updownstreet-token");
        document.location.replace('/');
    }

    function handleShowMenu() {
        setShowMenu(!showMenu)
    }

    function closeMenu() {
        setShowMenu(false)
    }
    return (
        <>
        <div className="navbar">
            <Link to="/"style={{textDecoration: "none", color: "white"}}><h1 className="logo"> <img className="logo-image" src="UpperLogo.png" alt="" /> UpDownStreet</h1></Link>
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
                <>
                    <p className="btn-connecter" onClick={() => showForm("login")}>Se Connecter</p>
                    <p className="btn-connecter" onClick={() => showForm("signin")}>Créer mon Compte</p>
                </>
                }
            </div>
            <div className="ham-menu">
                <svg onClick={handleShowMenu} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-list" viewBox="0 0 16 16"><path fill="white" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>
            </div>
        </div>
        {showMenu && 
        <div className="hide-menu">
        {isLog ?
                <>
                    <Link to="/" onClick={closeMenu}><p>Accueil</p></Link>
                    <Link to="/announces" onClick={closeMenu}><p>Annonces</p></Link>
                    <Link to="/userpage" onClick={closeMenu}><p>UserPage</p></Link>
                    {user?.isAdmin && <Link to="/admin" onClick={closeMenu}><p>AdminPage</p></Link>}
                    <p className="btn-connecter" onClick={() => {
                        logout();
                        closeMenu();
                        }}>Logout</p>
                </>
                : 
                <>
                    <p className="btn-connecter" onClick={() => {
                        showForm("login");
                        closeMenu()}}>Se Connecter</p>
                    <p className="btn-connecter" onClick={() => {
                        showForm("signin")
                        closeMenu();
                    }
                    }>Créer mon Compte</p>
                </>
                }
        </div>
        }
        </>
    )
}

export default NavBar;
