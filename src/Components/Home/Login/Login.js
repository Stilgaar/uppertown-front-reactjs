import './Login.css'
import axios from 'axios';
import useURL from '../../../Hooks/useURL';
import useSubmit from '../../../Hooks/useSubmit';

function Login(props) {

    const [url] = useURL()
    const [data, handleChange, handleSubmit, resMsg] = useSubmit(`${url}/api/users/login`)
    
    function handleSumbit(e) {
        e.preventDefault();
        axios.post(`${url}/api/users/login`)
            .then((res) => {
                localStorage.setItem("@updownstreet-token", res.data.token)
                localStorage.setItem("id", res.data.userId)
                props.hardRefresh();
                document.location.replace('/');

            }).then()
            .catch((err) => {
                setTimeout(() => {
                }, 1000)
                console.log(err)
            })
    }

    return (
        <div className="login-form" onClick={props.handleClick}>
            <div className="login" onClick={(e) => e.stopPropagation()}>
                <form 
                className="login-container"
                onSubmit={handleSubmit}>
                    <h4 className="login-title"> Se Connecter</h4>
                    <div className="login-container-email">

                        <div className="login-container-email">
                            <label>Email</label>
                            <input
                            value={data.email || ""} 
                            className="login-input email" 
                            type="mail" 
                            placeholder="Julien.Dupuy@updown.street"
                            required 
                            name="email"
                            onChange={handleChange} />
                        </div>

                        <div className="login-container-mdp">
                            <label>Mot de Passe</label>
                            <input 
                            value={data.password || ""}
                            className="login-input mdp" 
                            type="password" 
                            placeholder="**********" 
                            required 
                            onChange={handleChange} />
                        </div>

                    </div>
                    <button className="login-button" type="submit">Valider</button>
                </form>
                <p className="login-fasle-link" onClick={props.handleSigin}>Créer un compte</p>
            </div>
            {resMsg && <div className="message-box-login">{resMsg}</div>}
        </div>

    )
}

export default Login;