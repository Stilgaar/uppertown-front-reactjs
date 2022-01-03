import axios from 'axios';
import { useState, useContext, useEffect } from 'react'
import URLContext from '../../../Context/URLcontext'
import FormContext from '../../../Context/FormContext'
import { userUpload } from '../../../JSON/Arrays';
import OneLineUpload from './OneLineUpload';



function Uploads({ user, hardRefresh }) {

    const UrlContextvalue = useContext(URLContext)
    const FormContextValue = useContext(FormContext)

    const [piBox, setPiBox] = useState(false);
    const [JDDbox, setJDDbox] = useState(false);
    const [avisFiscbox, setAvisFiscbox] = useState(false);
    const [sendRibBox, setSendRibBox] = useState(false);


    // RECUPERATION IMAGES
    const [pi, setPi] = useState();
    const [justifDom, setJustifDom] = useState();
    const [avisFisc, setAvisFisc] = useState();
    const [picRib, setPicRib] = useState();

    const uploadPI = (email, e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('pieceidentite', pi)
        formData.append('email', email)
        axios.post(`${UrlContextvalue.url}/up/id`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then((res) => console.log(res.data))
            .then(() => hardRefresh())
    }
    const uploadJustifDomicile = (email, e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('justificatifdomicile', justifDom)
        formData.append('email', email)
        axios.post(`${UrlContextvalue.url}/up/jdd`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then((res) => console.log(res.data))
            .then(() => hardRefresh())
    }
    const uploadAvisFiscal = (email, e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('avisfiscal', avisFisc)
        formData.append('email', email)
        axios.post(`${UrlContextvalue.url}/up/avis`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then((res) => console.log(res.data))
            .then(() => hardRefresh())
    }
    const uploadRib = (email, e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('rib', picRib)
        formData.append('email', email)
        axios.post(`${UrlContextvalue.url}/up/rib`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then((res) => console.log(res.data))
            .then(() => hardRefresh())
    }
    const handleDelete = (email, data) => {
        let sumbit = { email, data }
        axios.post(`${UrlContextvalue.url}/up/delete`, sumbit)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
            .then(() => hardRefresh())
    }

    useEffect(() => {
        FormContextValue.handleData({ email: user.email });
    }, [])

    return (

        <div className="userupdate-generalcontainer">
            <div className="userupdate-container-params">
                <div><h3> Uploads de vos documents </h3> </div>
            </div>

            {userUpload.map((entry, index) => (
                <OneLineUpload entry={entry} key={index} user={user} />
            ))}

            <div className="userupdate-singlecontainer">
                <div className="userupdate-container-modify">{piBox ? <div></div> : <div className="userupdate-container-container-ternaire-avec-image"><div>Pièce d'identité</div></div>}
                    {piBox &&
                        <div >
                            <form onSubmit={() => {
                                FormContextValue.handleForm();
                                hardRefresh();
                            }}>
                                <div className="userupdate-container-label">
                                    <label className="userupdate-label">Pièce d'identité</label>
                                    <input
                                        type="file"
                                        name="pieceidentite"
                                        onChange={(e) => {
                                            FormContextValue.handleFile(e)
                                            FormContextValue.handleURL(`${UrlContextvalue.url}/up/id`);
                                        }} />
                                </div>
                                <div className="userupdate-container-warning">
                                    Pour vous donner plus d'options nous avons besoin de votre pièce d'identité</div>
                                <button
                                    className="userupdate-button-validate"
                                    type="submit">
                                    Valider
                                </button>
                            </form>
                            {user?.pi[0] &&
                                <div> <p>Vos Pièces d'identité actuelles</p>
                                    <div className="userupdate-imagecontainer">
                                        {user.pi.map((data, index) =>
                                            <div> <img className="userupdate-imageuser" src={data} alt="" />
                                                <button
                                                    className="userupdate-button-delete"
                                                    onClick={() => handleDelete(user.email, data)}>
                                                    Supprimer</button></div>
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
                            <form onSubmit={(e) => { uploadJustifDomicile(user.email, e); setJDDbox(current => !current) }} >
                                <div className="userupdate-container-label">
                                    <label className="userupdate-label">Justificatif de domicile</label>
                                    <input type="file" name="justificatifdomicile" placeholder="De moins de trois mois"
                                        onChange={(e) => setJustifDom(e.target.files[0])} />
                                </div>
                                <div className="userupdate-container-warning">Pour valider votre justificatif de domicile celui-ci devra dater de moins de 3 mois</div>
                                <button className="userupdate-button-validate" type="submit">Valider</button>
                            </form>
                            {user?.JDD[0] && <div> <p>Vos Justificatifs de Domicile</p>
                                <div className="userupdate-imagecontainer">
                                    {user.JDD.map((data) =>
                                        <div> <img className="userupdate-imageuser" src={data} alt="" />
                                            <button className="userupdate-button-delete" onClick={() => handleDelete(user.email, data)}>Supprimer</button></div>
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
                            <form onSubmit={(e) => { uploadAvisFiscal(user.email, e); setAvisFiscbox(current => !current) }}>
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
                                        <div> <img className="userupdate-imageuser" src={data} alt="" />
                                            <button className="userupdate-button-delete" onClick={() => handleDelete(user.email, data)}>Supprimer</button></div>
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
                                        <div> <img className="userupdate-imageuser" src={data} alt="" />
                                            <button className="userupdate-button-delete" onClick={() => handleDelete(user.email, data)}>Supprimer</button></div>
                                    )}</div>
                            </div>}
                        </div>
                    }
                </div>
                <button className="userupdate-button-modify" onClick={() => setSendRibBox(current => !current)}>{sendRibBox ? "Annuler" : "Envoyer"}</button></div>
        </div>
    )
}


export default Uploads;