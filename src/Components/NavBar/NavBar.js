import './NavBar.css';
import './NavBar.scss';
import { Link } from "react-router-dom";
import React from 'react'
import { useState, useContext } from 'react';
import FormContext from "../../Context/FormContext";

function NavBar(props) {

    const [showMenu, setShowMenu] = useState(false)
    const FormContextValue = useContext(FormContext);

    return (
        <>
            <div className="navbar">

                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                    <div className="logoh1"><h1 className="logo">UpperTown</h1></div></Link>
                <div className="menu">
                    {props.isLog ?
                        <>
                            <Link to="/"><p>Accueil</p></Link>
                            <Link to="/announces"><p>Annonces</p></Link>
                            <Link to="/userpage"><p className="perso">Chez {props?.user?.firstname}</p></Link>
                            {props?.user?.isAdmin && <Link to="/admin"><p>Administratif</p></Link>}
                            <p className="btn-connecter" onClick={FormContextValue.logout}>Logout</p>
                        </>
                        :
                        <>
                            <p className="btn-connecter" onClick={FormContextValue.handleLogin}>Log In</p>
                            <p className="btn-connecter" onClick={FormContextValue.handleSigin}>Sign Up</p>
                        </>
                    }
                </div>
                <div className="ham-menu">
                    <svg onClick={() => setShowMenu(c => !c)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-list" viewBox="0 0 16 16"><path fill="white" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" /></svg>
                </div>
            </div>
            {showMenu &&
                <div className="hide-menu">
                    {props.isLog ?
                        <>
                            <Link to="/" onClick={() => setShowMenu(false)}><p>Accueil</p></Link>
                            <Link to="/announces" onClick={() => setShowMenu(false)}><p>Annonces</p></Link>
                            <Link to="/userpage" onClick={() => setShowMenu(false)}><p className="perso">Coin Perso {props?.user?.firstname}</p></Link>
                            {props?.user?.isAdmin && <Link to="/admin" onClick={() => setShowMenu(false)}><p>Administratif</p></Link>}
                            <p className="btn-connecter" onClick={() => {
                                FormContextValue.logout();
                                setShowMenu(false);
                            }}>Logout</p>
                        </>
                        :
                        <>
                            <p className="btn-connecter" onClick={() => {
                                FormContextValue.handleSigin();
                                setShowMenu(false);
                            }}>Log In</p>
                            <p className="btn-connecter" onClick={() => {
                                FormContextValue.handleSigin();
                                setShowMenu(false);
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
