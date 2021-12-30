import './UserLine.css';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import StableCoins from '../StableCoins/StableCoins';
import URLcontext from '../../../Context/URLcontext';
import FormContext from '../../../Context/FormContext';

function UserLine({ userdata, adminRefresh }) {

    const [modal, setModal] = useState(false);
    const [modalAcien, setModalAncien] = useState(false);
    const [modalAcienEuro, setModalAncienEuro] = useState(false);
    const URLContextValue = useContext(URLcontext)
    const FormContextValue = useContext(FormContext)

    const click = (url, argent) => {
        FormContextValue.handleURL(`${URLContextValue.url}${url}`)
        FormContextValue.handleData(userdata.email, argent)
        FormContextValue.handleEnvoi()
        adminRefresh()
    }


    return (
        <div>
            <div className="userline-button-search" onClick={() => setModal(current => !current)}>
                <div className="gestionutilisateurs-container-container">
                    <div className="gestionutilistatuers-container-lastname">
                        <span className="gestionutilisateurs-element-texte">
                            Nom de famille : </span> {userdata.lastname} </div>

                    <div className="gestionutilistatuers-container-firstname">
                        <span className="gestionutilisateurs-element-texte">
                            Prénom : </span> {userdata.firstname}</div>

                    <div className="gestionutilistatuers-container-email">
                        <span className="gestionutilisateurs-element-texte">
                            Email :</span> {userdata.email} </div>

                    {userdata.pi[0] && <div className="userupdate-mapped">
                        Pieces d'ID :
                        {userdata.pi.map((data) =>
                            <div><img className="userupdate-image" src={data} alt="piece identité" />
                            </div>
                        )}</div>}

                    {userdata.JDD[0] && <div className="userupdate-mapped">
                        Justificatif Domicile :
                        {userdata.JDD.map((data) =>
                            <div><img className="userupdate-image" src={data} alt="justif" />
                            </div>
                        )}</div>}

                    {userdata.avisFiscal[0] && <div div className="userupdate-mapped">
                        Avis Fiscaux :
                        {userdata.avisFiscal.map((data) =>
                            <div><img className="userupdate-image" src={data} alt="avis fiscal" />
                            </div>
                        )}</div>}
                </div>
            </div>

            {modal &&
                <div className="modal-externe" onClick={() => setModal(current => !current)}>
                    <div className="userline-modal-container" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setModal(current => !current)}>X</button>
                        <div><div>
                                <h3>Détails Utilistateur : {userdata.lastname} {userdata.firstname}</h3>
                                <div className="userline-infodebase-buttons-admin">
                                    <div className="userline-infodebase">
                                        <div>
                                            <span className="userline-span-usertext">
                                                Nom :</span> {userdata.lastname}
                                        </div>
                                        <div>
                                            <span className="userline-span-usertext">
                                                Prénom :</span> {userdata.firstname}
                                        </div>
                                        <div>
                                            <span className="userline-span-usertext">
                                                Email : </span> <a href={`mailto:${userdata.email}`}>{userdata.email}</a></div>
                                        <div>
                                            <span className="userline-span-usertext">
                                                Téléphone : </span>{userdata.tel}
                                        </div>
                                        <div>
                                            <span className="userline-span-usertext">
                                                ID :</span> {userdata._id}
                                        </div>
                                        {userdata.brandname && <div>
                                            <span className="userline-span-usertext">
                                                Entreprise : </span>{userdata.brandname}
                                        </div>}
                                        <div>
                                            <span className="userline-span-usertext">
                                                Nombre de Tokens :</span>
                                            {userdata.stableCoins}</div>
                                        <div>
                                            <span className="userline-span-usertext">
                                                RIB :</span>{userdata.rib}
                                        </div>
                                    </div>

                                    <div className="userline-buttons-admin">
                                        {/* <button onClick={() => reverif(userdata.email)}>En attente de reverification</button> en attente */}
                                        <button
                                            className="userline-button-validate"
                                            onClick={() => click("/admin/verifPi")}>
                                            Identité Verifiée
                                        </button>
                                        <button
                                            className="userline-button-validate"
                                            onClick={() => click("/admin/verifJDD")}>
                                            Justificatif de Domcile Verifié
                                        </button>
                                        <button
                                            className="userline-button-validate"
                                            onClick={() => click("/admin/verifAVIS")}>
                                            Avis d'imposition verifié
                                        </button>
                                        <button
                                            className="userline-button-validate"
                                            onClick={() => click("/admin/goAdmin")}>
                                            Passer Admin
                                        </button>
                                        <button
                                            className="userline-button-validate"
                                            onClick={() => click("/admin/noAdmin")}>
                                            Retirer Admin
                                        </button>
                                    </div>
                                </div>

                                <div className="userline-container-boxed">
                                    <div>
                                        <span className="userline-text-awaiting">
                                            En attente de transfert d'Euros en StableCoins ? :
                                        </span>
                                        {userdata.awaiting ? "oui" : "non"}
                                        <br />
                                        {userdata.awaiting &&
                                            <button className="userline-button-validate"
                                            onClick={() => click("/api/users/transactionDone")}>
                                                Toutes les operations sont terminés
                                            </button>}
                                    </div>
                                    {userdata.awaiting &&
                                        <div>
                                            <span className="userline-text-awaiting">
                                                Montants tranférés en attente de verifiactions :
                                            </span>
                                        </div>}
                                    {userdata.montant.map((argent) =>
                                        <div>
                                            {argent}
                                            <button className="userline-button-validate"
                                            onClick={() => click("/api/users/archiveMoney", argent)}>
                                                 Stable Coins Transférés
                                            </button>
                                        </div>)}
                                </div>

                                <StableCoins userdata={userdata} adminRefresh={adminRefresh} />

                                <div className="userline-container-boxed">
                                    <div>
                                        <span className="userline-text-awaiting">
                                            En attente de transfert de Stable Coins en Euro ? :
                                        </span>
                                        {userdata.awaitingEuro ? "oui" : "non"}
                                        <br />
                                        {userdata.awaitingEuro &&
                                            <button
                                                className="userline-button-validate"
                                                onClick={() => click("/api/users/transtactionEuroDone")}>
                                                 Toutes les operations sont terminés
                                            </button>
                                        }
                                    </div>
                                    {userdata.awaiting &&
                                        <div>
                                            <span className="userline-text-awaiting">
                                                Montants en Euro demandant à être transférés sur leurs compte en banque :
                                            </span>
                                        </div>
                                    }
                                    {userdata.montantEuro.map((argent) =>
                                        <div >
                                            {argent}
                                            <button
                                                className="userline-button-validate"
                                                onClick={() => click("/api/users/archiveEuros", argent)}>
                                                Euros Transférés
                                            </button>
                                        </div> )}</div>

                                <br /> <br />

                                <button className="userline-button-validate"
                                    onClick={() => setModalAncien(current => !current)}>
                                    <div> Historique Stable Coins : </div>
                                </button>
                                {modalAcien &&
                                    <div className="elders-scroll">
                                        {userdata.ancientMontants.map((argent, index) =>
                                            <div className="userline-line">
                                                Transaction N#{index + 1} {argent}
                                            </div>
                                        )} </div> }
                                <button className="userline-button-validate"
                                    onClick={() => setModalAncienEuro(current => !current)}>
                                    <div> Historique Euros : </div>
                                </button>
                                {modalAcienEuro &&
                                    <div className="elders-scroll">
                                        {userdata.ancientMontantsEuro.map((argent, index) =>
                                            <div
                                                className="userline-line">
                                                Transaction N#{index + 1} {argent}
                                            </div> )}</div> }


                                <div>
                                    <span className="userline-span-usertext">
                                        Pieces d'identité :
                                    </span>
                                    <div>
                                        {userdata.pi[0] ?
                                            < div >
                                                {userdata.pi.map((image) =><a href={image}><img className="userdetail-image-mignature" src={image} alt="" /></a>)}
                                            </div>
                                            : <div> "Pas encore envoyé"</div>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <span className="userline-span-usertext">
                                        Justificatif de Domicile:</span>
                                    <div>
                                        {userdata.JDD[0] ?
                                            < div >
                                                {userdata.JDD.map((image) =>
                                                    <a href={image}><img className="userdetail-image-mignature" src={image} alt="" /></a> )}
                                            </div>
                                            : <div> "Pas encore envoyé"</div>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <span className="userline-span-usertext">
                                        Avis d'imposition :
                                    </span>
                                    <div>
                                        {userdata.pi[0] ?
                                            <div>
                                                {userdata.avisFiscal.map((image) =>
                                                    <a href={image}><img className="userdetail-image-mignature" src={image} alt="" /></a>
                                                )}
                                            </div>
                                            : <div> "Pas encore envoyé"</div>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <span className="userline-span-usertext">
                                        RIB :
                                    </span>
                                    <div>
                                        {userdata.picRib ?
                                            < div >
                                                <a href={userdata.picRib}><img className="userdetail-image-mignature" src={userdata.picRib} alt="" /></a>
                                            </div>
                                            : <div>"Pas encore envoyé"</div>
                                        }
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </div >

    )
}

export default UserLine;