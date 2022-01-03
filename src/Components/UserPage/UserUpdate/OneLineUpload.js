import URLContext from '../../../Context/URLcontext'
import FormContext from '../../../Context/FormContext'
import { useState, useContext} from 'react'


function OneLineUpload({user, entry, hardRefresh}) {

    const UrlContextvalue = useContext(URLContext)
    const FormContextValue = useContext(FormContext)
    const [box, setBox] = useState(false)

    const handleDelete = () => {
        console.log('delete')
    }

    return (
            <div className="userupdate-singlecontainer">
                <div className="userupdate-container-modify">{box ? <div></div> : 
                <div className="userupdate-container-container-ternaire-avec-image"><div>{entry.title}</div></div>}
                    {box && <div>
                            <form onSubmit={(e) => {
                                FormContextValue.handleForm(e);
                                setBox(c => !c)
                                hardRefresh();
                            }}>
                                <div className="userupdate-container-label">
                                    <label className="userupdate-label">{entry.label}</label>
                                    <input
                                        type={entry.type}
                                        name={entry.name}
                                        onChange={(e) => {
                                            FormContextValue.handleFile(e)
                                            FormContextValue.handleURL(`${UrlContextvalue.url}${entry.url}`);
                                        }} />
                                </div>
                                <div className="userupdate-container-warning">{entry.update}</div>
                                <button
                                    className="userupdate-button-validate"
                                    type="submit">
                                    Valider
                                </button>
                            </form>

                            {user?.pi[0] &&  <div> <p>Vos Pièces d'identité actuelles</p>
                                    <div className="userupdate-imagecontainer">
                                        {user.pi.map((data, index) =>
                                            <div> <img className="userupdate-imageuser" src={data} alt="" />
                                                <button
                                                    className="userupdate-button-delete"
                                                    onClick={() => handleDelete(user.email, data)}>
                                                    Supprimer</button></div> )} </div> </div>}
                        </div>}
                </div>
                <button className="userupdate-button-modify" 
                onClick={() => setBox(current => !current)}>
                    {box ? "Annuler" : "Envoyer"}</button>
                </div>
       
    )
}

export default OneLineUpload;