import "./Signup.css";
import FormContext from "../../../Context/FormContext";
import { useContext } from 'react';
import URLcontext from "../../../Context/URLcontext";
import RibLine from "../../AdminPage/Addrib/RibLine";
import { signup } from "../../../JSON/Arrays";

function Signup() {

  const URLContextValue = useContext(URLcontext)
  const FormContextValue = useContext(FormContext);

  return (
    <div className="signup-form" onClick={FormContextValue.handleClick}>
      <div className="signup" onClick={(e) => e.stopPropagation()}>
        <form className="signup-container"
          onSubmit={FormContextValue.handleSubmit}>
          <h4 className="signup-title">Créer mon compte</h4>
          {signup.map((entry) => (
            <RibLine entry={entry} key={entry.name} />
          ))}
          <button
            className="signup-button"
            onMouseEnter={() => {
              FormContextValue.handleURL(`${URLContextValue.url}/api/users/signup`)
            }}
          >
            Valider
          </button>
        </form>
        <p className="signup-fasle-link" onClick={FormContextValue.handleLogin}>
          J'ai deja un compte
        </p>
      </div>
      {FormContextValue.resMsg && <div className="message-box">{FormContextValue.resMsg}</div>}
    </div>
  );
}

export default Signup;
