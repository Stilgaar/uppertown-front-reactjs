import "./Signup.css";
import {useState} from "react";
const  axios  =  require ( 'axios' ) ;


function Signup({formState, setFormState}) {

    const [lastname, setLastname] = useState();
    const [firstname, setFirstname] = useState();
    const [email, setEmail] = useState();
    const [tel, setTel] = useState();
    const [brandname, setBrandname] = useState();
    const [password, setPassword] = useState();
    const [verifpassword, setVerifPassword] = useState();

    // 400 = element manquant
    // 401 = passwords correspondent pas
    // 403 = email existe déjà

    function handleSumbit(e) {
        e.preventDefault();
        let submit = { lastname, firstname, email, tel, brandname, password, verifpassword }

        axios.post("http://localhost:1337/api/users/signup",  
        submit )
        .then((res) => {
            console.log(res.data)
            console.log(res.status)
            setFormState("login")
        })
        .catch((err) => console.log(err))
 }

    function handleInput(e, setter){
        setter(e.target.value)
    }

    function goLoginForm(){
        setFormState("login");
    }

    return (

        <div className="signup">

            <form className="signup-container">
            <h4 className="signup-title"> Sign Up </h4>
                <div className="signup-container-nomprenom">
                    
                    <div className="signup-container-nom">
                        <label>Nom</label>
                        <input className="singup-input required nom" type="text" placeholder="Dupuy" required onInput={(e) => handleInput(e, setLastname)} />
                    </div>

                    <div className="signup-container-prenom">
                        <label>Prènom</label>
                        <input className="singup-input required prenom" type="text" placeholder="Julien" required onInput={(e) => handleInput(e, setFirstname)}/>
                    </div>
                </div>
                <div className="signup-container-email">
                    <label>Email</label>
                    <input className="singup-input required email" type="mail" placeholder="Julien.Dupuy@updown.street" required  onInput={(e) => handleInput(e, setEmail)}/>
                </div>

                <div className="signup-container-tel">
                    <label>Téléphone</label>
                    <input className="singup-input required tel" type="number" placeholder="0606060606" required  onInput={(e) => handleInput(e, setTel)}/>
                </div>

                <div className="signup-container-societe">
                    <label>Socièté</label>
                    <input className="singup-input societe" type="text" placeholder="Up Down Street" onInput={(e) => handleInput(e, setBrandname)}/>
                </div>

                <div className="signup-container-motdepasse">

                    <div className="signup-container-mdp">
                        <label>Mot de Passe</label>
                        <input className="singup-input required mdp" type="password" placeholder="**********" required onInput={(e) => handleInput(e, setPassword)} />
                    </div>

                    <div className="signup-container-verifmdp">
                        <label>Vérification</label>
                        <input className="singup-input required verifmdp" type="password" placeholder="**********" required onInput={(e) => handleInput(e, setVerifPassword)} />
                    </div>

                </div>
                <button className="signup-button" onClick={(e) => handleSumbit(e)}>Valider</button>
            </form>

            <p className="signup-fasle-link" onClick={goLoginForm}>J'ai deja un compte</p>

        </div>
   
   )
}

export default Signup;