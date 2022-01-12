import { Link } from "react-router-dom";
import React from 'react'
import { useState, useContext } from 'react';
import FormContext from "../../Context/FormContext";

function Navigation(props) {

    const [showMenu, setShowMenu] = useState(false)
    const FormContextValue = useContext(FormContext);

    return (
        <>
            <nav className="navbar justify-between">
                <div className="container">
                    <h1 className="site-title o-80 text-white">UpperTown</h1>

                    {props.isLog ?
                        <><div className="display-f justify-flex-end">

                            <Link to="/">
                                <p className="text-white text-hover-primary-light-7 site-texts">
                                    Accueil
                                </p>
                            </Link>

                            <Link to="/announces">
                                <p className="text-white text-hover-primary-light-7 site-texts">
                                    Annonces
                                </p>
                            </Link>

                            <Link to="/userpage">
                                <p className="text-white text-hover-primary-light-7 site-texts">
                                    Chez {props?.user?.firstname}
                                </p>
                            </Link>

                            {props?.user?.isAdmin && <Link to="/admin">
                                <p className="text-white text-hover-primary-light-7 site-texts">
                                    Administratif
                                </p>
                            </Link>}

                            <p className="text-white text-hover-primary-light-7 site-texts" onClick={FormContextValue.logout}>
                                Logout
                            </p>

                        </div>
                        </>
                        :
                        <div class="display-f">
                            <div className="text-white text-hover-primary-light-7 site-texts"
                                onClick={FormContextValue.handleLogin}>
                                Login
                            </div>
                            <div className="text-white text-hover-primary-light-7 site-texts"
                                onClick={FormContextValue.handleSigin}>
                                Sign Up
                            </div>
                        </div>

                    }

                    <div className="ham-menu">
                        <svg onClick={() => {
                            console.log(showMenu)
                            setShowMenu(c => !c)
                        }}
                            xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                            <path fill="white" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" /></svg>
                    </div>
                </div>

                {showMenu &&
                    <><div className="hide-menu">
                        {props.isLog ?
                            <><div className="display-f">
                                <Link to="/" onClick={() => setShowMenu(false)}>
                                    <p className="text-white text-hover-primary-light-7 site-text" >
                                        Accueil
                                    </p>
                                </Link>

                                <Link to="/announces" onClick={() => setShowMenu(false)}>
                                    <p className="text-white text-hover-primary-light-7 site-text">
                                        Annonces
                                    </p>
                                </Link>

                                <Link to="/userpage" onClick={() => setShowMenu(false)}>
                                    <p className="text-white text-hover-primary-light-7 site-text">
                                        Coin Perso
                                    </p>
                                </Link>

                                {props?.user?.isAdmin &&
                                    <Link to="/admin" onClick={() => setShowMenu(false)}>
                                        <p lassName="text-white text-hover-primary-light-7 site-text">
                                            Administratif
                                        </p>
                                    </Link>}

                                <p className="text-white text-hover-primary-light-7 site-text"
                                    onClick={() => {
                                        FormContextValue.logout();
                                        setShowMenu(false);
                                    }}>Logout</p>
                            </div>
                            </>
                            :
                            <><div className="display-f">
                                <p className="text-white">PROUT</p>
                                <p className="text-white text-hover-primary-light-7 site-text"
                                    onClick={() => {
                                        FormContextValue.handleSigin();
                                        setShowMenu(false);
                                    }}>Log In</p>
                                <p className="text-white text-hover-primary-light-7 site-text"
                                    onClick={() => {
                                        FormContextValue.handleSigin();
                                        setShowMenu(false);
                                    }
                                    }>Sign Up</p>
                            </div> </>

                        }
                    </div>
                    </>}
            </nav>
        </>
    )
}

export default Navigation;
