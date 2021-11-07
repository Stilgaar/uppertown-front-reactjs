import { useState } from "react";
//import ImageUploading from "react-images-uploading";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import "./postform.css";
import Axios from "axios";

function CreateAnn() {
  /* Variables d'état */
  const [file, setFile]= useState({file1:"",file2:"",file3:""});
  //const [file, setFile]= useState();
  let [images, setImages] = useState({image1:"",image2:"",image3:""});
  //const [images, setImages] = useState();
  const [emptyField, setMessage] = useState("");
  const [feed, setFeed] = useState([]);

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

  const post = () => {
    //event.preventDefault()
    const data = new FormData();
    data.append("title",status.title)
    data.append("content",status.content)
    data.append("city",status.city)
    data.append("zip_code",status.zip_code)
    data.append("price",status.price)
    data.append("share_price",status.share_price)
    data.append("share_number",status.share_number)
    data.append("type",status.type)
    data.append("gross_rent_by_year",status.gross_rent_by_year)
    data.append("monthly_cost",status.monthly_cost)
    
    data.append("file1",file.file1)
    data.append("file2",file.file2)
    data.append("file3",file.file3)
    console.log(data.get("file"))
    //console.log(data.get("file2"))
    //console.log(data.get("file3"))
  /*for (let i = 0 ; i < images.length ; i++) {
      console.log ("image length :" + images.length)
      data.append("file", file[i]);
      console.log(data.get("file"))
  }*/ 

    if (status.title === "" || status.content === "" || status.city === "" || status.zip_code === "" || status.region === "" || status.price === ""
    || status.share_price === "" || status.share_number === "" || status.type === "" || status.gross_rent_by_year === ""
    || status.monthly_cost === "") {
      setMessage("Tous les champs sont requis");
    } else {
      setFeed([...feed, status]);
      console.log ("FEED : " +feed)
      setStatus({ ...status.etat, etat: "Posted" });
      
    }

    Axios.post("http://localhost:1337/api/announces/allAnnounces",data)
    .then(res=>console.log(res))
    .then(Swal.fire({
      title: "Images hava been uploaded successfully.",
      text: "Thanks",
      type: "success",
    }))
    .catch(err=>console.log(err))
  }
  return (
    <div className="postForm">
      <br/>

      <h5>Déposer une annonce</h5>

      <div><br/>


      <h6>Ajoutez des photos à l'annonce :</h6>

<br/>


        <p id="emptyMessage">{emptyField}</p>

        <div>
               <div>
                <p>Ajouter une première photo :</p>
               {/*<input name="file" type="file" onChange={event =>{
                  const file = event.target.files[0];
                  setFile1(file)
                }} />*/}
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

          <input
            id="postRegion"
            className="postInput"
            type="text"
            onChange={getRegion}
            placeholder="Ajouter une région : "
            defaultValue={status.region}
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

          <input
            id="postType"
            className="postInput"
            type="text"
            onChange={getType}
            placeholder="Type de bien : "
            defaultValue={status.type}
          />
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

            <button onClick={post} >Publier</button><br/>

        <br/>
      </div>
    </div>
  );
}

export default CreateAnn;
