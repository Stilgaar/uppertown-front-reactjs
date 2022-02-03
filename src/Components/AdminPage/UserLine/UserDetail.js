import { useState, useContext, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import StableCoins from '../StableCoins/StableCoins';
import URLcontext from '../../../Context/URLcontext';
import useFetch from '../../../Hooks/useFetch';
import { Link } from "react-router-dom";
import { useCon } from '../../../Hooks/useCon'

function UserDetail() {

    const UrlContextValue = useContext(URLcontext)

    const { handleURL, setClickData, handleData, handleEnvoi } = useCon()
    const [modal, setModal] = useState('')

    const location = useLocation();
    const id = location.state?.data;
    const { data: userdata, refresh: refreshUser } = useFetch(`${UrlContextValue.url}/api/users/${id}`)

    useEffect(() => {
        refreshUser()
    }, [refreshUser])

    const click = () => {
        handleEnvoi()
        setTimeout(() => {
            refreshUser()
        }, 50)
    }

    return (
        <div className='container-xl bg-white m-3 p-3 br-xs'>
            <div className="" onClick={(e) => e.stopPropagation()}>
                <div>
                    <div>
                        <h3 className="bg-primary text-white t-center font-lg br-xs m-1 mb-3 p-1">
                            Détails Utilisateur : {userdata?.lastname} {userdata?.firstname}
                        </h3>
                        <div className="row display-f justify-center">
                            <Link
                                to="/admin">
                                <button className="btn-outlined-primary text-hover-white font-sm">
                                    Retours
                                </button>
                            </Link>


                            <button
                                className="btn-outlined-primary text-hover-white font-sm"
                                onMouseEnter={() => {
                                    handleURL(`${UrlContextValue.url}/admin/verifPi/${userdata._id}`)
                                }}
                                onClick={() => click()}>
                                Identité Verifiée
                            </button>
                            <button
                                className="btn-outlined-primary text-hover-white font-sm"
                                onMouseEnter={() => {
                                    handleURL(`${UrlContextValue.url}/admin/verifJDD/${userdata._id}`)
                                }}
                                onClick={() => click()}>
                                Justificatif de Domcile Verifié
                            </button>
                            <button
                                className="btn-outlined-primary text-hover-white font-sm"
                                onMouseEnter={() => {
                                    handleURL(`${UrlContextValue.url}/admin/verifAVIS/${userdata._id}`)
                                }}
                                onClick={() => click()}>
                                Avis d'imposition verifié
                            </button>
                            <button
                                className="btn-outlined-primary text-hover-white font-sm"
                                onMouseEnter={() => {
                                    handleURL(`${UrlContextValue.url}/admin/goAdmin/${userdata._id}`)
                                }}
                                onClick={() => click()}>
                                Passer Admin
                            </button>
                            <button
                                className="btn-outlined-primary text-hover-white font-sm"
                                onMouseEnter={() => {
                                    handleURL(`${UrlContextValue.url}/admin/noAdmin/${userdata._id}`)
                                }}
                                onClick={() => click()}>
                                Retirer Admin
                            </button>
                        </div>

                        <div className="card container col-5-xl col-5-lg col-6-md col-12-sm col-12-xs t-start mt-1 mb-1">
                            <div><span className="fw-br text-primary p-1">
                                Nom :</span> {userdata?.lastname}
                            </div>

                            <div><span className="fw-br text-primary p-1">
                                Prénom :</span> {userdata?.firstname}
                            </div>

                            <div><span className="fw-br text-primary p-1">
                                Email : </span> <a href={`mailto:${userdata?.email}`}>{userdata?.email}</a>
                            </div>

                            <div><span className="fw-br text-primary p-1">
                                Téléphone : </span>{userdata?.tel}
                            </div>

                            <div><span className="fw-br text-primary p-1">
                                ID :</span> {userdata?._id}
                            </div>

                            {userdata?.brandname && <div><span className="fw-br text-primary p-1">
                                Entreprise : </span>{userdata?.brandname}
                            </div>}

                            <div><span className="fw-br text-primary p-1">
                                Nombre de Tokens :</span>
                                {userdata?.stableCoins}
                            </div>

                            <div><span className="fw-br text-primary p-1">
                                RIB : </span>{userdata?.rib}
                            </div></div>

                        <div className="card container col-5-xl col-5-lg col-6-md col-12-sm col-12-xs t-start mt-1 mb-1">
                            <div><span className="fw-br text-primary">
                                En attente de transfert d'Euros en StableCoins ? :
                            </span>
                                {userdata?.awaiting ? <span className='text-primary'> Oui </span> : <span className='text-secondary'> Non </span>}
                                <br />
                                {userdata?.awaiting &&
                                    <button className="btn-outlined-primary text-hover-white font-sm"
                                        onMouseEnter={() => {
                                            handleURL(`${UrlContextValue.url}/api/users/transactionDone/${userdata._id}`)
                                        }}
                                        onClick={() => click()}>
                                        Toutes les operations sont terminés
                                    </button>}
                            </div>
                            {userdata?.awaiting &&
                                <div><span className="fw-br text-primary">
                                    Montants tranférés en attente de verifiactions :
                                </span>
                                </div>}
                            {userdata?.montant?.map((argent) =>
                                <div key={argent}>
                                    {argent}
                                    <button className="btn-outlined-primary text-hover-white font-sm"
                                        onMouseEnter={() => {
                                            handleData({ argent: argent })
                                            handleURL(`${UrlContextValue.url}/api/users/archiveMoney/${userdata._id}`)
                                        }}
                                        onMouseLeave={() => {
                                            setClickData("")
                                        }}
                                        onClick={() => click()}>
                                        Stable Coins Transférés
                                    </button>
                                </div>)}

                            <StableCoins key={userdata?._id} userdata={userdata} refreshUser={refreshUser} />

                        </div>


                        <div className="card container col-5-xl col-5-lg col-6-md col-12-sm col-12-xs t-start mt-1 mb-1">
                            <div>
                                <span className="fw-br text-primary">
                                    En attente de transfert de Stable Coins en Euro ? :
                                </span>
                                {userdata.awaitingEuro ? <span className='text-primary'> Oui </span> : <span className='text-secondary'> Non </span>}
                                <br />
                                {userdata.awaitingEuro &&
                                    <button
                                        className="btn-outlined-primary text-hover-white font-sm"
                                        onMouseEnter={() => {
                                            handleURL(`${UrlContextValue.url}/api/users/transtactionEuroDone/${userdata._id}`)
                                        }}
                                        onClick={() => click()}>
                                        Toutes les operations sont terminés
                                    </button>
                                }
                            </div>

                            {userdata?.awaiting &&
                                <div>
                                    <span className="fw-br text-primary">
                                        Montants en Euro demandant à être transférés sur leurs compte en banque :
                                    </span>
                                </div>
                            }

                            {userdata?.montantEuro?.map((argent) =>
                                <div key={argent}>{argent} <button
                                    className="btn-outlined-primary text-hover-white font-sm"
                                    onMouseEnter={() => {
                                        handleData({ argent: argent })
                                        handleURL(`${UrlContextValue.url}/api/users/archiveEuros/${userdata._id}`)
                                    }}
                                    onMouseLeave={() => {
                                        setClickData("")
                                    }}
                                    onClick={() => click(argent)}>
                                    Euros Transférés
                                </button>
                                </div>)}
                        </div>

                        <div className='display-f justify-center'>
                            <button className="btn-outlined-primary text-hover-white font-sm"
                                onClick={() => setModal("sc")}>
                                <div> Historique Stable Coins : </div>
                            </button>

                            <button className="btn-outlined-primary text-hover-white font-sm"
                                onClick={() => setModal("euro")}>
                                <div> Historique Euros : </div>
                            </button>
                            <button className="btn-outlined-primary text-hover-white font-sm"
                                onClick={() => setModal("")}>
                                <div> Fermer </div>
                            </button>
                        </div>

                        {modal === "sc" &&
                            <div className="scroll card container col-5-xl col-5-lg col-6-md col-12-sm col-12-xs t-start mt-1 mb-1 bg-primary-light-9">
                                {userdata?.ancientMontants?.map((argent, index) =>
                                    <div key={argent} className="card bg-primary-light-8 m-1">
                                        Transaction N#{index + 1} {argent}
                                    </div>
                                )} </div>}


                        {modal === "euro" &&
                            <div className="card container col-5-xl col-5-lg col-6-md col-12-sm col-12-xs t-start mt-1 mb-1 bg-primary-light-9">
                                {userdata?.ancientMontantsEuro?.map((argent, index) =>
                                    <div key={argent} className="scroll card mb-1 bg-primary-light-8">
                                        <span className="fw-br text-primary"> Transaction N#{index + 1} <br /></span>
                                        {argent}
                                    </div>)}
                            </div>
                        }


                        <div className="card container col-5-xl col-5-lg col-6-md col-12-sm col-12-xs t-start mt-1 mb-1">
                            <span className="fw-br text-primary"> Pieces d'identité :</span>
                            <div> {userdata?.pi?.[0] ?
                                < div > {userdata?.pi?.map((image) =>
                                    <a key={image} href={image}>
                                        <img className="ml-1 mr-1 border-base thumb" src={image} alt="" /></a>)}
                                </div>
                                : <div> "Non renseigné"</div>
                            }
                            </div>
                        </div>

                        <div className="card container col-5-xl col-5-lg col-6-md col-12-sm col-12-xs t-start mt-1 mb-1">
                            <span className="fw-br text-primary">
                                Justificatif de Domicile:</span>
                            <div>{userdata?.JDD?.[0] ?
                                < div >{userdata?.JDD?.map((image) =>
                                    <a key={image} href={image}><img className="ml-1 mr-1 border-base  thumb" src={image} alt="" /></a>)}
                                </div>
                                : <div> "Non renseigné"</div>
                            }
                            </div>
                        </div>

                        <div className="card container col-5-xl col-5-lg col-6-md col-12-sm col-12-xs t-start mt-1 mb-1">
                            <span className="fw-br text-primary">Avis d'imposition :</span>
                            <div> {userdata?.avisFiscal?.[0] ?
                                <div> {userdata?.avisFiscal?.map((image) =>
                                    <a key={image} href={image}><img className="ml-1 mr-1 border-base  thumb" src={image} alt="" /></a>
                                )}
                                </div>
                                : <div> "Non renseigné"</div>
                            }
                            </div>
                        </div>

                        <div className="card container col-5-xl col-5-lg col-6-md col-12-sm col-12-xs t-start mt-1 mb-1 ">
                            <span className="fw-br text-primary">RIB :</span>
                            <div> {userdata?.picRib ?
                                <div>
                                    <a href={userdata?.picRib}><img className=" ml-1 mr-1 border-base thumb" src={userdata?.picRib} alt="" /></a>
                                </div>
                                : <div>"Non renseigné"</div>
                            }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail;