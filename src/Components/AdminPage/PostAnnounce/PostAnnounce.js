import "./PostAnnounce.css";
import { useContext, useEffect } from "react";
import URLcontext from "../../../Context/URLcontext";
import FormContext from "../../../Context/FormContext";
import { annonce } from "../../../JSON/Arrays";
import AnnounceLine from "./AnnounceLine";


function PostAnnounce() {
    const URLContextValue = useContext(URLcontext)
    const FormContextValue = useContext(FormContext)

    useEffect(() => {
        FormContextValue.handleURL(`${URLContextValue.url}/api/announces/creatannouncewithpics`)
    }, [])

    return (

        <div>
            <div className="postannounce-container-container">
                <div className="postannounce-container"><h3>Publier une nouvelle Annonce</h3></div>
                <form onSubmit={FormContextValue.handleForm}>
                    <div>
                        {annonce.map((entry, index) => (
                            <AnnounceLine key={index} entry={entry} />))}

                        <button className="postannounce-button-validate" type="submit">Envoyer l'annonce !</button></div>
                </form>
            </div> </div>
    )
}
export default PostAnnounce;

// {previewPics[0] !== undefined && <div><div className="postannounce-image-container">
//     {previewPics[0] !== undefined && <img className="postannounce-image-preview" src={previewPics?.[0]?.result} alt="" />}
//     {previewPics[1].result !== null && <img className="postannounce-image-preview" src={previewPics?.[1]?.result} alt="" />}
//     {previewPics[2].result !== null && <img className="postannounce-image-preview" src={previewPics?.[2]?.result} alt="" />}
//     {previewPics[3].result !== null && <img className="postannounce-image-preview" src={previewPics?.[3]?.result} alt="" />}
//     {previewPics[4].result !== null && <img className="postannounce-image-preview" src={previewPics?.[4]?.result} alt="" />}
// </div>
//     <button className="postannounce-button-validate" onClick={() => setPics([])}>Proposer d'autres photos</button> </div>}

// const onLoadFiles = (e) => {
//     setImage(e.target.files)
//     const reader0 = new FileReader();
//     const reader1 = new FileReader();
//     const reader2 = new FileReader();
//     const reader3 = new FileReader();
//     const reader4 = new FileReader();
//     if (e.target.files[0]) { reader0.readAsDataURL(e.target.files[0]) }
//     if (e.target.files[1]) { reader1.readAsDataURL(e.target.files[1]) }
//     if (e.target.files[2]) { reader2.readAsDataURL(e.target.files[2]) }
//     if (e.target.files[3]) { reader3.readAsDataURL(e.target.files[3]) }
//     if (e.target.files[4]) { reader4.readAsDataURL(e.target.files[4]) }
//     reader0.onload = () => { setPics([reader0, reader1, reader2, reader3, reader4]) }
// useEffect(() => { setPreviewPics(pics) }, [pics])
// }

// const [options, setOptions] = useState({ piscine: "", tennis: "", jardin: "", parking: "", jaccuzi: "" })
// const [pics, setPics] = useState([])