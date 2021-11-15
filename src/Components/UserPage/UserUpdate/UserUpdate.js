import './UserUpdate.css';
import { useState } from "react";
const axios = require('axios');

function UserUpdate({user, hardRefresh}) {

    // USESTATE POUR MODIFIER LETAT DES DIFFERENTES BOITES
    const [nameBox, setNameBox] = useState(false);
    const [emailBox, setEmailBox] = useState(false);
    const [telBox, setTelBox] = useState(false);
    const [brandNameBox, setBrandNameBox] = useState(false);
    const [adressBox, setAdressBox] = useState(false);
    const [ribBox, setRibBox] = useState(false);
    const [piBox, setPiBox] = useState(false);
    const [JDDbox, setJDDbox] = useState(false);
    const [avisFiscbox, setAvisFiscbox] = useState(false);
    const [sendRibBox, setSendRibBox] = useState(false);

    // USESTATE POUR METTRE A JOUR LES DONNES DE LUSER
    const [newlastname, setNewLastName] = useState();
    const [newfirstname, setNewFirstName] = useState();
    const [newemail, setNewEmail] = useState();
    const [newtel, setNewTel] = useState();
    const [newbrandname, setNewBranName] = useState();
    const [newadress, setNewAdress] = useState();
    const [newRib, setNewRib] = useState();

    // RECUPERATION IMAGES
    const [pi, setPi] = useState();
    const [justifDom, setJustifDom] = useState();
    const [avisFisc, setAvisFisc] = useState();
    const [picRib, setPicRib] = useState();
    
    const modifyContent = (email, e) => {
        e.preventDefault();
        let submit = { email, newfirstname, newlastname, newemail, newtel, newbrandname, newadress, newRib }
        axios.patch("http://localhost:1337/api/users/modifyUser",
            submit)
            .then((res) => console.log(res.data))
            .then(() => hardRefresh())
            .catch((err) => console.log("console.log modify content", err))}

    const uploadPI = (email, e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('pieceidentite', pi)
        formData.append('email', email)
        axios.post("http://localhost:1337/up/id", formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then((res) => console.log(res.data))
        .then(() => hardRefresh())
    }

    const uploadJustifDomicile = (email, e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('justificatifdomicile', justifDom)
        formData.append('email', email)
        axios.post("http://localhost:1337/up/jdd", formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then((res) => console.log(res.data))
        .then(() => hardRefresh())
    }

    const uploadAvisFiscal = (email, e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('avisfiscal', avisFisc)
        formData.append('email', email)
        axios.post("http://localhost:1337/up/avis", formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then((res) => console.log(res.data))
        .then(() => hardRefresh())
    }

    const uploadRib = (email, e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('rib', picRib)
        formData.append('email', email)
        axios.post("http://localhost:1337/up/rib", formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then((res) => console.log(res.data))
        .then(() => hardRefresh())
    }

    const handleDelete = (email, data) => {              
        let sumbit = {email, data}
        axios.post("http://localhost:1337/up/delete", sumbit)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
        .then(() => hardRefresh())       
    }
    
    const handleInput = (e, setter) => { setter(e.target.value) }

    return (
        <div>
            <div className="userupdate-generalcontainer">
                <div className="userupdate-container-params"><div>Paramètres généraux du compte</div></div>

                <div className="userupdate-singlecontainer">

                    <div className="userupdate-container-modify">{nameBox ? <div></div> : <div className="userupdate-container-container-ternaire"><div>Nom Prenom</div> <div>{user?.firstname} {user?.lastname}</div></div>}
                        {nameBox &&

                            <div >
                                <form onSubmit={(e) => { modifyContent(user.email, e);  setNameBox(current => !current) }}>
                                    <div className="userupdate-container-label">
                                        <label className="userupdate-label">Nouveau Nom</label>
                                        <input className="userupdate-input" type="text" placeholder="Nouveau Nom" onInput={(e) => handleInput(e, setNewLastName)} />
                                    </div>
                                    <div className="userupdate-container-label">
                                        <label className="userupdate-label"> Nouveau Prénom</label>
                                        <input className="userupdate-input" type="text" placeholder="Nouveau Prènom" onInput={(e) => handleInput(e, setNewFirstName)} />
                                    </div>

                                    <div className="userupdate-container-warning">Attention toute modification de votre Nom ou Prénom vous obligera à nous faire parvenir
                                        au plus vite une nouvelle pièce d'idendité</div>

                                    <button className="userupdate-button-validate" type="submit" >Valider</button>
                                </form>

                            </div>
                        }
                    </div>
                    <button className="userupdate-button-modify" onClick={() => setNameBox(current => !current)}>{nameBox ? "Annuler" : "Modifier"}</button></div>

                <div className="userupdate-singlecontainer">

                    <div className="userupdate-container-modify">{emailBox ? <div></div> : <div className="userupdate-container-container-ternaire"><div>Adresse Mail</div> <div>{user?.email}</div></div>}
                        {emailBox &&
                            <div >
                                <form onSubmit={(e) => { modifyContent(user.email, e);  setEmailBox(current => !current) }}>
                                    <div className="userupdate-container-label">
                                        <label className="userupdate-label">Nouvel email</label>
                                        <input className="userupdate-input" type="email" placeholder="Nouvel Email" onInput={(e) => handleInput(e, setNewEmail)} />
                                    </div>
                                    <div className="userupdate-container-warning"> Placeholder : est-ce qu'il faut qu'on mette en place une verification d'email ?
                                    </div>
                                    <button className="userupdate-button-validate" type="submit">Valider</button>
                                </form>
                            </div>
                        }
                    </div>

                    <button className="userupdate-button-modify" onClick={() => setEmailBox(current => !current)}>{emailBox ? "Annuler" : "Modifier"}</button></div>

                <div className="userupdate-singlecontainer">

                    <div className="userupdate-container-modify">{telBox ? <div></div> : <div className="userupdate-container-container-ternaire"><div>Téléphone</div> <div>{user?.tel}</div></div>}
                        {telBox &&
                            <div >
                               <form onSubmit={(e) => { modifyContent(user.email, e);  setTelBox(current => !current) }}>
                                    <div className="userupdate-container-label">
                                        <label className="userupdate-label">Nouvel Téléphone</label>
                                        <input className="userupdate-input" type="number" placeholder="Nouvel Téléphone" onInput={(e) => handleInput(e, setNewTel)} />
                                    </div>
                                    <div className="userupdate-container-warning"> Placeholder : est-ce qu'il faut qu'on mette en place une verification de numéro de téléphone ?
                                    </div>
                                    <button className="userupdate-button-validate" type="submit">Valider</button>
                                </form>
                            </div>
                        }
                    </div>
                    <button className="userupdate-button-modify" onClick={() => setTelBox(current => !current)}>{telBox ? "Annuler" : "Modifier"}</button></div>

                <div className="userupdate-singlecontainer">

                    <div className="userupdate-container-modify">{brandNameBox ? <div></div> : <div className="userupdate-container-container-ternaire"><div>Changement/Ajout d'Entreprise</div> <div>{user?.brandname}</div></div>}
                        {brandNameBox &&
                            <div >
                                <form onSubmit={(e) => { modifyContent(user.email, e); setBrandNameBox(current => !current) }}>
                                    <div className="userupdate-container-label">
                                        <label className="userupdate-label">Changement d'entreprise</label>
                                        <input className="userupdate-input" type="text" placeholder="Entreprise" onInput={(e) => handleInput(e, setNewBranName)} />
                                    </div>
                                    <div className="userupdate-container-warning"> Placeholder {`null`}
                                    </div>
                                    <button className="userupdate-button-validate" type="submit">Valider</button>
                                </form>
                            </div>
                        }
                    </div>

                    <button className="userupdate-button-modify" onClick={() => setBrandNameBox(current => !current)}>{brandNameBox ? "Annuler" : "Modifier"}</button></div>

                <div className="userupdate-singlecontainer">
                    <div className="userupdate-container-modify">{adressBox ? <div></div> : <div className="userupdate-container-container-ternaire"><div>Adresse</div> <div>{user?.adress}</div></div>}
                        {adressBox &&
                            <div >
                               <form onSubmit={(e) => { modifyContent(user.email, e); setAdressBox(current => !current) }}>
                                    <div className="userupdate-container-label">
                                        <label className="userupdate-label">Votre Adresse</label>
                                        <input className="userupdate-input" type="text" placeholder="Adresse" onInput={(e) => handleInput(e, setNewAdress)} />
                                    </div>
                                    <div className="userupdate-container-warning">Attention toute modification de votre adresse vous obligera à nous faire parvenir
                                        au plus vite un nouveau justificatif de domicile</div>
                                    <button className="userupdate-button-validate" type="submit">Valider</button>
                                </form>
                            </div>
                        }
                    </div>
                <button className="userupdate-button-modify" onClick={() => setAdressBox(current => !current)}>{ribBox ? "Annuler" : "Modifier"}</button></div>

                <div className="userupdate-singlecontainer">
                    <div className="userupdate-container-modify">{ribBox ? <div></div> : <div className="userupdate-container-container-ternaire"><div>Relevé d'identité Bancaire</div> {user?.rib?.map((data) => <div>RIB {data} <button className="userupdate-button-validate" onClick={() => handleDelete(user.email, data)}>Supprimer</button></div>)}</div>}
                        {ribBox &&
                            <div >
                                <form onSubmit={(e) => { modifyContent(user.email, e); setRibBox(current => !current) }}>
                                    <div className="userupdate-container-label">
                                        <label className="userupdate-label">Vos / Votre Numéro de Relevé d'Identité Bancaire</label>
                                        <input className="userupdate-input" type="text" placeholder="Relevé d'Identité Bancaire" onInput={(e) => handleInput(e, setNewRib)} />
                                    </div>
                                    <div className="userupdate-container-warning">Attention tout ajout ou modification de votre RIB vous obligera à nous faire parvenir
                                        au plus vite un nouveau RIB</div>
                                    <button className="userupdate-button-validate" type="submit" >Valider</button>
                                </form>
                            </div>
                        }
                    </div>
                    <button className="userupdate-button-modify" onClick={() => setRibBox(current => !current)}>{ribBox ? "Annuler" : "Modifier"}</button></div>

                <div className="userupdate-singlecontainer">
                    <div className="userupdate-container-modify">{piBox ? <div></div> : <div className="userupdate-container-container-ternaire-avec-image"><div>Pièce d'identité</div></div>}
                        {piBox &&
                            <div >

                                <form onSubmit={(e) => { uploadPI(user.email, e); setPiBox(current => !current) } }>
                                         <div className="userupdate-container-label">


                                        <label className="userupdate-label">Pièce d'identité</label>
                                        <input type="file" name="pieceidentite" placeholder="Envoyez votre pièce d'identité" onChange={(e) => setPi(e.target.files[0])} />
                                    </div>
                                    <div className="userupdate-container-warning">Pour vous donner plus d'options nous avons besoin de votre pièce d'identité</div>
                                    <button className="userupdate-button-validate" type="submit">Valider</button>

                                </form>

                                {user?.pi[0] &&
                                    <div> <p>Vos Pièces d'identité actuelles</p>
                                        <div className="userupdate-imagecontainer">
                                            {user.pi.map((data, index) =>
                                                <div> <img className="userupdate-imageuser" src={data} alt="" /> <button className="userupdate-button-delete" onClick={() => handleDelete(user.email, data)}>Supprimer</button></div>
                                            )}
                                        </div>
                                    </div>}
                            </div>
                        }
                    </div>

                    <button className="userupdate-button-modify" onClick={() => setPiBox(current => !current)}>{piBox ? "Annuler" : "Envoyer"}</button></div>

                <div className="userupdate-singlecontainer">
                    <div className="userupdate-container-modify">
                        {JDDbox ? <div></div> : <div className="userupdate-container-container-ternaire-avec-image"><div>Justificatif de domicile</div> </div>}
                        {JDDbox &&
                            <div >
                                <form onSubmit={(e) => { uploadJustifDomicile(user.email, e); setJDDbox(current => !current)}} >
                                    <div className="userupdate-container-label">
                                        <label className="userupdate-label">Justificatif de domicile</label>
                                        <input type="file" name="justificatifdomicile" placeholder="De moins de trois mois" onChange={(e) => setJustifDom(e.target.files[0])} />
                                    </div>
                                    <div className="userupdate-container-warning">Pour valider votre justificatif de domicile celui-ci devra dater de moins de 3 mois</div>
                                    <button className="userupdate-button-validate" type="submit">Valider</button>

                                </form>

                                {user?.JDD[0] && <div> <p>Vos Justificatifs de Domicile</p>
                                    <div className="userupdate-imagecontainer">
                                        {user.JDD.map((data) =>
                                            <div> <img className="userupdate-imageuser" src={data} alt="" /> <button className="userupdate-button-delete" onClick={() => handleDelete(user.email, data)}>Supprimer</button></div>
                                        )}
                                    </div>
                                </div>}
                            </div>
                        }
                    </div>

                    <button className="userupdate-button-modify" onClick={() => setJDDbox(current => !current)}>{JDDbox ? "Annuler" : "Envoyer"}</button></div>

                <div className="userupdate-singlecontainer">
                    <div className="userupdate-container-modify">{avisFiscbox ? <div></div> : <div className="userupdate-container-container-ternaire-avec-image"><div>Avis d'imposition</div></div>}
                        {avisFiscbox &&
                            <div >
                                <form onSubmit={(e) => { uploadAvisFiscal(user.email, e); setAvisFiscbox(current => !current)} }>
                                    <div className="userupdate-container-label">
                                        <label className="userupdate-label">Votre avis Fiscal</label>
                                        <input type="file" name="avisfiscal" placeholder="Envoyez votre pièce d'identité" onChange={(e) => setAvisFisc(e.target.files[0])} />
                                    </div>
                                    <div className="userupdate-container-warning">Pour vous donner plus d'options nous avons besoin de votre avis fiscal</div>
                                    <button className="userupdate-button-validate" type="submit">Valider</button>
                                </form>

                                {user?.avisFiscal[0] && <div> <p>Vos Avis Fiscaux</p>
                                    <div className="userupdate-imagecontainer">
                                        {user.avisFiscal.map((data) =>
                                            <div> <img className="userupdate-imageuser" src={data} alt="" /> <button className="userupdate-button-delete" onClick={() => handleDelete(user.email, data)}>Supprimer</button></div>
                                        )}
                                    </div>
                                </div>}

                            </div>
                        }
                    </div>

                    <button className="userupdate-button-modify" onClick={() => setAvisFiscbox(current => !current)}>{avisFiscbox ? "Annuler" : "Envoyer"}</button></div>

                <div className="userupdate-singlecontainer">
                    <div className="userupdate-container-modify">{sendRibBox ? <div></div> : <div className="userupdate-container-container-ternaire-avec-image"><div>RIB</div></div>}
                        {sendRibBox &&
                            <div >
                                <form onSubmit={(e) => uploadRib(user.email, e)}>
                                    <div className="userupdate-container-label">
                                        <label className="userupdate-label">Votre Rib</label>
                                        <input type="file" name="rib" placeholder="Envoyez votre pièce d'identité" onChange={(e) => setPicRib(e.target.files[0])} />
                                    </div>
                                    <div className="userupdate-container-warning">L'indispensable</div>
                                    <button className="userupdate-button-validate" type="submit">Valider</button>
                                </form>
                                {user?.picrib[0] && <div> <p>Votre RIB</p>
                                    <div className="userupdate-imagecontainer">   
                                    {user.picrib.map((data) =>                                 
                                            <div> <img className="userupdate-imageuser" src={data} alt="" /> <button className="userupdate-button-delete" onClick={() => handleDelete(user.email, data)}>Supprimer</button></div>
                                   )}</div>
                                </div>}
                            </div>
                        }
                    </div>
                    <button className="userupdate-button-modify" onClick={() => setSendRibBox(current => !current)}>{sendRibBox ? "Annuler" : "Envoyer"}</button></div>
            </div>
        </div>

    )
}

export default UserUpdate;