import "./Signup.css";
import useURL from "../../../Hooks/useURL";
import useSubmit from "../../../Hooks/useSubmit";

function Signup(props) {
  
  const [url] = useURL();
  const [data, handleChange, handleSubmit, resMsg] = useSubmit(`${url}/api/users/signup`)
  
  return (
    <div className="signup-form" onClick={props.handleClick}>
      <div className="signup" onClick={(e) => e.stopPropagation()}>
        <form className="signup-container" 
        onSubmit={handleSubmit}>
          <h4 className="signup-title">Créer mon compte</h4>
          <div className="signup-container-nomprenom">
            <div className="signup-container-nom">
              <label>Nom</label>
              <input
                values={data.lastname || "" }
                className="singup-input nom"
                type="text"
                name="lastname"
                placeholder="Dupuy"
                onChange={handleChange}
              />
            </div>

            <div className="signup-container-prenom">
              <label>Prènom</label>
              <input
                values={data.firstname || "" } 
                className="singup-input prenom"
                type="text"
                placeholder="Julien"
                name="firstname"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="signup-container-email">
            <label>Email</label>
            <input
              values={data.email || "" }
              className="singup-input email"
              type="mail"
              placeholder="Julien.Dupuy@updown.street"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="signup-container-tel">
            <label>Téléphone</label>
            <input
              values={data.tel || "" }
              className="singup-input tel"
              type="number"
              placeholder="0606060606"
              name="tel"
              onChange={handleChange}
            />
          </div>

          <div className="signup-container-societe">
            <label>Socièté</label>
            <input
              values={data.brandname || "" }
              className="singup-input societe"
              type="text"
              name="brandname"
              placeholder="Up Down Street"
              onChange={handleChange}
            />
          </div>

          <div className="signup-container-motdepasse">
            <div className="signup-container-mdp">
              <label>Mot de Passe</label>
              <input
                values={data.password || "" }
                className="singup-input mdp"
                type="password"
                placeholder="**********"
                name="password"
                onChange={handleChange}
              />
            </div>

            <div className="signup-container-verifmdp">
              <label>Vérification</label>
              <input
                values={data.verifpassword || "" }
                className="singup-input verifmdp"
                type="password"
                placeholder="**********"
                name="verifpassword"
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="signup-button">
            Valider
          </button>
        </form>

        <p className="signup-fasle-link" onClick={props.handleLogin}>
          J'ai deja un compte
        </p>
      </div>
      {resMsg && <div className="message-box">{resMsg}</div>}
    </div>
  );
}

export default Signup;
