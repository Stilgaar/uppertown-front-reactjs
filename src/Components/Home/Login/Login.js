import './Login.css'
import { useState } from "react";
const axios = require('axios');

function Login({formState, setFormState, hardRefresh}) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [responceMessage, setresponceMessage ] = useState();

    function handleSumbit(e) {
        e.preventDefault();
        let submit = { email, password }

        axios.post("http://localhost:1337/api/users/login", 
                    submit, )

            .then((res) => {
                console.log(res.status);
            localStorage.setItem("@updownstreet-token", res.data.token)
            localStorage.setItem("id", res.data.userId)
            setFormState(null)
            hardRefresh();
            document.location.replace('/');
            
        }).then()
            .catch((err) => {
                setresponceMessage('Vérifiez les infos entrées dans les champs')
                setTimeout(()=>{
                    setresponceMessage()},2000)
                console.log(err)
            })
    }
            

    function handleInput(e, setter) {

        setter(e.target.value)
        
    }

    function goSigninForm(){
        setFormState("signin");
    }
    function closeModal() {
        setFormState()
    }


    return (
        <div className="login-form" onClick={closeModal}>

        <div className="login" onClick={(e) => e.stopPropagation()}>

            <form className="login-container">
            <h4 className="login-title"> Se Connecter</h4>
                <div className="login-container-email">

                    <div className="login-container-email">
                        <label>Email</label>
                        <input className="login-input required email" type="mail" placeholder="Julien.Dupuy@updown.street" required onInput={(e) => handleInput(e, setEmail)} />
                    </div>

                    <div className="login-container-mdp">
                        <label>Mot de Passe</label>
                        <input className="login-input required mdp" type="password" placeholder="**********" required onInput={(e) => handleInput(e, setPassword)} />

                    </div>

                </div>
                <button className="login-button" onClick={(e) =>handleSumbit(e)}>Valider</button>
            </form>
            <p className="login-fasle-link" onClick={goSigninForm}>Créer un compte</p>
        </div>
            {responceMessage && <div className="message-box-login">{responceMessage}</div>}
        </div>

    )
}

export default Login;