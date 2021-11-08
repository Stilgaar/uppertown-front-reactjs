import './UserUpdate.css';
import { useState } from "react";
const axios = require('axios');

function UserUpdate({ user }) {


    // USESTATE POUR MODIFIER LETAT DES DIFFERENTES BOITES
    const [nameBox, setNameBox] = useState(false);
    const [emailBox, setEmailBox] = useState(false);
    const [telBox, setTelBox] = useState(false);
    const [brandNameBox, setBrandNameBox] = useState(false);
    const [adressBox, setAdressBox] = useState(false);
    const [piBox, setPiBox] = useState(false);
    const [JDDbox, setJDDbox] = useState(false);
    const [avisFiscbox, setAvisFiscbox] = useState(false);


    // USESTATE POUR METTRE A JOUR LES DONNES DE LUSER
    const [newlastname, setNewLastName] = useState();
    const [newfirstname, setNewFirstName] = useState();
    const [newemail, setNewEmail] = useState();
    const [newtel, setNewTel] = useState();
    const [newbrandname, setNewBranName] = useState();
    const [newadress, setNewAdress] = useState();

    const [pi, setPi] = useState();

    //console.log(pi?.name) // NOM DU FICHIER A ENVOYER SUR LE FTP => NOM DU FICHIER A ENVOYER SUR MONGO SERA PI.NAME 
    // POUR LE LIRE DANS LE FRONT ON L'ECRIRA COMME CA : `https://www.jeffphoto.fr/wp-content/uppertown/${pi?.name}`
    // L'IDEAL POUR LE BACK SERA DE LECRIRE COMME CA : `${ftp.name}${pi?.name}` <-- FOR LATER
    // LIDEAL IDEAL SERA DE FAIRE COMME CA A LECRITURE : `${ftp.name}/${usermail}/${pi?.name}` <-- CREE UN DOSSIER SPECIAL POUR CHAQUE UTILISATEUR

    // fonction générale pour la modification de données dans la BD
    // à voir si UNE seule suffira ou si je dois éventuellement en faire une par ligne. (pour le moment je vais partir sur une seule grosse)
    const modifyContent = (email) => {

        let submit = { email, newfirstname, newlastname, newemail, newtel, newbrandname, newadress }

        axios.patch("http://localhost:1337/api/users/modifyUser",
            submit)
            .then((res) => console.log(res.data))
            .catch((err) => console.log("console.log modify content", err))
    }

    const uploadPI = (id, e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('pieceidentite', pi)


        axios.post("http://localhost:1337/up", formData, {
            
            headers: { 'Content-Type': 'multipart/form-data' }
        })
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
                                <form>
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

                                    <button className="userupdate-button-validate" onClick={() => modifyContent(user.email)}>Valider</button>
                                </form>

                            </div>
                        }
                    </div>

                    <button className="userupdate-button-modify" onClick={() => setNameBox(current => !current)}>{nameBox ? "Annuler" : "Modifier"}</button></div>

                <div className="userupdate-singlecontainer">

                    <div className="userupdate-container-modify">{emailBox ? <div></div> : <div className="userupdate-container-container-ternaire"><div>Adresse Mail</div> <div>{user?.email}</div></div>}
                        {emailBox &&
                            <div >
                                <form>
                                    <div className="userupdate-container-label">
                                        <label className="userupdate-label">Nouvel email</label>
                                        <input className="userupdate-input" type="email" placeholder="Nouvel Email" onInput={(e) => handleInput(e, setNewEmail)} />
                                    </div>
                                    <div className="userupdate-container-warning"> Placeholder : est-ce qu'il faut qu'on mette en place une verification d'email ?
                                    </div>
                                    <button className="userupdate-button-validate" onClick={() => modifyContent(user.email)}>Valider</button>
                                </form>
                            </div>
                        }
                    </div>

                    <button className="userupdate-button-modify" onClick={() => setEmailBox(current => !current)}>{emailBox ? "Annuler" : "Modifier"}</button></div>

                <div className="userupdate-singlecontainer">

                    <div className="userupdate-container-modify">{telBox ? <div></div> : <div className="userupdate-container-container-ternaire"><div>Téléphone</div> <div>{user?.tel}</div></div>}
                        {telBox &&
                            <div >
                                <form>
                                    <div className="userupdate-container-label">
                                        <label className="userupdate-label">Nouvel Téléphone</label>
                                        <input className="userupdate-input" type="number" placeholder="Nouvel Téléphone" onInput={(e) => handleInput(e, setNewTel)} />
                                    </div>
                                    <div className="userupdate-container-warning"> Placeholder : est-ce qu'il faut qu'on mette en place une verification de numéro de téléphone ?
                                    </div>
                                    <button className="userupdate-button-validate" onClick={() => modifyContent(user.email)}>Valider</button>
                                </form>
                            </div>
                        }
                    </div>

                    <button className="userupdate-button-modify" onClick={() => setTelBox(current => !current)}>{telBox ? "Annuler" : "Modifier"}</button></div>

                <div className="userupdate-singlecontainer">

                    <div className="userupdate-container-modify">{brandNameBox ? <div></div> : <div className="userupdate-container-container-ternaire"><div>Changement/Ajout d'Entreprise</div> <div>{user?.brandname}</div></div>}
                        {brandNameBox &&
                            <div >
                                <form>
                                    <div className="userupdate-container-label">
                                        <label className="userupdate-label">Changement d'entreprise</label>
                                        <input className="userupdate-input" type="text" placeholder="Entreprise" onInput={(e) => handleInput(e, setNewBranName)} />
                                    </div>
                                    <div className="userupdate-container-warning"> Placeholder {`null`}
                                    </div>
                                    <button className="userupdate-button-validate" onClick={() => modifyContent(user.email)}>Valider</button>
                                </form>
                            </div>
                        }
                    </div>

                    <button className="userupdate-button-modify" onClick={() => setBrandNameBox(current => !current)}>{brandNameBox ? "Annuler" : "Modifier"}</button></div>


                <div className="userupdate-singlecontainer">
                    <div className="userupdate-container-modify">{adressBox ? <div></div> : <div className="userupdate-container-container-ternaire"><div>Adresse</div> <div>{user?.adress}</div></div>}
                        {adressBox &&
                            <div >
                                <form>
                                    <div className="userupdate-container-label">
                                        <label className="userupdate-label">Votre Adresse</label>
                                        <input className="userupdate-input" type="text" placeholder="Adresse" onInput={(e) => handleInput(e, setNewAdress)} />
                                    </div>
                                    <div className="userupdate-container-warning">Attention toute modification de votre Nom ou Prénom vous obligera à nous faire parvenir
                                        au plus vite un nouveau justificatif de domicile</div>
                                    <button className="userupdate-button-validate" onClick={() => modifyContent(user.email)}>Valider</button>
                                </form>
                            </div>
                        }
                    </div>
                    <button className="userupdate-button-modify" onClick={() => setAdressBox(current => !current)}>{adressBox ? "Annuler" : "Modifier"}</button></div>


                <div className="userupdate-singlecontainer">
                    <div className="userupdate-container-modify">{piBox ? <div></div> : <div className="userupdate-container-container-ternaire-avec-image"><div>Pièce d'identité</div> <div><img className="userupdate-image-container" src="" alt="pièce d'identité" /></div></div>}
                        {piBox &&
                            <div >

                                <form onSubmit={(e) => uploadPI(user._id, e)}>

                                    <div className="userupdate-container-label">

                                        <label className="userupdate-label">Pièce d'identité</label>
                                        <input className="userupdate-input" type="file" name="file" placeholder="Envoyez votre pièce d'identité" onChange={(e) => setPi(e.target.files[0])} />
                                    </div>
                                    <div className="userupdate-container-warning">Pour vous donner plus d'options nous avons besoin de votre pièce d'identité</div>
                                    <button className="userupdate-button-validate" type="submit">Valider</button>

                                </form>

                            </div>
                        }
                    </div>

                    <button className="userupdate-button-modify" onClick={() => setPiBox(current => !current)}>{piBox ? "Annuler" : "Envoyer"}</button></div>


                <div className="userupdate-singlecontainer">
                    <div className="userupdate-container-modify">{JDDbox ? <div></div> : <div className="userupdate-container-container-ternaire-avec-image"><div>Justificatif de domicile</div> <div><img className="userupdate-image-container" src="" alt="justificatif domicile" /></div></div>}
                        {JDDbox &&
                            <div >
                                <form>
                                    <div className="userupdate-container-label">
                                        <label className="userupdate-label">Justificatif de domicile</label>
                                        <input className="userupdate-input" type="file" name="file" placeholder="De moins de trois mois" />
                                    </div>
                                    <div className="userupdate-container-warning">Pour valider votre justificatif de domicile celui-ci devra dater de moins de 3 mois</div>
                                    <button className="userupdate-button-validate" onClick={() => modifyContent(user.email)}>Valider</button>
                                </form>

                            </div>
                        }
                    </div>

                    <button className="userupdate-button-modify" onClick={() => setJDDbox(current => !current)}>{JDDbox ? "Annuler" : "Envoyer"}</button></div>


                <div className="userupdate-singlecontainer">
                    <div className="userupdate-container-modify">{avisFiscbox ? <div></div> : <div className="userupdate-container-container-ternaire-avec-image"><div>Avis d'imposition</div><div><img className="userupdate-image-container" src="" alt="avis fiscal" /></div></div>}
                        {avisFiscbox &&
                            <div >
                                <form>
                                    <div className="userupdate-container-label">
                                        <label className="userupdate-label">Votre avis Fiscal</label>
                                        <input className="userupdate-input" type="file" name="file" placeholder="Envoyez votre pièce d'identité" />
                                    </div>
                                    <div className="userupdate-container-warning">Pour vous donner plus d'options nous avons besoin de votre avis fiscal</div>
                                    <button className="userupdate-button-validate" onClick={() => modifyContent(user.email)}>Valider</button>
                                </form>

                            </div>
                        }
                    </div>

                    <button className="userupdate-button-modify" onClick={() => setAvisFiscbox(current => !current)}>{avisFiscbox ? "Annuler" : "Envoyer"}</button></div>

            </div>

        </div>

    )
}

export default UserUpdate;