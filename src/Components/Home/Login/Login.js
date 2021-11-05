import './Login.css'
import { useState } from "react";
const axios = require('axios');

function Login({formState, setFormState, hardRefresh}) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleSumbit(e) {
        e.preventDefault();
        let submit = { email, password }

        axios.post("http://localhost:1337/api/users/login", 
                    submit, )

            .then((res) => {
            localStorage.setItem("@updownstreet-token", res.data.token)
            localStorage.setItem("id", res.data.userId)
            setFormState(null)
            hardRefresh();
            document.location.replace('/');
            
        }).then()
            .catch((err) => console.log(err))
    }
            

    function handleInput(e, setter) {

        setter(e.target.value)
        
    }

    function goSigninForm(){
        setFormState("signin");
    }


    return (
        <div className="login">

            <form className="login-container">
            <h4 className="login-title"> Log in </h4>
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
            <p className="login-fasle-link" onClick={goSigninForm}>Je n'ai de compte</p>

        </div>

    )
}

export default Login;