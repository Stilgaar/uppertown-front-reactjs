import { Link } from "react-router-dom";
function Error404() {
    return (
        <div className="bg-white container br-xs p-5 mt-5">
            <h2>Error 401 : Unauthorized </h2>
            <div>Vous vous êtes perdus ? </div>
            <div>Nous vous invitions à vous inscrire sur <Link to='/'><span className="text-primary"> la page d'acceuil </span> </Link> pour pouvoir accèder au reste du site</div>
        </div>
    )
}

export default Error404;