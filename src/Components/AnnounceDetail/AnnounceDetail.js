import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./AnnounceDetail.css";
import Swal from "sweetalert2";
import Axios from "axios";
import URLcontext from "../../Context/URLcontext";
import { numberSpaces } from "../../Func/numberSpace";

function AnnounceDetail() {
  const [invest, setInvest] = useState();
  const [wallet, setWallet] = useState();
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const d = new Date();

  const URLContextValue = useContext(URLcontext)

  const [immo, setImmo] = useState();

  const userOnline = localStorage.getItem("id")
  //console.log("USERID : "+userOnline);

  const location = useLocation();
  const announce = location.state?.data;
  //console.log("annonce: ", announce);

  const [sc, setSc] = useState({ stableCoin: "", validated: false })
  const [showInvest, setShowinvest] = useState("");
  const [message1, setMessage1] = useState("");
  const [emptyVal, setEmptyVal] = useState("");
  const [idProp, setIdProp] = useState();
  const [totalToken, setTotalToken] = useState()
  const [propExist, setPropExist] = useState("")

  function handleInput(e) {
    setInvest(e.target.value);
  }

  function handleClick() {
    if (!invest) {
      setEmptyVal("Veuillez définir le montant à investir")
    } else {
      setShowinvest(`Vous souhaitez investir ${invest} jeton(s)`)
      console.log(invest)
    }
  }

  function convertInSc() {
    setSc({ ...sc, stableCoin: invest * announce.share_price })
  }

  function getUserDatas() {

    fetch(`${URLContextValue.url}/api/users/${userOnline}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setWallet(result.stableCoins)
        setFirstName(result.firstname)
        setLastName(result.lastname)
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  }

  const ifExists = () => {


    fetch(`${URLContextValue.url}/api/properties/${userOnline}/${announce._id}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("Success EXISTS:", result);
        setPropExist(result)

      })
      .catch((error) => {
        console.error("Error:", error);
      });

  }


  const getDatasProperty = () => {

    fetch(`${URLContextValue.url}/api/properties/datas/${userOnline}/${announce._id}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("Success PROP datas:", result.idUser + " tokens :" + result.totalToken);

        setIdProp(result.idUser)
        setTotalToken(result.totalToken)

      })
      .catch((error) => {
        console.error("Error:", error);
      });

  }

  const sendTransac = () => {

    if (wallet > sc.stableCoin) {

      const data = {
        announceId: announce._id,
        userId: userOnline,
        token: invest,
        sc: sc.stableCoin,
        title: announce.title,
        content: announce.content,
        type: announce.type,
        price: announce.price,
        image: announce.image,
        created_at: d
      }



      Axios.post(`${URLContextValue.url}/api/transactions/buy`, data)
        .then(res => console.log(res))
        .then(Swal.fire({
          title: "Transaction effectuée !",
          //text: "Thanks",
          type: "success",
        }))
        .catch(err => console.log(err))

    } else {
      setMessage1("transaction impossible : solde insuffisant")
      return false;
    }


    fetch(`${URLContextValue.url}/api/users/${userOnline}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stableCoins: wallet - sc.stableCoin,
      }),
    }).then(() => {

    });

    let newsharenumber = Number(announce.share_number) - Number(invest)
    fetch(`${URLContextValue.url}/api/announces/${announce._id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        share_number: newsharenumber,
        //share_price: announce.price/(announce.share_number - invest)
      }),
    }).then(() => {
      setSc({ ...sc, validated: true })
    });

    if (idProp != userOnline) {
      fetch(`${URLContextValue.url}/api/properties/allProperties`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idUser: userOnline,
          announceId: announce._id,
          title: announce.title,
          content: announce.content,
          price: announce.price,
          share_price: announce.share_price,
          totalToken: invest,
          type: announce.type,
          gross_rent_by_year: announce.gross_rent_by_year,
          city: announce.city,
          region: announce.region,
          zip_code: announce.zip_code,
          bedrooms: announce.bedrooms,
          surface: announce.surface,
          option: announce.options,
          image: announce.image
        }),
      }).then(() => { console.log("New share number : " + invest); });

    } else {
      let newtotaltoken = (Number(totalToken) + Number(invest))
      fetch(`${URLContextValue.url}/api/properties/${userOnline}/${announce._id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          totalToken: newtotaltoken,
        }),
      }).then(() => { console.log("New share number : " + newtotaltoken) });
    }
  };


  const cancelTransac = () => {

    setInvest("");
    setSc({ stableCoin: "" })
    setMessage1('')
    setShowinvest('')

  }

  useEffect(() => {
    getUserDatas()
    ifExists()
    getDatasProperty()

  }, [])

  useEffect(() => {
    setImmo(announce);
    announce.image.map((a) => {
      console.log(a)
    })
  }, [announce]);

  return (
    <div className="announce-detail-page">
      <h3>Bonjour Mr {firstName} {lastName}, montant actuel de votre portefeuille : {wallet ? (wallet - sc.stableCoin) : wallet} SC</h3>
      <div className="detail-container">
        <div className="detail-upper-container">
          <div className="detail-image-container">
            <Carousel
              className="carousel"
              infiniteLoop={true}
              autoPlay={true}
              interval="5000"
              showThumbs={false}
              showStatus={false}
              dynamicHeight={false}
              centerMode={true}
              centerSlidePercentage={100}

            >
              {announce.image.map((item, index) => {
                return (
                  <div key={index}>
                    <img className="image-carousel" src={item} alt={`apercu n°${index} du bien immo`} />
                  </div>
                )
              })}

            </Carousel>
          </div>
          <div className="detail-description-container">
            {idProp === userOnline && <p>Vous possédez déjà {totalToken} token sur ce bien</p>}
            <div className="detail-input">
              {/* SI LE NOMBRE DE TOKEN EST STRICTEMENT SUPERIEUR A ZERO : */}
              <label>Investissement désiré en jetons:</label>
              {announce.share_number <= 0 && <p>Cette propriété n'est plus à vendre</p>}
              {announce.share_number != 0 && announce.share_number > 0 && <input
                type="number"
                placeholder="Investissement désiré"
                value={!sc.validated && invest}
                onInput={(e) => handleInput(e)}
              />}
              {announce.share_number != 0 && <button onClick={handleClick}>Valider</button>}
              <p>{emptyVal}</p>
              <p>{!sc.validated && showInvest}</p>
              {showInvest && !sc.validated ? <button onClick={convertInSc}>Veuiller confirmer le montant de l'investissement</button> : <div></div>}
              {sc.stableCoin && !sc.validated ? <p>Montant de l'achat : {sc.stableCoin} SC</p> : <div></div>}
              {/*J'ai mis ça en <h6> mais bien sûr il faudra améliorer ce style !! */}
              {sc.stableCoin && !sc.validated ? <h6>En cliquant sur le bouton ci-dessous, vous confirmez vous porter acquéreur du nombre de parts précédemment
                choisies et la transaction sera alors effective :</h6> : <div></div>}
              {sc.stableCoin && !sc.validated ? <button onClick={sendTransac}>Finaliser la transaction</button> : <div></div>}
              {sc.stableCoin && !sc.validated ? <button onClick={cancelTransac}>Annuler la transaction</button> : <div></div>}
              {sc.stableCoin && <p style={{ color: "red" }}>{message1}</p>}
              {message1 && <p>Veuillez alimenter votre portefeuille en cliquant ici : <a href="/stable-coins">Portefeuille</a></p>}
            </div>
            <h3>{announce.title}</h3>
            <p>{announce.type}</p>
            <p>{announce.content}</p>
            <p>
              Non dolore fugiat et tempor velit consectetur cupidatat eu ea...
            </p>
            <p>Nombre de chambres: {announce.bedrooms}</p>
            <p>Surface habitable: {announce.surface}m²</p>
            <p>Options:</p>
            <ul>
              {immo?.options?.map((option, index) => {
                return <li key={index}>{announce?.options?.[index]}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="detail-lower-container">
          <div className="detail-economic-container">
            <p>Prix: {numberSpaces(announce.price)} €</p>
            {/*<p>Prix du jeton: { (announce.share_price && sc.stableCoin ? announce.price/(announce.share_number - invest) : announce.share_price).toFixed(2)} SC</p>*/}
            <p>Prix du jeton: {(announce?.share_price).toFixed(2)} SC</p>
            <p>Nombre de jetons: {announce.share_number && invest ? announce.share_number - invest : announce.share_number} </p>
          </div>
          <div className="detail-rent-container">
            <p>Loyer par an brut: {numberSpaces(announce.gross_rent_by_year)} €</p>
            <p>Loyer par mois brut: {numberSpaces(announce.gross_rent_by_year / 12)} €</p>
            <p>Coûts mensuels: {numberSpaces(announce.monthly_cost)} €</p>
            <p>
              Loyer net par mois :
              {numberSpaces(announce.gross_rent_by_year / 12 - announce.monthly_cost)} €
            </p>
            <p>
              Gain mensuel par jeton :
              {(
                (announce.gross_rent_by_year / 12 - announce.monthly_cost) /
                announce.share_number
              ).toFixed(2)}{" "}
              €
            </p>
          </div>
          <div className="detail-geographical-container">
            <p>Ville: {announce.city}</p>
            <p>Département: {announce.region}</p>
            <p>Code postal: {announce.zip_code}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnounceDetail;
