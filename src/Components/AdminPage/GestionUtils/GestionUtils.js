import UtilLine from './UtilLine';
import './GestionUtils.css'

function GestionUtils({ users, adminRefresh }) {

    const allUser1 = users.filter(user => user.userType === "userType1")
    const allUser2 = users.filter(user => user.userType === "userType2")
    const allUser3 = users.filter(user => user.userType === "userType3")
    const allUser4 = users.filter(user => user.userType === "userType4")
    const allUserAdmin = users.filter(user => user.isAdmin === true)
    const stableCoins = users.filter(user => user.awaiting === true)
    const euro = users.filter(user => user.awaitingEuro === true)

    const array = [
        { status: stableCoins, label: "Utilisateurs en attente de transfert de Stable Coins" },
        { status: euro, label: "Utilistateurs en attente de virement Euro" },
        { status: allUser1, label: "Utilisateurs sans verifications" },
        { status: allUser2, label: "Utilisateurs avec l'identité verifiée" },
        { status: allUser3, label: "Utilisateurs avec le justificatif de domcile verifié" },
        { status: allUser4, label: "Utilisateurs avec l'Avis d'imposition verifié" },
        { status: allUserAdmin, label: "Administrateurs" },
    ]

    return (

        <div className="gestionutilisateurs-container"> <h3>Utilisateurs par type</h3>
            {array.map((element, index) => (
                <UtilLine element={element} key={index} adminRefresh={adminRefresh} />
            ))}
        </div>
    )
}

export default GestionUtils;