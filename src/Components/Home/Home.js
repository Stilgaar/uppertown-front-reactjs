import './Home.css';
import './Home.scss';

import React from 'react'
import Signup from './Signup/Signup'
import Login from './Login/Login';
import Infos from './Infos/Infos';
import About from './About/About';
import OneAnnounce from './OneAnnounce/OneAnnounce';
import { useEffect, useState } from 'react';
const axios = require('axios');

// Afficher composant <About/> avec un lorem pseudo presentation de la societe
// Afficher un composant <Annonce/> qui affiche une annonce random
//Requete vers BDD pour recup 1 annonce random

//Creer composant <FormCreate> qui sera un formulaire de creation de compte (voir infos a demander)
//Créer composant <FormLogin> qui sera un formulaire de connection (voir infos a demander)

//Event au click sur l'annonce
//Avec un state qui viens de App genre formState, setFormState = create || login || ""
//Affiche le <FormCreate>
//Event au click "valider" -> requete pour creation de compte <- token (juste l'id) a mettre dans le localStorage
//Et afficher le <FormLogin>

//Event au click button "J'ai deja un compte" -> cache le <FormCreate> et mets a ca place le <FormLogin>
// Event au click "Connection" -> requete de connection <- token (juste l'id) a mettre dans le localStorage
//Et aller page annonces

function Home({ formState, setFormState, hardRefresh }) {

    const [users, setUsers] = useState([]);
    const [ann, setAnn] = useState([]);
    const [info, setInfo] = useState([])

    useEffect(() => {
        axios.get("http://localhost:1337/api/users/users")
            .then((res) => setUsers(res.data))
        axios.get("http://localhost:1337/api/announces/allAnnounces")
            .then((res) => setAnn(res.data))
            axios.get("http://localhost:1337/admin/getRib")
            .then((res) => setInfo(res.data))
    }, [])

    console.log(info)

    return (


        <div>
            <div className="home">
                {formState === "signin" && <Signup formState={formState} setFormState={setFormState} />}
                {formState === "login" && <Login formState={formState} setFormState={setFormState} hardRefresh={hardRefresh} />}

                <About info={info}/>
            </div>
            <OneAnnounce ann={ann} />
            <Infos users={users} ann={ann} />
            </div>
    )
}

export default Home;