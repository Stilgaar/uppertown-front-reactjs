import './AdminSplash.css'

function AdminSplash() {
    return(
        <div className="adminsplash-container">
            <h3> Bonjour et bienvenue sur la section administrateur d'UpperTown </h3>

            <div>Ici vous aurez la possilibité de :</div>
            <ul>
                <li>Rechercher les utilistateurs par Email, Nom Prenom ou encore leurs IDentifiant unique</li>
                <li>Voir la liste des utilisateurs en attente de confirmation ou en attente de Stable Coins ou d'Euros</li>
                <li>Modifier le RIB global du site</li>
                <li>Ajouter une nouvelle annonce !</li>
                <li>Personaliser le site, (textes d'acceuil, couleurs etc)</li>
            </ul>
        </div>
    )
}

export default AdminSplash;