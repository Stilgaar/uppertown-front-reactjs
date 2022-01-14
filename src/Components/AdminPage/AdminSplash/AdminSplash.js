function AdminSplash() {
    return (
        <>
            <div className="container p-1">
                <h3 className="bg-primary text-white t-center font-lg br-xs m-3 p-1" > Bonjour et bienvenue sur la section administrateur d'UpperTown </h3>
                <div className="card p-3">
                    <div className="text-primary p-1 fw-br"> Ici vous aurez la possilibité de :</div>
                    <ul className="fw-700">
                        <li> - Rechercher les utilistateurs par Email, Nom Prenom ou encore leurs IDentifiant unique</li>
                        <li> - Voir la liste des utilisateurs en attente de confirmation ou en attente de Stable Coins ou d'Euros</li>
                        <li> - Modifier le RIB global du site</li>
                        <li> - Ajouter une nouvelle annonce !</li>
                        <li> - Personaliser le site, (textes d'acceuil, couleurs (wip) etc)</li>
                        <li> - Et pleins d'autres trucs que j'ai pas encore implenté</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AdminSplash;