import { useState } from 'react';
import './AdminText.css'
const axios = require('axios')

function AdminText() {


    const [maintitle, setTitle] = useState()
    const [maincontent, setContent] = useState()
    const [color, setColor] = useState()
    let url = `https://uppertown-back.osc-fr1.scalingo.io` || `http://localhost:1337`

    const handleInput = (e, setter) => { setter(e.target.value) }

    const adminTextChange = (e) => {
        e.preventDefault()

        let submit = { maintitle, maincontent, color }

        axios.post(`${url}/admin/maintext`, submit)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))

    }

    return (
        <div className="admintext-container-container">

            <div className="admintext-container"><h3>Personalisation du site</h3>
                <div className="admintext">

                    <form onSubmit={(e) => adminTextChange(e)}>
                        <label>Modification du titre global du site(Titre sur la page d'acceuil) </label>
                        <div><input className="admintext-input" type="text" placeholder="Titre de la page d'acceuil" onChange={(e) => handleInput(e, setTitle)} /></div>

                        <label> Modification du texte de la page d'acceuil </label>
                        <div><textarea className="admin-texterea" type="texte" placeholder="Ce que vous verrez sur la page d'acceuil" onChange={(e) => handleInput(e, setContent)}></textarea></div>
                       
                        <div className="couleurs">
                        <label>Couleur principale du site</label>
                        <input type="color" onChange={((e) => handleInput(e, setColor))} />
                        </div>

                        <button type="sumbit" className="admintext-button-validate ">Valider !</button>
                    </form>


                </div>

            </div>
        </div>
    )
}

export default AdminText;