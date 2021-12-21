import './AddRib.css';
import { useState } from 'react';
import axios from 'axios';
import useURL from '../../../Hooks/useURL';


function AddRib() {

    const [iban, setIban] = useState();
    const [codeBanque, setCodeBanque] = useState();
    const [codeGuichet, setCodeGuichet] = useState();
    const [numeroCompte, setNumeroCompte] = useState();
    const [clefRib, setClefRIB] = useState();
    const [bicSwift, setBicSwift] = useState();
    const [titulaire, setTitulaire] = useState();
    const [domiciliation, setDomiciliation] = useState();
    const [url] = useURL()

    const handleSumbit = (e) => {
        e.preventDefault();

        let sumbit = { titulaire, domiciliation, iban, codeBanque, codeGuichet, numeroCompte, clefRib, bicSwift }

        axios.post(`${url}/admin/newRib`, sumbit)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))

    }

    const handleInput = (e, setter) => { setter(e.target.value) }

    return (

        <div className="addributilisateurs-container"> <h3>Ajouter un RIB ou mettre à jour son RIB</h3>

            <div>
                <form className="addrib-container-form">
                    <label>Titulaire Compte</label>
                    <input type="text" placeholder="UpperTown" onInput={(e) => handleInput(e, setTitulaire)} />
                    <label>Domiciliation</label>
                    <input type="text" placeholder="Banque d'UpperTown, 0600 Nice" onInput={(e) => handleInput(e, setDomiciliation)} />
                    <label>Code IBAN</label>
                    <input type="text" placeholder="FR76" onInput={(e) => handleInput(e, setIban)} />
                    <label>Code Banque</label>
                    <input type="text" placeholder="14707" onInput={(e) => handleInput(e, setCodeBanque)} />
                    <label>Code Guichet</label>
                    <input type="text" placeholder="0807" onInput={(e) => handleInput(e, setCodeGuichet)} />
                    <label>Numero de Compte</label>
                    <input type="text" placeholder="012345678901" onInput={(e) => handleInput(e, setNumeroCompte)} />
                    <label>Clef RIB</label>
                    <input type="text" placeholder="42" onInput={(e) => handleInput(e, setClefRIB)} />
                    <label>B.I.C / SWIFT</label>
                    <input type="text" placeholder="BLM182R2D2" onInput={(e) => handleInput(e, setBicSwift)} />
                    <button className="addrib-button-validate" onClick={handleSumbit}>Envoyer</button>
                </form >
            </div>

        </div>
    )
}

export default AddRib;