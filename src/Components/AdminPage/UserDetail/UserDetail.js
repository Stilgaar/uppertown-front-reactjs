import './UserDetail.css'
import { useLocation } from "react-router-dom";
import axios from 'axios';


function UserDetail() {
    const locationUser = useLocation()
    const userdata = locationUser.state?.data

    const reverif = () => {
        console.log("reverif")
    }
    
    const verifPi = (data) => {    
        let email = {data}
       axios.post("http://localhost:1337/admin/verifPi", email)
       .then((res) => console.log(res.data))}
    
    const verfJDD = (data) => {
        let email = {data}
        axios.post("http://localhost:1337/admin/verifJDD", email)
        .then((res) => console.log(res.data))}
    
    const verifAVIS = (data) => {
        let email = {data}
        axios.post("http://localhost:1337/admin/verifAVIS", email)
        .then((res) => console.log(res.data))}

    const gogoAdmin = (data) => {
        let email = {data}
        axios.post("http://localhost:1337/admin/goAdmin", email)
        .then((res) => console.log(res.data))}
    
    const nonoAdmin = (data) => {
        let email = {data}
        axios.post("http://localhost:1337/admin/noAdmin", email)
        .then((res) => console.log(res.data))}
    

    return (
        <div>
            <h2>Utilisateur en Détail</h2>
            <div>ID : {userdata._id}</div>
            <div>Prénom {userdata.firstname} | Nom : {userdata.lastname}</div>
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

            <button onClick={() => reverif(userdata.email)}>En attente de reverification</button>  
            <button onClick={() => verifPi(userdata.email)}>Identité Verifiée</button>
            <button onClick={() => verfJDD(userdata.email)}>Justificatif de Domcile Verifié</button>
            <button onClick={() => verifAVIS(userdata.email)}>Avis d'imposition verifié</button>
            <button onClick={() => gogoAdmin(userdata.email)}>Passer Admin</button>
            <button onClick={() => nonoAdmin(userdata.email)}>Retirer Admin</button>      

        </div>

        

    )

}

export default UserDetail;