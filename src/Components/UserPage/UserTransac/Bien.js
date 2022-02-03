import useFetch from "../../../Hooks/useFetch";
import URLcontect from '../../../Context/URLcontext'
import { useContext } from 'react'
import { Link } from "react-router-dom";

function Biens({ elem, index, type }) {

    const UrlContextValue = useContext(URLcontect)
    const { data: announce } = useFetch(`${UrlContextValue.url}/api/announces/${elem.annonceId}`)

    return (
        <div className='card bg-white t-center mr-5 ml-5 fw-b'>
            <div className="card mr-5 ml-5 p-2">
                {type === 'transac' && <div className="text-secondary mb-1 fw-br">Transaction n# {index + 1}</div>}
                {type === 'props' && <div className="text-secondary mb-1 fw-br">Proprieté n# {index + 1}</div>}
                <div className="card mr-5 ml-5">
                    <div> <span className="text-primary"> Vous avez investis :</span> {elem.amountStableCoins?.toLocaleString()} StableCoins</div>
                    <div className="mb-1"> <span className="text-primary"> Sur cette annonce : </span>{announce.title} </div>
                    <Link to={{
                        pathname: '/announce-detail',
                        state: { data: announce._id },
                    }}
                        className="text-compl-hover-primary t-center" >
                        Détails de l'annonce</Link>
                </div>
            </div>
        </div >
    )
}

export default Biens; 