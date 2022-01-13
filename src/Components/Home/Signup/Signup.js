import FormContext from "../../../Context/FormContext";
import { useContext } from 'react';
import URLcontext from "../../../Context/URLcontext";
import RibLine from "../../AdminPage/Addrib/RibLine";
import { signup } from "../../../JSON/Arrays";

function Signup() {

  const URLContextValue = useContext(URLcontext)
  const FormContextValue = useContext(FormContext);

  return (
    <div className="form"
      onClick={FormContextValue.handleClick}>
      <div className="form-form"
        onClick={(e) => e.stopPropagation()}>
        <form className="container"
          onSubmit={FormContextValue.handleSubmit}>
          <h2 className="text-primary t-center mb-3">Créer mon compte</h2>
          {signup.map((entry) => (
            <RibLine entry={entry} key={entry.name} />
          ))}
          <button
            className="btn-outlined-primary text-hover-white font-md"
            type="submit"
            onMouseEnter={() => {
              FormContextValue.handleURL(`${URLContextValue.url}/api/users/signup`)
            }}
          >
            Valider
          </button>
        </form>
        <p className="text-compl-hover-primary t-center" onClick={FormContextValue.handleLogin}>
          J'ai deja un compte
        </p>
      </div>
      {FormContextValue.resMsg && <div className="message-box p5">{FormContextValue.resMsg}</div>}
    </div>
  );
}

export default Signup;
