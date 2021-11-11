import './UserLine.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function UserLine({ userdata, adminRefresh }) {

    const [modal, setModal] = useState(false);
    const [modalAcien, setModalAncien] = useState(false);

    const reverif = () => {
        console.log("reverif")
    }

    const verifPi = (data) => {
        let email = { data }
        axios.post("http://localhost:1337/admin/verifPi", email)
            .then((res) => console.log(res.data))
    }

    const verfJDD = (data) => {
        let email = { data }
        axios.post("http://localhost:1337/admin/verifJDD", email)
            .then((res) => console.log(res.data))
    }

    const verifAVIS = (data) => {
        let email = { data }
        axios.post("http://localhost:1337/admin/verifAVIS", email)
            .then((res) => console.log(res.data))
    }

    const gogoAdmin = (data) => {
        let email = { data }
        axios.post("http://localhost:1337/admin/goAdmin", email)
            .then((res) => console.log(res.data))
    }

    const nonoAdmin = (data) => {
        let email = { data }
        axios.post("http://localhost:1337/admin/noAdmin", email)
            .then((res) => console.log(res.data))
    }

    const transfertDone = (argent, email) => {
        let sumbit = { argent, email }
        axios.post("http://localhost:1337/api/users/archiveMoney", sumbit)
            .then((res) => console.log(res.data))
            .then(() => adminRefresh())
    }

    const transactionDone = (data) => {
        let email = { data }
        axios.post("http://localhost:1337/api/users/transactionDone", email)
            .then((res) => console.log(res.data))
            .then(() => adminRefresh())
    }

    return (

        <div>
            <button className="userline-button-search" onClick={() => setModal(current => !current)}>

                <div className="gestionutilisateurs-container-container">

                    <div className="gestionutilistatuers-container-lastname">
                        <span className="gestionutilisateurs-element-texte">Nom de famille : 
                        </span> {userdata.lastname}</div>

                    <div className="gestionutilistatuers-container-firstname">
                        <span className="gestionutilisateurs-element-texte">Prénom : 
                        </span> {userdata.firstname}</div>

                    <div className="gestionutilistatuers-container-email">
                        <span className="gestionutilisateurs-element-texte">Email : 
                        </span> {userdata.email}</div>

                    {userdata.pi[0] && <div className="userupdate-mapped"> Pieces d'ID : 
                        {userdata.pi.map((data) =>
                            <div> <img className="userupdate-image" src={data} alt="" /></div>
                        )}
                    </div>}
                    {userdata.JDD[0] && <div className="userupdate-mapped"> Justificatif Domicile : 
                        {userdata.JDD.map((data) =>
                            <div> <img className="userupdate-image" src={data} alt="" /></div>
                        )}
                    </div>}
                    {userdata.avisFiscal[0] && <div div className="userupdate-mapped"> Avis Fiscaux : 
                        {userdata.avisFiscal.map((data) =>
                            <div> <img className="userupdate-image" src={data} alt="" /></div>
                        )}

                    </div>}
                </div>
            </button>

            {modal &&
                <div className="userline-modal-container">
                    <div>
                        <h2>Utilisateur en Détail</h2>
                        <div>ID : {userdata._id}</div>
                        <div>Prénom {userdata.firstname} | Nom : {userdata.lastname}</div>
                        <div>Email : {userdata.email}</div>
                        <div>Téléphone : {userdata.tel}</div>
                        {userdata.brandname && <div>Entreprise : {userdata.brandname}</div>}
                        <div>Nombre de Tokens : {userdata.stableCoins}</div>
                        <div>RIB : {userdata.rib}</div>

                        <div>A transferer de l'argent : {userdata.awaiting ? "oui" : "non"}<button onClick={() => transactionDone(userdata.email)}>Operations finies</button></div>
                        <div>Montants tranférés en attentte de verifiactions :
                        </div> {userdata.montant.map((argent) =>
                            <div>{argent}<button onClick={() => transfertDone(argent, userdata.email)}>Stable Coins Transférés</button>
                            </div>)}

                        <button onClick={() => setModalAncien(current => !current)}><div> Historique des anciens montants :
                        </div></button> {modalAcien && <div>{userdata.ancientMontants.map((argent) => <div>{argent}</div>)}</div>}


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

                    <button onClick={() => setModal(current => !current)}>FERMER</button>
                </div>}

        </div>






    )
}

export default UserLine;