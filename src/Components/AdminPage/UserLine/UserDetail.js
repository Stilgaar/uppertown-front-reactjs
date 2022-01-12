import './UserLine.css';
import { useState, useContext, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import StableCoins from '../StableCoins/StableCoins';
import URLcontext from '../../../Context/URLcontext';
import FormContext from '../../../Context/FormContext';
import useAxios from '../../../Hooks/useAxios';
import { Link } from 'react-router-dom';

function UserDetail() {

    const [modalAcien, setModalAncien] = useState(false);
    const [modalAcienEuro, setModalAncienEuro] = useState(false);

    const UrlContextValue = useContext(URLcontext)
    const FormContextValue = useContext(FormContext)

    const location = useLocation();
    const id = location.state?.data;
    const [userdata, refreshUser] = useAxios(`${UrlContextValue.url}/api/users/${id}`)

    useEffect(() => { refreshUser() }, [])

    const click = () => {
        FormContextValue.handleEnvoi()
        refreshUser()
    }

    return (
        <div>
            <div className="userline-modal-container" onClick={(e) => e.stopPropagation()}>
                <div><div>
                    <h3>Détails Utilistateur : {userdata?.lastname} {userdata?.firstname}</h3><Link to="/admin">Retours</Link>
                    <div className="userline-infodebase-buttons-admin">
                        <div className="userline-infodebase">
                            <div><span className="userline-span-usertext">
                                Nom :</span> {userdata?.lastname}
                            </div>
                            <div><span className="userline-span-usertext">
                                Prénom :</span> {userdata?.firstname}
                            </div>
                            <div><span className="userline-span-usertext">
                                Email : </span> <a href={`mailto:${userdata?.email}`}>{userdata?.email}</a></div>
                            <div><span className="userline-span-usertext">
                                Téléphone : </span>{userdata?.tel}
                            </div>
                            <div><span className="userline-span-usertext">
                                ID :</span> {userdata?._id}
                            </div>
                            {userdata?.brandname && <div><span className="userline-span-usertext">
                                Entreprise : </span>{userdata?.brandname}
                            </div>}
                            <div><span className="userline-span-usertext">
                                Nombre de Tokens :</span>
                                {userdata?.stableCoins}</div>
                            <div><span className="userline-span-usertext">
                                RIB :</span>{userdata?.rib}
                            </div></div>
                        <div className="userline-buttons-admin">
                            {/* <button onClick={() => reverif(userdata.email)}>En attente de reverification</button> en attente */}
                            <button
                                className="userline-button-validate"
                                onMouseEnter={() => {
                                    FormContextValue.handleURL(`${UrlContextValue.url}/admin/verifPi/${userdata._id}`)
                                }}
                                onClick={() => click()}>
                                Identité Verifiée
                            </button>
                            <button
                                className="userline-button-validate"
                                onMouseEnter={() => {
                                    FormContextValue.handleURL(`${UrlContextValue.url}/admin/verifJDD/${userdata._id}`)
                                }}
                                onClick={() => click()}>
                                Justificatif de Domcile Verifié
                            </button>
                            <button
                                className="userline-button-validate"
                                onMouseEnter={() => {
                                    FormContextValue.handleURL(`${UrlContextValue.url}/admin/verifAVIS/${userdata._id}`)
                                }}
                                onClick={() => click()}>
                                Avis d'imposition verifié
                            </button>
                            <button
                                className="userline-button-validate"
                                onMouseEnter={() => {
                                    FormContextValue.handleURL(`${UrlContextValue.url}/admin/goAdmin/${userdata._id}`)
                                }}
                                onClick={() => click()}>
                                Passer Admin
                            </button>
                            <button
                                className="userline-button-validate"
                                onMouseEnter={() => {
                                    FormContextValue.handleURL(`${UrlContextValue.url}/admin/noAdmin/${userdata._id}`)
                                }}
                                onClick={() => click()}>
                                Retirer Admin
                            </button>
                        </div>
                    </div>
                    <div className="userline-container-boxed">
                        <div><span className="userline-text-awaiting">
                            En attente de transfert d'Euros en StableCoins ? :
                        </span>
                            {userdata?.awaiting ? "oui" : "non"}
                            <br />
                            {userdata?.awaiting &&
                                <button className="userline-button-validate"
                                    onMouseEnter={() => {
                                        FormContextValue.handleURL(`${UrlContextValue.url}/api/users/transactionDone/${userdata._id}`)
                                    }}
                                    onClick={() => click()}>
                                    Toutes les operations sont terminés
                                </button>}
                        </div>
                        {userdata?.awaiting &&
                            <div><span className="userline-text-awaiting">
                                Montants tranférés en attente de verifiactions :
                            </span>
                            </div>}
                        {userdata?.montant?.map((argent) =>
                            <div>
                                {argent}
                                <button className="userline-button-validate"
                                    onMouseEnter={() => {
                                        FormContextValue.handleData({ argent: argent })
                                        FormContextValue.handleURL(`${UrlContextValue.url}/api/users/archiveMoney/${userdata._id}`)
                                    }}
                                    onMouseLeave={() => {
                                        FormContextValue.setClickData("")
                                    }}
                                    onClick={() => click()}>
                                    Stable Coins Transférés
                                </button>
                            </div>)}
                    </div>
                    <StableCoins key={userdata?._id} userdata={userdata} refreshUser={refreshUser} />

                    <div className="userline-container-boxed">
                        <div> <span className="userline-text-awaiting">
                            En attente de transfert de Stable Coins en Euro ? :
                        </span>
                            {userdata.awaitingEuro ? "oui" : "non"}
                            <br />
                            {userdata.awaitingEuro &&
                                <button
                                    className="userline-button-validate"
                                    onMouseEnter={() => {
                                        FormContextValue.handleURL(`${UrlContextValue.url}/api/users/transtactionEuroDone/${userdata._id}`)
                                    }}
                                    onClick={() => click()}>
                                    Toutes les operations sont terminés
                                </button>
                            }
                        </div>
                        {userdata?.awaiting &&
                            <div><span className="userline-text-awaiting">
                                Montants en Euro demandant à être transférés sur leurs compte en banque :
                            </span> </div>
                        }
                        {userdata?.montantEuro?.map((argent) =>
                            <div >{argent} <button
                                className="userline-button-validate"
                                onMouseEnter={() => {
                                    FormContextValue.handleData({ argent: argent })
                                    FormContextValue.handleURL(`${UrlContextValue.url}/api/users/archiveEuros/${userdata._id}`)
                                }}
                                onMouseLeave={() => {
                                    FormContextValue.setClickData("")
                                }}
                                onClick={() => click(argent)}>
                                Euros Transférés
                            </button>
                            </div>)}</div>
                    <br /> <br />
                    <button className="userline-button-validate"
                        onClick={() => setModalAncien(current => !current)}>
                        <div> Historique Stable Coins : </div>
                    </button>
                    {modalAcien &&
                        <div className="elders-scroll">
                            {userdata?.ancientMontants?.map((argent, index) =>
                                <div className="userline-line">
                                    Transaction N#{index + 1} {argent}
                                </div>
                            )} </div>}
                    <button className="userline-button-validate"
                        onClick={() => setModalAncienEuro(current => !current)}>
                        <div> Historique Euros : </div>
                    </button>
                    {modalAcienEuro &&
                        <div className="elders-scroll">
                            {userdata?.ancientMontantsEuro?.map((argent, index) =>
                                <div
                                    className="userline-line">
                                    Transaction N#{index + 1} {argent}
                                </div>)}</div>}
                    <div><span className="userline-span-usertext"> Pieces d'identité :</span>
                        <div> {userdata?.pi?.[0] ?
                            < div > {userdata?.pi?.map((image) => <a href={image}>
                                <img className="userdetail-image-mignature" src={image} alt="" /></a>)}
                            </div>
                            : <div> "Non renseigné"</div>
                        }</div></div>
                    <div><span className="userline-span-usertext">
                        Justificatif de Domicile:</span>
                        <div>{userdata?.JDD?.[0] ?
                            < div >{userdata?.JDD?.map((image) =>
                                <a href={image}><img className="userdetail-image-mignature" src={image} alt="" /></a>)}
                            </div>
                            : <div> "Non renseigné"</div>
                        }
                        </div>
                    </div>
                    <div><span className="userline-span-usertext">Avis d'imposition :</span>
                        <div> {userdata?.pi?.[0] ?
                            <div> {userdata?.avisFiscal?.map((image) =>
                                <a href={image}><img className="userdetail-image-mignature" src={image} alt="" /></a>
                            )}
                            </div>
                            : <div> "Non renseigné"</div>
                        } </div></div>
                    <div><span className="userline-span-usertext">RIB :</span>
                        <div> {userdata?.picRib ?
                            <div>
                                <a href={userdata?.picRib}><img className="userdetail-image-mignature" src={userdata?.picRib} alt="" /></a>
                            </div>
                            : <div>"Non renseigné"</div>
                        }
                        </div>
                        <br />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail;