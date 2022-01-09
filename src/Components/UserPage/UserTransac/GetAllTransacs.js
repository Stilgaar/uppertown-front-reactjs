import { useContext } from 'react'
import URLcontect from '../../../Context/URLcontext'
import useAxios from '../../../Hooks/useAxios'

function GetALlTransacs({id}) {
    console.log(id)

    const UrlContextValue = useContext(URLcontect)
    const [rep] = useAxios(`${UrlContextValue.url}/api/users/transacs/${id}`)

    console.log(rep)

    return(
        <div>
poeut
        </div>
    )
}

export default GetALlTransacs;