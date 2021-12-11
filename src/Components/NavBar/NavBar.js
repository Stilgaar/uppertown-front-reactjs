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
            <Link to="/"style={{textDecoration: "none", color: "white"}}> 
            <div className="logoh1"><h1 className="logo">UpperTown</h1></div></Link> 
            <div className="menu">
                {isLog ?
                <>
                    <Link to="/"><p>Accueil</p></Link>
                    <Link to="/announces"><p>Annonces</p></Link>
                    <Link to="/userpage"><p className="perso">Chez {user?.firstname}</p></Link>
                    {user?.isAdmin && <Link to="/admin"><p>Administratif</p></Link>}
                    <p className="btn-connecter" onClick={() => logout()}>Logout</p>
                </>
                : 
                <>
                    <p className="btn-connecter" onClick={() => showForm("login")}>Log In</p>
                    <p className="btn-connecter" onClick={() => showForm("signin")}>Sign Up</p>
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
                    <Link to="/userpage" onClick={closeMenu}><p className="perso">Coin Perso {user?.firstname}</p></Link>
                    {user?.isAdmin && <Link to="/admin" onClick={closeMenu}><p>Administratif</p></Link>}
                    <p className="btn-connecter" onClick={() => {
                        logout();
                        closeMenu();
                        }}>Logout</p>
                </>
                : 
                <>
                    <p className="btn-connecter" onClick={() => {
                        showForm("login");
                        closeMenu()}}>Log In</p>
                    <p className="btn-connecter" onClick={() => {
                        showForm("signin")
                        closeMenu();
                    }
                    }>Sign Up</p>
                </>
                }
        </div>
        }
        </>
    )
}

export default NavBar;
