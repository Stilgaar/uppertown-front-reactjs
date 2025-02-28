import { Link } from "react-router-dom";
import { useState } from 'react';
import { useCon } from "../../Hooks/useCon";

function Navigation({ user }) {

    const [showMenu, setShowMenu] = useState(false)

    const { logout, handleLogin, handleSignup } = useCon()

    return (
        <>
            <nav className="navbar justify-between p-1">
                <div className="container p-1 br-xs">
                    <h1 className="site-title o-80 text-white">UpperTown</h1>

                    {user ?
                        <><div className="display-f">

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
                                    Chez {user?.firstname}
                                </p>
                            </Link>

                            {user?.isAdmin && <Link to="/admin">
                                <p className="text-white text-hover-primary-light-7 site-texts">
                                    Administratif
                                </p>
                            </Link>}

                            <p className="text-white text-hover-primary-light-7 site-texts" onClick={logout}>
                                Logout
                            </p>

                        </div>
                        </>
                        :
                        <div className="display-f">
                            <div className="text-white text-hover-primary-light-7 site-texts"
                                onClick={handleLogin}>
                                Login
                            </div>
                            <div className="text-white text-hover-primary-light-7 site-texts"
                                onClick={handleSignup}>
                                Sign Up
                            </div>
                        </div>
                    }

                    <div className="ham-menu p-1">
                        <svg onClick={() => { console.log(showMenu); setShowMenu(c => !c) }}
                            xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                            <path fill="white" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" /></svg>
                    </div>
                </div>

                {showMenu &&
                    <><div className="hide-menu">
                        {user ?
                            <><div className="display-f fd-c">
                                <Link to="/" onClick={() => setShowMenu(false)}>
                                    <p className="text-white text-hover-primary-light-7 site-texts mb-1 font-lg p-1" >
                                        Accueil
                                    </p>
                                </Link>

                                <Link to="/announces" onClick={() => setShowMenu(false)}>
                                    <p className="text-white text-hover-primary-light-7 site-texts mb-1 font-lg p-1">
                                        Annonces
                                    </p>
                                </Link>

                                <Link to="/userpage" onClick={() => setShowMenu(false)}>
                                    <p className="text-white text-hover-primary-light-7 site-texts mb-1 font-lg p-1">
                                        Coin Perso
                                    </p>
                                </Link>

                                {user?.isAdmin &&
                                    <Link to="/admin" onClick={() => setShowMenu(false)}>
                                        <p className="text-white text-hover-primary-light-7 site-texts mb-1 font-lg p-1">
                                            Administratif
                                        </p>
                                    </Link>}

                                <p className="text-white text-hover-primary-light-7 site-texts mb-1 font-lg p-1"
                                    onClick={() => {
                                        logout();
                                        setShowMenu(false);
                                    }}>Logout</p>
                            </div>
                            </>
                            :
                            <><div className="display-f fd-c">
                                <p className="text-white text-hover-primary-light-7 site-texts mb-1 font-lg p-1"
                                    onClick={() => {
                                        handleLogin();
                                        setShowMenu(false);
                                    }}>Log In</p>
                                <p className="text-white text-hover-primary-light-7 site-texts font-lg p-1"
                                    onClick={() => {
                                        handleSignup();
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
