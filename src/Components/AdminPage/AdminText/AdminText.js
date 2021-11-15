import { useState } from 'react';
import './AdminText.css'
const axios = require('axios')

function AdminText() {


    const [maintitle, setTitle] = useState()
    const [maincontent, setContent] = useState()
    

    const handleInput = (e, setter) => {setter(e.target.value)}

    const adminTextChange = (e) => {
        e.preventDefault()

        let submit = {maintitle, maincontent} 

        axios.post("http://localhost:1337/admin/maintext", submit)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        
    }

    return (
        <div className="admintext-container-container">

            <div className="admintext-container"><h3>Personalisation du site</h3>
                <div className="admintext">

                    <form onSubmit={(e) => adminTextChange(e)}>
                        <label>Modification du titre global du site(Titre sur la page d'acceuil) </label>
                        <div><input type="text" placeholder="titre du site" onChange={(e) => handleInput(e, setTitle)} /></div>

                        <label> Modification du texte de la page d'acceuil </label>
                        <div><input type="text" placeholder="titre du site" onChange={(e) => handleInput(e, setContent)} /></div>
                        <button type="sumbit" className="admintext-button-validate ">Valider !</button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default AdminText;