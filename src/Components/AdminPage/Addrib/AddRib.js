import './AddRib.css';
import { useEffect, useContext } from 'react';
import URLcontext from '../../../Context/URLcontext';
import FormContext from "../../../Context/FormContext";


function AddRib() {

    const FormContextValue = useContext(FormContext);
    const URLContextValue = useContext(URLcontext)

    useEffect(() => {
        FormContextValue.handleURL(`${URLContextValue.url}/admin/newRib`)
    }, [])

    return (

        <div className="addributilisateurs-container"> <h3>Ajouter un RIB ou mettre à jour son RIB</h3>
            <div>
                <form className="addrib-container-form" onSubmit={FormContextValue.handleSubmit}>
                    <label>Titulaire Compte</label>
                    <input
                        values={FormContextValue.data.titulaire || ""}
                        name="titulaire"
                        type="text"
                        placeholder="UpperTown"
                        onChange={FormContextValue.handleChange} />
                    <label>Domiciliation</label>
                    <input
                        values={FormContextValue.data.domiciliation || ""}
                        name="domiciliation"
                        type="text"
                        placeholder="Banque d'UpperTown, 0600 Nice"
                        onChange={FormContextValue.handleChange} />
                    <label>Code IBAN</label>
                    <input
                        values={FormContextValue.data.iban || ""}
                        name="iban"
                        type="text"
                        placeholder="FR76"
                        onChange={FormContextValue.handleChange} />
                    <label>Code Banque</label>
                    <input
                        values={FormContextValue.data.codeBanque || ""}
                        name="codeBanque"
                        type="text"
                        placeholder="14707"
                        onChange={FormContextValue.handleChange} />
                    <label>Code Guichet</label>
                    <input
                        values={FormContextValue.data.codeGuichet || ""}
                        name="codeGuichet"
                        type="text"
                        placeholder="0807"
                        onChange={FormContextValue.handleChange} />
                    <label>Numero de Compte</label>
                    <input
                        values={FormContextValue.data.numeroCompte || ""}
                        name="numeroCompte"
                        type="text"
                        placeholder="012345678901"
                        onChange={FormContextValue.handleChange} />
                    <label>Clef RIB</label>
                    <input
                        values={FormContextValue.data.clefRib || ""}
                        name="clefRib"
                        type="text"
                        placeholder="42"
                        onChange={FormContextValue.handleChange} />
                    <label>B.I.C / SWIFT</label>
                    <input
                        values={FormContextValue.data.bicSwift || ""}
                        name="bicSwift"
                        type="text"
                        placeholder="BLM182R2D2"
                        onChange={FormContextValue.handleChange} />
                    <button
                        className="addrib-button-validate" type='submit' >Envoyer</button>
                </form >
            </div>

        </div >
    )
}

export default AddRib;