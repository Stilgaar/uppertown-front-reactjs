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



function Home({ formState, setFormState, hardRefresh }) {

    const [users, setUsers] = useState([]);
    const [ann, setAnn] = useState([]);
    const [info, setInfo] = useState([])
    let url = `https://uppertown-back.osc-fr1.scalingo.io` || `http://localhost:1337`


    useEffect(() => {
        axios.get(`${url}/api/users/users`)
            .then((res) => setUsers(res.data))
        axios.get(`${url}/api/announces/allAnnounces`)
            .then((res) => setAnn(res.data))
        axios.get(`${url}/admin/getRib`)
            .then((res) => setInfo(res.data))
    }, [])

    return (
        <div>
            <div className="home">
                {formState === "signin" && <Signup formState={formState} setFormState={setFormState} />}
                {formState === "login" && <Login formState={formState} setFormState={setFormState} hardRefresh={hardRefresh} />}
                <img
                    src="https://www.icietlabas.fr/wp-content/uploads/2021/05/Photographie-Architecturale-Barlelone-que-faire-a-Barcelone-Que-faire-en-espagne-Tutoriel-Photo-Tuto-Photo-blog-voyage-32-scaled.jpg"
                    alt="Photo accueil"
                />
                <About info={info} />
            </div>
            <OneAnnounce ann={ann} />
            <Infos users={users} ann={ann} />
        </div>
    )
}

export default Home;