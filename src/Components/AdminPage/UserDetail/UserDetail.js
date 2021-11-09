import './UserDetail.css'
import { useLocation } from "react-router-dom";


function UserDetail() {
    const locationUser = useLocation()
    const userdata = locationUser.state?.data
    console.log("userdata ", userdata)

    const reverif = () => {
        console.log("reverif")
    }
    const verifPi = () => {
        console.log("verifPI")
    }
    
    const verfJDD = () => {
        console.log("verifJDD")
    }
    
    const verifAVIS = () => {
        console.log("verifRIB")
    }

    const gogoAdmin = () => {
        console.log("gogo EMO RANGERS")
    }
    
    const nonoAdmin = () => {
        console.log("génération non non ")
    }


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

            <button onClick={reverif}>En attente de reverification</button>  
            <button onClick={verifPi}>Identité Verifiée</button>
            <button onClick={verfJDD}>Justificatif de Domcile Verifié</button>
            <button onClick={verifAVIS}>Avis d'imposition verifié</button>
            <button onClick={gogoAdmin}>Passer Admin</button>
            <button onClick={nonoAdmin}>Retirer Admin</button>      

        </div>

        

    )

}

export default UserDetail;