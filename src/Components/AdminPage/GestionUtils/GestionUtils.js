import { useContext } from 'react';
import UtilLine from './UtilLine';
import URLcontext from '../../../Context/URLcontext';
import useFetch from '../../../Hooks/useFetch';


function GestionUtils() {

    const URLContextValue = useContext(URLcontext)
    const { data: users, refresh, error, pending } = useFetch(`${URLContextValue.url}/api/users/users`)

    const user1 = users?.length > 0 && users?.filter(user => user.userType === "userType1")
    const user2 = users?.length > 0 && users.filter(user => user.userType === "userType2")
    const user3 = users?.length > 0 && users.filter(user => user.userType === "userType3")
    const user4 = users?.length > 0 && users.filter(user => user.userType === "userType4")
    const admin = users?.length > 0 && users.filter(user => user.isAdmin === true)
    const sC = users?.length > 0 && users.filter(user => user.awaiting === true)
    const euro = users?.length > 0 && users.filter(user => user.awaitingEuro === true)

    const userType = [
        { status: sC, label: "Utilisateurs en attente de transfert de Stable Coins" },
        { status: euro, label: "Utilistateurs en attente de virement Euro" },
        { status: user1, label: "Utilisateurs sans verifications" },
        { status: user2, label: "Utilisateurs avec l'identité verifiée" },
        { status: user3, label: "Utilisateurs avec le justificatif de domcile verifié" },
        { status: user4, label: "Utilisateurs avec l'Avis d'imposition verifié" },
        { status: admin, label: "Administrateurs" },
    ]

    return (
        <div className="container-xl">
            <h3 className="bg-primary text-white t-center font-lg br-xs m-1 mb-3 p-1">Utilisateurs par type</h3>
            {error && <div>{error}</div>}
            {pending && <div>Chargement ...</div>}
            {users && userType.map(element => (
                <UtilLine key={element.label} element={element} adminRefresh={refresh} />
            ))}
        </div>
    )
}

export default GestionUtils;