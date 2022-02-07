import { annonce } from "../../../JSON/Arrays";
import AnnounceLine from "./AnnounceLine";
import { useCon } from '../../../Hooks/useCon'

function PostAnnounce() {

    const { handleSubmit, handleURL, url } = useCon()



    return (
        <div>
            <div className="container-xl">
                <h3 className="bg-primary text-white t-center font-lg br-xs m-1 mb-3 p-1">
                    Publier une nouvelle Annonce
                </h3>
                <form onSubmit={handleSubmit}>

                    <div className="">
                        {annonce.map((entry) => (
                            <AnnounceLine key={entry.name} entry={entry} />))}
                        <button className="btn-outlined-primary text-hover-white font-sm"
                            onMouseEnter={() => {
                                handleURL(`${url}/api/announces/creatannouncewithpics`)
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

