import useAxios from "../../../Hooks/useAxios";
import URLcontect from '../../../Context/URLcontext'
import { useContext } from 'react'
import { Link } from "react-router-dom";

function Biens({ elem }) {

    const UrlContextValue = useContext(URLcontect)
    const [announce] = useAxios(`${UrlContextValue.url}/api/announces/${elem.annonceId}`)

    return (
        <div className="biens">
            <div> Vous avez investis : {elem.amountStableCoins} StableCoins</div>
            <div> Sur : {announce.title} </div>
            <Link to={{
                pathname: '/announce-detail',
                state: { data: announce },
            }}
                className="link"
            >Détails de l'annonce</Link>
        </div >
    )
}

export default Biens; 