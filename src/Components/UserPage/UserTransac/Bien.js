import useFetch from "../../../Hooks/useFetch";
import { Link } from "react-router-dom";
import { useCon } from "../../../Hooks/useCon";

function Biens({ elem, index, type }) {

    const { url } = useCon()
    const { data: announce } = useFetch(`${url}/api/announces/${elem.annonceId}`)

    return (
        <div className='card bg-white t-center mr-5 ml-5 fw-b'>
            <div className="card mr-5 ml-5 p-2">
                {type === 'transac' && <div className="text-secondary mb-1 fw-br">{index + 1} - Transaction sur {announce.title} </div>}
                {type === 'props' && <div className="text-secondary mb-1 fw-br">{index + 1} - Proprieté  {announce.title} </div>}
                <div className="mr-5 ml-5">
                    <div> <span className="text-primary"> Vous avez investis :</span> {elem.amountStableCoins?.toLocaleString()} StableCoins</div>
                    <Link to={{ pathname: `/announce-detail/${announce._id}` }}
                        className="text-compl-hover-primary t-center" >
                        Détails de l'annonce</Link>
                </div>
            </div>
        </div >
    )
}

export default Biens; 