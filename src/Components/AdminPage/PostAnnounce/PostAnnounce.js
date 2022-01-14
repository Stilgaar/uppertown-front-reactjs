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
            <div className="container-xl">
                <h3 className="bg-primary text-white t-center font-lg br-xs m-1 mb-3 p-1">Publier une nouvelle Annonce</h3>
                <form onSubmit={(e) => FormContextValue.handleForm(e)}>

                    <div className="">
                        {annonce.map((entry) => (
                            <AnnounceLine key={entry.name} entry={entry} />))}
                        <button className="btn-outlined-primary text-hover-white font-sm"
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

