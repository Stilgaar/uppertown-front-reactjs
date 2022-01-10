import { useContext } from 'react'
import URLcontect from '../../../Context/URLcontext'
import useAxios from '../../../Hooks/useAxios'
import Biens from './Bien'

function GetProps({ user, id }) {

    const UrlContextValue = useContext(URLcontect)
    const [rep] = useAxios(`${UrlContextValue.url}/api/users/props/${id}`)
    console.log(rep)

    return (
        <div> <br />
            <div>Part de Propriétés de {user.firstname} {user.lastname} </div>
            {rep.map(elem => (
                <Biens key={elem._id} elem={elem} />
            ))}
        </div>
    )
}

export default GetProps;