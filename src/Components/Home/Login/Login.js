import './Login.css'
import { useContext } from 'react';
import FormContext from "../../../Context/FormContext";
import URLcontext from '../../../Context/URLcontext';
import { login } from '../../../JSON/Arrays';
import RibLine from '../../AdminPage/Addrib/RibLine';

function Login() {

    const FormContextValue = useContext(FormContext);
    const URLContextValue = useContext(URLcontext)

    return (
        <div className="login-form"
            onClick={FormContextValue.handleClick}>
            <div
                className="login"
                onClick={(e) => e.stopPropagation()}>
                <form className="login-container" onSubmit={FormContextValue.handleSubmit}>
                    <h4 className="login-title"> Se Connecter</h4>

                    {login.map((entry) => (
                        <RibLine entry={entry} key={entry.name} />
                    ))}

                    <button onMouseEnter={() => {
                        FormContextValue.handleURL(`${URLContextValue.url}/api/users/login`)
                    }} className="login-button"
                        type="submit">
                        Valider
                    </button>
                </form>
                <p className="login-fasle-link"
                    onClick={FormContextValue.handleSigin}>
                    Créer un compte
                </p>
            </div>
            {FormContextValue.resMsg &&
                <div
                    className="message-box-login">
                    {FormContextValue.resMsg}
                </div>}
        </div>

    )
}

export default Login;