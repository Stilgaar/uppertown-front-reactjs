import { useContext } from 'react';
import FormContext from "../../../Context/FormContext";
import URLcontext from '../../../Context/URLcontext';
import { login } from '../../../JSON/Arrays';
import RibLine from '../../AdminPage/Addrib/RibLine';

function Login() {

    const FormContextValue = useContext(FormContext);
    const URLContextValue = useContext(URLcontext)

    return (
        <div className="form"
            onClick={FormContextValue.handleClick}>
            <div className="form-form"
                onClick={(e) => e.stopPropagation()}>
                <form className="container" onSubmit={FormContextValue.handleSubmit}>
                    <h2 className="text-primary t-center mb-3"> Se Connecter</h2>

                    {login.map((entry) => (
                        <RibLine entry={entry} key={entry.name} />
                    ))}

                    <button onMouseEnter={() => {
                        FormContextValue.handleURL(`${URLContextValue.url}/api/users/login`)
                    }} className="btn-outlined-primary text-hover-white font-md"
                        type="submit">
                        Valider
                    </button>
                </form>
                <p className="text-compl-hover-primary t-center"
                    onClick={FormContextValue.handleSigin}>Créer un compte
                </p>
            </div>
            {FormContextValue.resMsg &&
                <div className="message-box p4 br-xs">
                    {FormContextValue.resMsg}
                </div>}
        </div>

    )
}

export default Login;