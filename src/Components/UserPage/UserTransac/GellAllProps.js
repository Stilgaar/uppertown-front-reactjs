import { useContext } from 'react'
import URLcontect from '../../../Context/URLcontext'
import useAxios from '../../../Hooks/useAxios'
import Biens from './Bien'

function GetProps({ user }) {

    const UrlContextValue = useContext(URLcontect)
    const [rep] = useAxios(`${UrlContextValue.url}/api/users/props/${user._id}`)

    return (
        <div> <br />
            <h3 className="bg-primary text-white t-center font-lg br-xs ml-3 mr-3 mb-3 p-1"> Parts de Proprieté de {user.firstname} {user.lastname} </h3>
            {rep.map((elem, index) => (
                <Biens key={elem._id} elem={elem} index={index} type={'props'} />
            ))}
        </div>
    )
}

export default GetProps;