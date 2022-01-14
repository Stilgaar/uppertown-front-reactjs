import { useContext } from 'react';
import URLcontext from '../../../Context/URLcontext';
import FormContext from '../../../Context/FormContext';

function AdminText() {

    const URLContextValue = useContext(URLcontext)
    const FormContextValue = useContext(FormContext);

    return (
        <div className="container-xl">

            <h3 className="bg-primary text-white t-center font-lg br-xs m-1 mb-3 p-1">Personalisation du site</h3>
            <div className="container">

                <form className='m-a' onSubmit={FormContextValue.handleSubmit}>
                    <label className='label mt-1 mb-1'>Modification du titre global du site(Titre sur la page d'acceuil) </label>
                    <div>
                        <input
                            values={FormContextValue.data.maintitle || ""}
                            name="maintitle"
                            className="input mb-1"
                            type="text"
                            placeholder="Titre de la page d'acceuil"
                            onChange={FormContextValue.handleChange}
                        /></div>

                    <label className='label mt-1 mb-1'> Modification du texte de la page d'acceuil </label>
                    <div>
                        <textarea
                            values={FormContextValue.data.maincontent || ""}
                            name="maincontent"
                            className="textaera mb-1"
                            type="texte"
                            placeholder="Ce que vous verrez sur la page d'acceuil"
                            onChange={FormContextValue.handleChange}>
                        </textarea>
                    </div>

                    <div>
                        <label className='label mt-1'>Couleur principale du site (fonction non implentée WIP)</label>
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
                        className="btn-outlined-primary text-hover-white font-sm">
                        Valider !
                    </button>
                </form>


            </div>

        </div>
    )
}

export default AdminText;