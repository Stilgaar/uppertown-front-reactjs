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

    const [responceMessage , setResponceMessage] = useState();
    let url = `https://uppertown-back.osc-fr1.scalingo.io` || `http://localhost:1337`

    function handleSumbit(e) {
        e.preventDefault();
        let submit = { lastname, firstname, email, tel, brandname, password, verifpassword }

        axios.post(`${url}/api/users/signup`,  
        submit )
        .then((res) => {
            console.log(res.data)
            switch (res.data) {
                case "empty":
                    setResponceMessage("Tous les champs ne sont pas remplis")
                    setTimeout(function(){
                        setResponceMessage()
                    },2000)
                    break;
                case "mail":
                    setResponceMessage("Votre mail est deja utilisé")
                    setTimeout(function(){
                        setResponceMessage()
                    },2000)
                    break;
                case "password":
                    setResponceMessage("Les mots de passe de correspondent pas")
                    setTimeout(function(){
                        setResponceMessage();
                    },2000)
                    break;
                case "ok":
                    setResponceMessage("Compte crée avec succés")
                    setTimeout(function(){
                        setResponceMessage();
                        setFormState("login")},2000)
                    break;
                default:
                    break;
            }
        })
        .catch((err) => console.log(err))
 }

    function handleInput(e, setter){
        setter(e.target.value)
    }

    function goLoginForm(){
        setFormState("login");
    }

    function closeModal() {
        setFormState()
    }

    return (
        <div className="signup-form" onClick={closeModal}>
            <div className="signup" onClick={(e) => e.stopPropagation()}>
                <form className="signup-container">
                <h4 className="signup-title"> Créer mon compte</h4>
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
            {responceMessage && <div className="message-box">{responceMessage}</div>}
        </div>
   
   )
}

export default Signup;