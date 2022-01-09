import UtilLine from './UtilLine';
import './GestionUtils.css'

function GestionUtils({ users, adminRefresh }) {

    const user1 = users.filter(user => user.userType === "userType1")
    const user2 = users.filter(user => user.userType === "userType2")
    const user3 = users.filter(user => user.userType === "userType3")
    const user4 = users.filter(user => user.userType === "userType4")
    const admin = users.filter(user => user.isAdmin === true)
    const sC = users.filter(user => user.awaiting === true)
    const euro = users.filter(user => user.awaitingEuro === true)

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
        <div className="gestionutilisateurs-container"> <h3>Utilisateurs par type</h3>
            {userType.map((element, index) => (
                <UtilLine key={index} element={element} adminRefresh={adminRefresh} />
            ))}
        </div>
    )
}

export default GestionUtils;