import './AddRib.css';
import { useEffect, useContext } from 'react';
import URLcontext from '../../../Context/URLcontext';
import FormContext from "../../../Context/FormContext";
import { rib } from '../../../JSON/Arrays';
import RibLine from './RibLine';

function AddRib() {

    const FormContextValue = useContext(FormContext);
    const URLContextValue = useContext(URLcontext)

    useEffect(() => {
        FormContextValue.handleURL(`${URLContextValue.url}/admin/newRib`)
    }, [])

    return (

        <div className="addributilisateurs-container"> <h3>Ajouter un RIB ou mettre à jour son RIB</h3>
            <div>
                <form className="addrib-container-form" onSubmit={(e) => FormContextValue.handleSubmit(e)}>
                    {rib.map((entry, index) => (
                        <RibLine key={index} entry={entry} />))}
                    <button className="addrib-button-validate" type='submit' >
                        Envoyer
                    </button>
                </form >
            </div>

        </div >
    )
}

export default AddRib;