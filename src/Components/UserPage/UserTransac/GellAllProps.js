import { useCon } from '../../../Hooks/useCon'
import useFetch from '../../../Hooks/useFetch'
import Biens from './Bien'

function GetProps({ user }) {

    const { url } = useCon()
    const { data: rep, error, pending } = useFetch(`${url}/api/users/props/${user._id}`)

    return (
        <div> <br />
            <h3 className="bg-primary text-white t-center font-lg br-xs ml-3 mr-3 mb-3 p-1"> Parts de Proprieté de {user.firstname} {user.lastname} </h3>
            {error && <div>{error}</div>}
            {pending && <div>Chargement ...</div>}
            {rep.length > 0 && rep.map((elem, index) => (
                <Biens key={elem._id} elem={elem} index={index} type={'props'} />
            ))}
        </div>
    )
}

export default GetProps;