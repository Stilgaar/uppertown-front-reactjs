import { useContext } from 'react';
import URLcontext from "../../../Context/URLcontext";
import RibLine from "../../AdminPage/Addrib/RibLine";
import { signup } from "../../../JSON/Arrays";
import { useCon } from "../../../Hooks/useCon";

function Signup() {

  const URLContextValue = useContext(URLcontext)

  const { handleClick, handleSubmit, handleURL, handleLogin, resMsg } = useCon()

  return (
    <div className="form"
      onClick={handleClick}>
      <div className="form-form"
        onClick={(e) => e.stopPropagation()}>
        <form className="container"
          onSubmit={handleSubmit}>
          <h2 className="text-primary t-center mb-3">Créer mon compte</h2>
          {signup.map((entry) => (
            <RibLine entry={entry} key={entry.name} />
          ))}
          <button
            className="btn-outlined-primary text-hover-white font-md"
            type="submit"
            onMouseEnter={() => {
              handleURL(`${URLContextValue.url}/api/users/signup`)
            }}
          >
            Valider
          </button>
        </form>
        <p className="text-compl-hover-primary t-center" onClick={handleLogin}>
          J'ai deja un compte
        </p>
      </div>
      {resMsg && <div className="message-box p5">{resMsg}</div>}
    </div>
  );
}

export default Signup;
