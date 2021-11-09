import './UserDetail.css'
import { useLocation } from "react-router-dom";


function UserDetail() {
    const locationUser = useLocation()
    const userdata = locationUser.state?.data
    console.log("userdata ", userdata)

    return (
        <div>
            <h2>Utilisateur en Détail</h2>
            <div>Prénom {userdata.firstname} Nom : {userdata.lastname}</div>
            <div>Email : {userdata.email}</div>
            <div>Téléphone : {userdata.tel}</div>
            {userdata.brandname && <div>Entreprise : {userdata.brandname}</div>}
            <div>Nombre de Tokens : {userdata.stableCoins}</div>
            <div>RIB : {userdata.rib}</div>
            <br />

            <div> Pieces d'identité :
                <div>
                    {userdata.pi[0] ?
                        < div > {userdata.pi.map((image) => <a href={image}> <img className="userdetail-image-mignature" src={image} alt="" /></a>)} </div>
                        : <div> "Pas encore envoyé"</div>}
                </div>
            </div>

            <div> Justificatif de Domicile:
                <div>
                    {userdata.JDD[0] ?
                        < div > {userdata.JDD.map((image) => <a href={image}><img className="userdetail-image-mignature" src={image} alt="" /> </a>)} </div>
                        : <div> "Pas encore envoyé"</div>}
                </div>
            </div>


            <div> Avis d'imposition :
                <div>
                    {userdata.pi[0] ?
                        < div > {userdata.avisFiscal.map((image) => <a href={image}><img className="userdetail-image-mignature" src={image} alt="" /></a>)} </div>
                        : <div> "Pas encore envoyé"</div>}
                </div>
            </div>

            <div> RIB :
                <div>
                    {userdata.picRib ?
                        < div ><a href={userdata.picRib}> <img className="userdetail-image-mignature" src={userdata.picRib} alt="" /></a> </div>
                        : <div> "Pas encore envoyé"</div>}
                </div>
            </div>   

            <button>En attente de reverification</button>  
            <button>Identité Verifiée</button>
            <button>Justificatif de Domcile Verifié</button>
            <button>Avis d'imposition verifié</button>
            <button>Passer Admin</button>
            <button>Retirer Admin</button>      

        </div>

        

    )

}

export default UserDetail;