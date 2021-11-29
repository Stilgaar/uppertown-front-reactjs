import React, { useState } from "react";
import { useLocation,  useHistory  } from "react-router-dom";
import Swal from "sweetalert2";
import Axios from "axios";
import "./AnnounceDetailAdmin.css";

function AnnounceDetailAdmin() {

const location = useLocation()
const announce = location.state?.data;
console.log("annonce: ", announce);

const history = useHistory();

    const [titleBox, setTitleBox] = useState(false);
    const [typeBox, setTypeBox] = useState(false);
    const [contentBox, setContentBox] = useState(false);
    const [priceBox, setPriceBox] = useState(false);
    const [bedroomsBox, setBedroomsBox] = useState(false);
    const [surfaceBox, setSurfaceBox] = useState(false);
    const [nbreTokenBox, setNbreTokenBox]= useState(false)
    const [rentBox, setRentBox] = useState(false);
    const [townBox, setTownBox] = useState(false);
    const [districtBox, setDistrictBox] = useState(false);
    const [zipBox, setZipBox] = useState(false);
    const [optionsBox, setOptionsBox] = useState(false);
    let url = `https://uppertown-back.osc-fr1.scalingo.io` || `http://localhost:1337`

  
    const [status, setStatus] = useState({
        content: announce.content,
        title: announce.title,
        city: announce.city,
        zip_code: announce.zip_code,
        region: announce.region,
        price: announce.price,
        share_price: announce.share_price,
        share_number: announce.share_number,
        gross_rent_by_year: announce.gross_rent_by_year,
        monthly_cost:announce.monthly_cost,
        type: announce.type,
        bedrooms: announce.bedrooms,
        surface:announce.surface,
        etat: "",
      });

      const [options, setOptions] = useState({piscine:announce?.options[0],tennis:announce?.options[1],
        jardin:announce?.options[2],parking:announce?.options[3],jacuzzi:announce?.options[4]});

    const getTitle = (e) => {
        setStatus({...status, title:e.target.value});
        console.log("title on change:" + e.target.value);
      };

      const getContent = (e) => {
        setStatus({...status, content:e.target.value});
        console.log("content on change :" + e.target.value);
      };
    
      const getCity = (e) => {
        setStatus({...status, city:e.target.value});
        console.log("content on change :" + e.target.value);
      };
    
      const getZip = (e) => {
        setStatus({...status, zip_code:e.target.value});
        console.log("content on change :" + e.target.value);
      };
    
      const getRegion = (e) => {
        setStatus({...status, region: e.target.value});
        console.log("content on change :" + e.target.value);
      };
    
      const getPrice = (e) => {
        setStatus({...status, price: e.target.value});
        console.log("content on change :" + e.target.value);
      };
    
      const getSharenumber = (e) => {
        setStatus({...status, share_number: e.target.value});
        console.log("content on change :" + e.target.value);
      };
    
      const getType = (e) => {
        setStatus({...status, type: e.target.value});
        console.log("content on change :" + e.target.value);
      };
    
      const getRent = (e) => {
        setStatus({...status, gross_rent_by_year: e.target.value});
        console.log("content on change :" + e.target.value);
      };

      const getSurface = (e) => {
        setStatus({...status, surface: e.target.value});
        console.log("content on change :" + e.target.value);
      };

      const getBedrooms = (e) => {
        setStatus({...status, bedrooms: e.target.value});
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
    
    function deleteAnnounces () {

           
  
            fetch(`${url}/api/announces/${announce._id}`, {
              method: "DELETE",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              
            }).then(() => {
              Swal.fire({
                title: "Annonce supprimée !",
                //text: "Thanks",
                type: "success",
              });
  
              // vérification :
             console.log("Content deleted : " + announce._id)
             history.push("/allannouncesadmin");
            
            });
          
          }

          function modifyContent () {
             // e.preventDefault()
            
            const data = {
                title:status.title,
                content:status.content,
                price:status.price,
                share_price:status.share_price,
                share_number:status.share_number,
                type: status.type,
                gross_rent_by_year:status.gross_rent_by_year,
                city:status.city,
                region: status.region,
                zip_code:status.zip_code,
                surface: status.surface,
                bedrooms: status.bedrooms,

            }

            Axios.put(`${url}/api/announces/${announce._id}`,data)
            .then(res=>console.log(res))
            .then(Swal.fire({
            title: "Modifications enregistrées !",
            //text: "Thanks",
            type: "success",
            }))
            .catch(err=>console.log(err))
          
          }
  
            /*useEffect(() => {
            }, [])*/

  return (
    <>
      <h2>Annonce en détail</h2><br/>
      <button class="delete" onClick={deleteAnnounces}>Supprimer l'annonce</button><br/>
      <div className="detail-container">
        <div className="detail-upper-container">
          <div className="detail-image-container">
            <img
              src={announce.image[0]}
              alt="Photos du bien"
            />
            <img src={announce?.image[0].image1} alt="decription alt to be fixe1"/>
            <img src={announce?.image[0].image2} alt="decription alt to be fixe2"/>
            <img src={announce?.image[0].image3} alt="decription alt to be fixe3"/>
          </div>
          <div className="detail-description-container">
          {titleBox ? <div></div> : <h3>{announce.title}</h3>}
          {titleBox && <div>
            <form>
            <label >Nouveau titre :</label><br/>
            <input type="text" placeholder="Nouveau Titre"  onChange={getTitle} /><br/>
            </form></div>}
            <button onClick={() => setTitleBox(current => !current)}>{titleBox ? "Annuler" : "Modifier le titre"}</button><br/><br/>
            
            {typeBox ? <div></div> : <p>{announce.type}</p>}
            {typeBox && <div>
            <form>
            <label >Nouveau type :</label><br/>
            <input type="text" placeholder="Nouveau type" onChange={getType} /><br/>
            </form></div>}
            <button onClick={() => setTypeBox(current => !current)}>{typeBox ? "Annuler" : "Modifier le type"}</button><br/><br/>

            {contentBox ? <div></div>:<p>{announce.content}</p>}
            <button onClick={() => setContentBox(current => !current)}>{contentBox ? "Annuler" : "Modifier la description"}</button><br/><br/>
            {contentBox && <div>
            <form>
            <label >Nouvelle description :</label><br/>
            <input type="text" placeholder="Nouvelle description" onChange={getContent} /><br/>
            </form></div>}
            
          </div>
        </div>
        <div className="detail-lower-container">
          <div className="detail-economic-container">
            {priceBox ? <div></div> : <p>Prix: {announce.price} €</p>}
            <button onClick={() => setPriceBox(current => !current)}>{priceBox ? "Annuler" : "Modifier le prix"}</button><br/><br/>
            {priceBox && <div>
            <form>
            <label >Nouveau prix :</label><br/>
            <input type="text" placeholder="Nouveau prix" onChange={getPrice} /><br/>
            </form></div>}

            <p>Prix du jeton: {announce.share_price} €</p>

            {nbreTokenBox ? <div></div> :<p>Nombre de jetons: {announce.share_number} €</p>}
            <button onClick={() => setNbreTokenBox(current => !current)}>{nbreTokenBox ? "Annuler" : "Modifier le nombre du jeton"}</button><br/><br/>
            {nbreTokenBox && <div>
            <form>
            <label >Nouveau nombre de tokens :</label><br/>
            <input type="text" placeholder="Définissez une nouvelle quantité" onChange={getSharenumber} /><br/>
            </form></div>}
            
          </div>

          <div className="detail-rent-container">
            {rentBox ? <div></div> : <p>Loyer par an brut: {announce.gross_rent_by_year} €</p>}
            <button onClick={() => setRentBox(current => !current)}>{rentBox ? "Annuler" : "Modifier le loyer"}</button><br/><br/>
            {rentBox && 
            <div>
            <form>
            <label >Nouveau loyer :</label><br/>
            <input type="text" placeholder="Nouveau loyer" onChange={getRent} /><br/>
            </form></div>}
            <p>Loyer par mois brut: {announce.gross_rent_by_year / 12} €</p>
            <p>Coûts mensuels: {announce.monthly_cost} €</p>
            <p>Loyer net par mois: {(announce.gross_rent_by_year / 12) - announce.monthly_cost} €</p>
          </div>
          <div className="detail-geographical-container">
            {townBox ? <div></div> : <p>Ville: {announce.city}</p>}
            <button onClick={() => setTownBox(current => !current)}>{townBox ? "Annuler" : "Modifier la ville"}</button><br/><br/>
            {townBox && 
            <div>
            <form>
            <label >Nouvelle ville :</label><br/>
            <input type="text" placeholder="Nouvelle ville" onChange={getCity} /><br/>
            </form></div>}
            
            {districtBox ? <div></div> : <p>Département: {announce.region}</p>}
            <button onClick={() => setDistrictBox(current => !current)}>{districtBox ? "Annuler" : "Modifier le département"}</button><br/><br/>
            {districtBox && 
            <div>
            <form>
            <label >Nouvelle region :</label><br/>
            <input type="text" placeholder="Nouvelle region" onChange={getRegion} /><br/>
            </form></div>}

            {zipBox ? <div></div> : <p>Code postal: {announce.zip_code}</p>}
            <button onClick={() => setZipBox(current => !current)}>{zipBox ? "Annuler" : "Modifier le code postal"}</button><br/><br/>
            {zipBox && 
            <div>
            <form>
            <label >Nouveau code postal :</label><br/>
            <input type="text" placeholder="Nouveau code postal" onChange={getZip} /><br/>
            </form></div>}

            {surfaceBox ? <div></div> : <p>Superficie: {announce?.surface}</p>}
            <button onClick={() => setSurfaceBox(current => !current)}>{surfaceBox ? "Annuler" : "Modifier la superficie"}</button><br/><br/>
            {surfaceBox && 
            <div>
            <form>
            <label >Nouvelle surface :</label><br/>
            <input type="text" placeholder="Superficie :" onChange={getSurface} /><br/>
            </form></div>}

            {bedroomsBox ? <div></div> : <p>Nombre de chambres: {announce?.bedrooms}</p>}
            <button onClick={() => setBedroomsBox(current => !current)}>{bedroomsBox ? "Annuler" : "Modifier le nombre de chambres"}</button><br/><br/>
            {bedroomsBox && 
            <div>
            <form>
            <label >Nombre de chambres :</label><br/>
            <input type="text" placeholder="Nombre de chambres :" onChange={getBedrooms} /><br/>
            </form></div>}

            {optionsBox ? <div></div> : <p>Options: {announce?.options[0]},{announce.options[1]}, {announce.options[2]}, {announce.options[3]},{announce.options[4]}</p>}
            <button onClick={() => setOptionsBox(current => !current)}>{bedroomsBox ? "Annuler" : "Modifier les options"}</button><br/><br/>
            {optionsBox && 
            <div>
            <form>
            <label >Options :</label><br/>
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
          </label><br/>
            </form></div>}

            </div>
            </div>
            <button onClick={modifyContent} >Enregistrer les modifications</button><br/>
          
      </div>
    </>
  );
}

export default AnnounceDetailAdmin;
