import { useContext } from 'react';
import './AdminText.css'
import URLcontext from '../../../Context/URLcontext';
import FormContext from '../../../Context/FormContext';

function AdminText() {

    const URLContextValue = useContext(URLcontext)
    const FormContextValue = useContext(FormContext);

    return (
        <div className="admintext-container-container">

            <div className="admintext-container"><h3>Personalisation du site</h3>
                <div className="admintext">

                    <form onSubmit={FormContextValue.handleSubmit}>
                        <label>Modification du titre global du site(Titre sur la page d'acceuil) </label>
                        <div>
                            <input
                                values={FormContextValue.data.maintitle || ""}
                                name="maintitle"
                                className="admintext-input"
                                type="text"
                                placeholder="Titre de la page d'acceuil"
                                onChange={FormContextValue.handleChange}
                            /></div>

                        <label> Modification du texte de la page d'acceuil </label>
                        <div>
                            <textarea
                                values={FormContextValue.data.maincontent || ""}
                                name="maincontent"
                                className="admin-texterea"
                                type="texte"
                                placeholder="Ce que vous verrez sur la page d'acceuil"
                                onChange={FormContextValue.handleChange}>
                            </textarea>
                        </div>

                        <div className="couleurs">
                            <label>Couleur principale du site (fonction non implentée WIP)</label>
                            <input
                                values={FormContextValue.data.color || ""}
                                name="color"
                                type="color"
                                onChange={FormContextValue.handleChange} />
                        </div>
                        <br />
                        <button
                            onMouseEnter={() => {
                                FormContextValue.handleURL(`${URLContextValue.url}/admin/maintext`)
                            }}
                            type="sumbit"
                            className="admintext-button-validate ">
                            Valider !
                        </button>
                    </form>


                </div>

            </div>
        </div>
    )
}

export default AdminText;