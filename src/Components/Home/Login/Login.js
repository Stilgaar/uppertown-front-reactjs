import { login } from '../../../JSON/Arrays';
import RibLine from '../../AdminPage/Addrib/RibLine';
import { useCon } from '../../../Hooks/useCon';

function Login() {

    const { handleClick, handleSubmit, handleSigin, handleURL, resMsg, url } = useCon()

    return (
        <div className="form"
            onClick={handleClick}>
            <div className="form-form"
                onClick={(e) => e.stopPropagation()}>
                <form className="container" onSubmit={handleSubmit}>
                    <h2 className="text-primary t-center mb-3"> Se Connecter</h2>

                    {login.map((entry) => (
                        <RibLine entry={entry} key={entry.name} />
                    ))}

                    <button onMouseEnter={() => {
                        handleURL(`${url}/api/users/login`)
                    }} className="btn-outlined-primary text-hover-white font-md"
                        type="submit">
                        Valider
                    </button>
                </form>
                <p className="text-compl-hover-primary t-center"
                    onClick={handleSigin}>Créer un compte
                </p>
            </div>
            {resMsg &&
                <div className="message-box p4 br-xs">
                    {resMsg}
                </div>}
        </div>

    )
}

export default Login;