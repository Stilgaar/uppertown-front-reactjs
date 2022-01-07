import "./PostAnnounce.css";
import { useContext, useEffect } from "react";
import URLcontext from "../../../Context/URLcontext";
import FormContext from "../../../Context/FormContext";
import { annonce } from "../../../JSON/Arrays";
import AnnounceLine from "./AnnounceLine";


function PostAnnounce() {
    const URLContextValue = useContext(URLcontext)
    const FormContextValue = useContext(FormContext)

    useEffect(() => {
        FormContextValue.handleURL(`${URLContextValue.url}/api/announces/creatannouncewithpics`)
    }, [])

    return (

        <div>
            <div className="postannounce-container-container">
                <div className="postannounce-container"><h3>Publier une nouvelle Annonce</h3></div>
                <form onSubmit={FormContextValue.handleForm}>
                    <div>
                        {annonce.map((entry, index) => (
                            <AnnounceLine key={index} entry={entry} />))}

                        <button className="postannounce-button-validate" type="submit">Envoyer l'annonce !</button></div>
                </form>
            </div> </div>
    )
}
export default PostAnnounce;

