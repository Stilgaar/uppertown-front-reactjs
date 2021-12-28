import "./Signup.css";
import useURL from "../../../Hooks/useURL";
import FormContext from "../../../Context/FormContext";
import { useContext, useEffect } from 'react';

function Signup(props) {

  const [url] = useURL();
  const FormContextValue = useContext(FormContext);

  useEffect(() => {
    FormContextValue.handleURL(`${url}/api/users/signup`)
  }, [])

  return (
    <div className="signup-form" onClick={FormContextValue.handleClick}>
      <div className="signup" onClick={(e) => e.stopPropagation()}>
        <form className="signup-container"
          onSubmit={FormContextValue.handleSubmit}>
          <h4 className="signup-title">Créer mon compte</h4>
          <div className="signup-container-nomprenom">
            <div className="signup-container-nom">
              <label>Nom</label>
              <input
                values={FormContextValue.data.lastname || ""}
                className="singup-input nom"
                type="text"
                name="lastname"
                placeholder="Dupuy"
                onChange={FormContextValue.handleChange}
              />
            </div>

            <div className="signup-container-prenom">
              <label>Prènom</label>
              <input
                values={FormContextValue.data.firstname || ""}
                className="singup-input prenom"
                type="text"
                placeholder="Julien"
                name="firstname"
                onChange={FormContextValue.handleChange}
              />
            </div>
          </div>
          <div className="signup-container-email">
            <label>Email</label>
            <input
              values={FormContextValue.data.email || ""}
              className="singup-input email"
              type="mail"
              placeholder="Julien.Dupuy@updown.street"
              name="email"
              onChange={FormContextValue.handleChange}
            />
          </div>

          <div className="signup-container-tel">
            <label>Téléphone</label>
            <input
              values={FormContextValue.data.tel || ""}
              className="singup-input tel"
              type="number"
              placeholder="0606060606"
              name="tel"
              onChange={FormContextValue.handleChange}
            />
          </div>

          <div className="signup-container-societe">
            <label>Socièté</label>
            <input
              values={FormContextValue.data.brandname || ""}
              className="singup-input societe"
              type="text"
              name="brandname"
              placeholder="Up Down Street"
              onChange={FormContextValue.handleChange}
            />
          </div>

          <div className="signup-container-motdepasse">
            <div className="signup-container-mdp">
              <label>Mot de Passe</label>
              <input
                values={FormContextValue.data.password || ""}
                className="singup-input mdp"
                type="password"
                placeholder="**********"
                name="password"
                onChange={FormContextValue.handleChange}
              />
            </div>

            <div className="signup-container-verifmdp">
              <label>Vérification</label>
              <input
                values={FormContextValue.data.verifpassword || ""}
                className="singup-input verifmdp"
                type="password"
                placeholder="**********"
                name="verifpassword"
                onChange={FormContextValue.handleChange}
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
      {FormContextValue.resMsg && <div className="message-box">{FormContextValue.resMsg}</div>}
    </div>
  );
}

export default Signup;
