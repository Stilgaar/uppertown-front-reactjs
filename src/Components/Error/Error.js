import './Error.css'
import { Link } from "react-router-dom";


function Error() {
    return(
        <div className="erreur">
            <h2>Error 401 : Unauthorized </h2>
            <div>Vous vous êtes perdus ? </div>
            <div>Nous vous invitions à vous inscrire sur <Link to='/'><span className="erreur-false-link"> la page d'acceuil </span> </Link> pour pouvoir accèder au reste du site</div>
        </div>
    )
}

export default Error;