import "./PostAnnounce.css";
import { useContext } from "react";
import URLcontext from "../../../Context/URLcontext";
import FormContext from "../../../Context/FormContext";
import { annonce } from "../../../JSON/Arrays";
import AnnounceLine from "./AnnounceLine";

function PostAnnounce() {
    const URLContextValue = useContext(URLcontext)
    const FormContextValue = useContext(FormContext)

    return (
        <div>
            <div className="postannounce-container-container">
                <div className="postannounce-container"><h3>Publier une nouvelle Annonce</h3></div>
                <form onSubmit={(e) => FormContextValue.handleForm(e)}>
                    <div>
                        {annonce.map((entry) => (
                            <AnnounceLine key={entry.name} entry={entry} />))}

                        <button className="postannounce-button-validate"
                            onMouseEnter={() => {
                                FormContextValue.handleURL(`${URLContextValue.url}/api/announces/creatannouncewithpics`)
                            }}
                            type="submit">
                            Envoyer l'annonce !
                        </button>
                    </div>
                </form>
            </div> </div>
    )
}
export default PostAnnounce;

