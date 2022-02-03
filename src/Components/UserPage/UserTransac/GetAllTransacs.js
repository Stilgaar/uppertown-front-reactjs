import { useContext } from 'react'
import URLcontect from '../../../Context/URLcontext'
import useFetch from '../../../Hooks/useFetch'
import Biens from './Bien'

function GetALlTransacs({ user }) {

    const UrlContextValue = useContext(URLcontect)
    const { data: rep, error, pending } = useFetch(`${UrlContextValue.url}/api/users/props/${user._id}`)

    return (
        <div> <br />
            <h3 className="bg-primary text-white t-center font-lg br-xs ml-3 mr-3 mb-3 p-1">Transactions de {user.firstname} {user.lastname} </h3>
            {error && <div>{error}</div>}
            {pending && <div>Chargement ...</div>}
            {rep.length > 0 && rep.map((elem, index) => (
                <Biens key={elem._id} elem={elem} index={index} type={'props'} />
            ))}
        </div>
    )
}

export default GetALlTransacs;