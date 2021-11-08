import React, { useState } from 'react';
//import axios from 'axios';
import Swal from "sweetalert2";

export function UploadPics(props) {
  const [cni, setCni] = useState(null);
  const [adress, setAdress] = useState(null);
  const [avisfisc, setAvisfisc] = useState(null);
  const [imgDataCni, setImgDataCni] = useState(null);
  const [imgDataAdress, setImgDataAdress] = useState(null);
  const [imgDataAvisFisc, setImgDataAvisFisc] = useState(null);
  

  const onChangeCni = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files[0]);
      setCni(e.target.files[0].name);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgDataCni(reader.result);
        console.log(reader.result)
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onChangeAdress = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files[0].name);
      setAdress(e.target.files[0].name);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgDataAdress(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onChangeAvisFisc = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files[0].name);
      setAvisfisc(e.target.files[0].name);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgDataAvisFisc(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  
const upload = (e) => {
    e.preventDefault()
    const id = localStorage.getItem("id");
    console.log("ID USER : " + id);
    const postURL = "http://localhost:1337/api/users/" + id; //chemin vers le backend
    fetch(postURL, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // on récupère le contenu du body
        cni: imgDataCni,
        adress: imgDataAdress,
        avisfisc: imgDataAvisFisc
      }),
    }).then(() => {
      Swal.fire({
        title: "Les documents ont été transmis pour approbation",
        text: "Merci",
        type: "success",
      });
      // vérification :
      console.log("Docs uploaded cni : " + cni + ", Adress : " + adress + ", Avis fiscal : "+ avisfisc );
    });
  };
  return (
    <div>
      
        <form id="cni">
            <div>
              <div>
                <p>Uploader la CNI :</p>
                <input type="file" onChange={onChangeCni} />
              </div>
              <div >
                <img alt="" src={imgDataCni} />
              </div>
            </div>
            <div>
              {/*<button onClick={uploadcni}>upload cni</button>*/}
            </div>
          </form><br/>

          <form id="adress">
            <div>
              <div>
                <p>Uploader le justificatif de domicile :</p>
                <input type="file" onChange={onChangeAdress} />
              </div>
              <div >
                <img alt="" src={imgDataAdress} />
              </div>
            </div>
            <div>
              {/*<button onClick={uploadAdress}>upload justif domicile</button>*/}
            </div>
          </form>

          <form id="avisfisc">
            <div>
              <div>
              <p>Uploader l'avis d'imposition :</p>
                <input type="file" onChange={onChangeAvisFisc} />
              </div>
              <div >
                <img alt="" src={imgDataAvisFisc} />
              </div>
            </div>
            <div>
              
            </div>
          </form>

          <button onClick={upload}>Téléverser les documents</button>
        
    </div>
  );
}

export default UploadPics;