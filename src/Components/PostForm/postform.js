import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import "./postform.css";
import Axios from "axios";

function CreateAnn() {
  /* Variables d'état */
  const [file, setFile]= useState({file1:"",file2:"",file3:"", file4:"", file5:""});
  let [images, setImages] = useState({image1:"",image2:"",image3:"",image4:"", image5:""});
  const [emptyField, setMessage] = useState("");
  const [feed, setFeed] = useState([]);
  const [options, setOptions] = useState({piscine:"",tennis:"",jardin:"",parking:"",jacuzzi:""});
 
  

  const [status, setStatus] = useState({
    content: "",
    title: "",
    city: "",
    zip_code: "",
    region: "",
    price: "",
    share_price: "",
    share_number: "",
    gross_rent_by_year: "",
    monthly_cost:"",
    type: "",
    bedrooms:"",
    surface:"",
    etat: "",
  });
  
  /* Fonctions de mise à jour du titre et du contenu */
  const getTitle = (e) => {
    setStatus({ ...status, title: e.target.value });
    console.log("title on change:" + e.target.value);
  };

  const getContent = (e) => {
    setStatus({ ...status, content: e.target.value });
    console.log("content on change :" + e.target.value);
  };

  const getCity = (e) => {
    setStatus({ ...status, city: e.target.value });
    console.log("content on change :" + e.target.value);
  };

  const getZip = (e) => {
    setStatus({ ...status, zip_code: e.target.value });
    console.log("content on change :" + e.target.value);
  };

  const getRegion = (e) => {
    setStatus({ ...status, region: e.target.value });
    console.log("content on change :" + e.target.value);
  };

  const getPrice = (e) => {
    setStatus({ ...status, price: e.target.value });
    console.log("content on change :" + e.target.value);
  };

  const getShareprice = (e) => {
    setStatus({ ...status, share_price: e.target.value });
    console.log("content on change :" + e.target.value);
  };

  const getSharenumber = (e) => {
    setStatus({ ...status, share_number: e.target.value });
    console.log("content on change :" + e.target.value);
  };

  const getType = (e) => {
    setStatus({ ...status, type: e.target.value });
    console.log("content on change :" + e.target.value);
  };

  const getRent = (e) => {
    setStatus({ ...status, gross_rent_by_year: e.target.value });
    console.log("content on change :" + e.target.value);
  };

  const getCost = (e) => {
    setStatus({ ...status, monthly_cost: e.target.value });
    console.log("content on change :" + e.target.value);
  };

  const getBedrooms = (e) => {
    setStatus({ ...status, bedrooms: e.target.value });
    console.log("content on change :" + e.target.value);
  };

  const getSurface = (e) => {
    setStatus({ ...status, surface: e.target.value });
    console.log("content on change :" + e.target.value);
  };

  const getOption1 = (e) => {
    setOptions({ ...options, piscine: e.target.value });
    console.log("content on change :" + e.target.value);
  };

  const getOption2 = (e) => {
    setOptions({ ...options, tennis: e.target.value });
    console.log("content on change :" + e.target.value);
  };

  const getOption3 = (e) => {
    setOptions({ ...options, jardin: e.target.value });
    console.log("content on change :" + e.target.value);
  };

  const getOption4 = (e) => {
    setOptions({ ...options, parking: e.target.value });
    console.log("content on change :" + e.target.value);
  };

  const getOption5 = (e) => {
    setOptions({ ...options, jacuzzi: e.target.value });
    console.log("content on change :" + e.target.value);
  };

  const onChangeFile1 = e => {
    if (e.target.files[0]) {
      console.log("FILE : "+e.target.files[0])
      setFile({...file,file1:e.target.files[0]});
      const reader = new FileReader();
      reader.addEventListener("load", () => {
      setImages({...images, image1:reader.result})
      //console.log("READER RESULT : " +reader.result)
        });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

 const onChangeFile2 = e => {
    if (e.target.files[0]) {
      setFile({...file,file2:e.target.files[0]});
      const reader = new FileReader();
      reader.addEventListener("load", () => {
      setImages({...images, image2:reader.result})
        });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onChangeFile3 = e => {
    if (e.target.files[0]) {
      setFile({...file, file3:e.target.files[0]});
      const reader = new FileReader();
      reader.addEventListener("load", () => {
      setImages({...images, image3:reader.result})
        });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onChangeFile4 = e => {
    if (e.target.files[0]) {
      setFile({...file, file4:e.target.files[0]});
      const reader = new FileReader();
      reader.addEventListener("load", () => {
      setImages({...images, image4:reader.result})
        });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onChangeFile5 = e => {
    if (e.target.files[0]) {
      setFile({...file, file5:e.target.files[0]});
      const reader = new FileReader();
      reader.addEventListener("load", () => {
      setImages({...images, image5:reader.result})
        });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const post = () => {
    //event.preventDefault()
    const data = new FormData();
    data.append("title",status.title)
    data.append("content",status.content)
    data.append("city",status.city)
    data.append("region",status.region)
    data.append("zip_code",status.zip_code)
    data.append("price",status.price)
    data.append("share_price",status.share_price)
    data.append("share_number",status.share_number)
    data.append("type",status.type)
    data.append("gross_rent_by_year",status.gross_rent_by_year)
    data.append("monthly_cost",status.monthly_cost)
    data.append("bedrooms",status.bedrooms)
    data.append("surface",status.surface)
    data.append("options",options.piscine)
    data.append("options",options.tennis)
    data.append("options",options.parking)
    data.append("options",options.jacuzzi)
    data.append("options",options.jardin)
    
    data.append("file1",file.file1)
    data.append("file2",file.file2)
    data.append("file3",file.file3)
    data.append("file3",file.file4)
    data.append("file3",file.file5)
    console.log(data.get("file1"))
    
    /*if (status.title === "" || status.content === "" || status.city === "" || status.zip_code === "" || status.region === "" || status.price === ""
    || status.share_price === "" || status.share_number === "" || status.type === "" || status.gross_rent_by_year === ""
    || status.monthly_cost === "") {
      setMessage("Tous les champs sont requis");
    } else*/ {
      setFeed([...feed, status]);
      setStatus({ ...status, etat: "Posted" });
      console.log ("FEED : " + status.etat)

      Axios.post("http://localhost:1337/api/announces/allAnnounces",data)
      .then(res=>console.log(res))
      .then(Swal.fire({
        title: "Annonce déposée !",
        //text: "Thanks",
        type: "success",
      }))
      .catch(err=>console.log(err))
      
    }

    document.querySelector(".postInput").value="";
      
  }

  return (
    <div className="postForm">
      <br/>

      <h5>Déposer une annonce</h5>

      <div><br/>


      <h6>Ajoutez des photos à l'annonce :</h6>

<br/>


        <div>
               <div>
                <p>Ajouter une première photo :</p>
               <input name="file1" type="file" onChange={onChangeFile1} />
              </div>
              <div >
                <img  src={images.image1} />
              </div>
            </div>

            <div>
               <div>
                <p>Ajouter une deuxième photo :</p>
                <input name="file2" type="file" onChange={onChangeFile2} />
              </div>
              <div >
                <img  src={images.image2} />
              </div>
            </div>

            <div>
               <div>
                <p>Ajouter une troisième photo :</p>
                <input name="file3" type="file" onChange={onChangeFile3} />
              </div>
              <div >
                <img  src={images.image3} />
              </div>
            </div>

            <div>
               <div>
                <p>Ajouter une quatrième photo :</p>
                <input name="file4" type="file" onChange={onChangeFile4} />
              </div>
              <div >
                <img  src={images.image4} />
              </div>
            </div>

            <div>
               <div>
                <p>Ajouter une cinquième photo :</p>
                <input name="file5" type="file" onChange={onChangeFile5} />
              </div>
              <div >
                <img  src={images.image5} />
              </div>
            </div>

        <form id="annonceDetails"><br/>

          <input
            id="postTitle"
            className="postInput"
            type="text"
            name="title"
            onChange={getTitle}
            placeholder="Ajouter un titre : "
            defaultValue={status.title}
          />
          <br/><br/>

          <textarea
            id="postContent"
            className="postInput"
            type="text"
            onChange={getContent}
            placeholder="Description de l'annonce : "
            defaultValue={status.content}
          />
          <br/><br/>

          <input
            id="postCity"
            className="postInput"
            type="text"
            onChange={getCity}
            placeholder="Ajouter une ville : "
            defaultValue={status.city}
          />
          <br/><br/>

          <input
            id="postZip"
            className="postInput"
            type="text"
            onChange={getZip}
            placeholder="Ajouter un code postal : "
            defaultValue={status.zip_code}
          />
          <br/><br/>

          <label>
          Région :<br/>
          <select className="postInput" onChange={getRegion}>
            <option value="Auvergne-Rhône-Alpes">Auvergne-Rhône-Alpes</option>
            <option value="Bourgogne-Franche-Comté">Bourgogne-Franche-Comté</option>
            <option value="Bretagne">Bretagne</option>
            <option value="Centre-Val de Loire">Centre-Val de Loire</option>
            <option value="Corse">Corse</option>
            <option value="Grand Est">Grand Est</option>
            <option value="Hauts-de-France">Hauts-de-France</option>
            <option value="Île-de-France">Île-de-France</option>
            <option value="Normandie">Normandie</option>
            <option value="Nouvelle Aquitaine">Nouvelle Aquitaine</option>
            <option value="Occitanie">Occitanie</option>
            <option value="Pays de la Loire">Pays de la Loire</option>
            <option value="Provence Alpes Côte d'Azur">Provence Alpes Côte d'Azur</option>
            <option value="Outre-Mer">Outre-Mer</option>
            <option value="International">International</option>
          </select>
        </label><br/><br/>

        <label>
          Type de bien :<br/>
          <select className="postInput" onChange={getType}>
            <option value="Appartements anciens">Appartements anciens</option>
            <option value="Appartements neufs">Appartements neufs (VEFA)</option>
            <option value="Châlet de montagne">Châlet de montagne</option>
            <option value="Maisons anciennes">Maisons anciennes</option>
            <option value="Maisons neuves">Maisons neuves</option>
            <option value="Résidences de service">Résidences de service (Seniors, étudiantes, coliving)</option>
            <option value="terrains constructibles">Terrains constructibles</option>
          </select>
        </label><br/><br/>

        <input
            id="postBedrooms"
            className="postInput"
            type="number"
            onChange={getBedrooms}
            placeholder="Nombre de chambres : "
            defaultValue={status.bedrooms}
          />
          <br/><br/>

          <input
            id="postSurface"
            className="postInput"
            type="number"
            onChange={getSurface}
            placeholder="Superficie totale du bien : "
            defaultValue={status.surface}
          />
          <br/><br/>

          <input
            id="postPrice"
            className="postInput"
            type="text"
            onChange={getPrice}
            placeholder="Prix du bien : "
            defaultValue={status.price}
          />
          <br/><br/>

          <input
            id="postShareprice"
            className="postInput"
            type="text"
            onChange={getShareprice}
            placeholder="Prix de la part : "
            defaultValue={status.share_price}
          />
          <br/><br/>

          <input
            id="postSharenumber"
            className="postInput"
            type="text"
            onChange={getSharenumber}
            placeholder="Nombre de parts : "
            defaultValue={status.share_number}
          />
          <br/><br/>

          <h6>Options :</h6>

          <label>
          <input type="checkbox" defaultValue="Piscine" onChange={getOption1} />
          Piscine
          </label><br/>

          <label>
          <input type="checkbox" defaultValue="Tennis" onChange={getOption2} />
          Tennis
          </label><br/>

          <label>
          <input type="checkbox" defaultValue="Jardin" onChange={getOption3} />
          Jardin
          </label><br/>

          <label>
          <input type="checkbox" defaultValue="Parking" onChange={getOption4} />
          Parking
          </label><br/>

          <label>
          <input type="checkbox" defaultValue="Jacuzzi" onChange={getOption5} />
          Jacuzzi
          </label>

          <br/><br/>

          <input
            id="postRent"
            className="postInput"
            type="text"
            onChange={getRent}
            placeholder="Rentabilité annuelle : "
            defaultValue={status.gross_rent_by_year}
          />
          <br/><br/>

          <input
            id="postCost"
            className="postInput"
            type="text"
            onChange={getCost}
            placeholder="Loyer : "
            defaultValue={status.monthly_cost}
          />
          <br/><br/>

          <div>
          <br/>

          </div>
          
            </form>

            <p id="emptyMessage">{emptyField}</p>

            <button onClick={post} >Publier</button><br/>

        <br/>
      </div>
    </div>
  );
}

export default CreateAnn;
