import './Login.css'
import { useContext, useEffect } from 'react';
import FormContext from "../../../Context/FormContext";
import URLcontext from '../../../Context/URLcontext';

function Login() {

    const FormContextValue = useContext(FormContext);
    const URLContextValue = useContext(URLcontext)

    useEffect(() => {
        FormContextValue.handleURL(`${URLContextValue.url}/api/users/login`)
    }, [])

    return (
        <div
            className="login-form"
            onClick={FormContextValue.handleClick}>
            <div
                className="login"
                onClick={(e) => e.stopPropagation()}>
                <form
                    className="login-container"
                    onSubmit={FormContextValue.handleSubmit}>
                    <h4 className="login-title"> Se Connecter</h4>
                    <div className="login-container-email">
                        <div className="login-container-email">
                            <label>Email</label>
                            <input
                                values={FormContextValue.data.email || ""}
                                className="login-input email"
                                type="mail"
                                placeholder="Julien.Dupuy@updown.street"
                                required
                                name="email"
                                onChange={FormContextValue.handleChange} />
                        </div>
                        <div className="login-container-mdp">
                            <label>Mot de Passe</label>
                            <input
                                values={FormContextValue.data.password || ""}
                                className="login-input mdp"
                                type="password"
                                placeholder="**********"
                                required
                                name="password"
                                onChange={FormContextValue.handleChange} />
                        </div>
                    </div>
                    <button
                        className="login-button"
                        type="submit">
                        Valider
                    </button>
                </form>
                <p
                    className="login-fasle-link"
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