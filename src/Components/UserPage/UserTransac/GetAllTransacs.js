import { useContext } from 'react'
import URLcontect from '../../../Context/URLcontext'
import useAxios from '../../../Hooks/useAxios'
import Biens from './Bien'

function GetALlTransacs({ user, id }) {

    const UrlContextValue = useContext(URLcontect)
    const [rep] = useAxios(`${UrlContextValue.url}/api/users/transacs/${id}`)

    return (
        <div>
            <div>Transactions de {user.lastname} {user.firstname}</div>
            {rep.map(elem => (
                <Biens key={elem._id} elem={elem} />
            ))}
        </div>
    )
}

export default GetALlTransacs;