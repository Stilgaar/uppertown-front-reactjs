import "./AnnounceDetail.css";
import { useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Invest from "./Invest";
import { useContext, useEffect } from "react";
import URLcontext from "../../../Context/URLcontext";
import useAxios from "../../../Hooks/useAxios";

function AnnounceDetail({ user, hardRefresh }) {

  const location = useLocation();
  const id = location.state?.data;
  const URLContextValue = useContext(URLcontext)

  const [announce, thisAnnRefresh] = useAxios(`${URLContextValue.url}/api/announces/${id}`)

  useEffect(() => { thisAnnRefresh() }, [])

  return (

    <div className="announce-detail-page">
      <h5>Bonjour {user.firstname}, votre portefeuille s'éléve à {user?.stableCoins?.toLocaleString()} stableCoins.</h5>
      <div className="detail-container">
        <div className="detail-upper-container">
          <div className="detail-image-container">
            <Carousel className="carousel"
              infiniteLoop={true}
              autoPlay={true}
              interval="5000"
              showThumbs={false}
              showStatus={false}
              dynamicHeight={false}
              centerMode={true}
              centerSlidePercentage={100} >
              {announce?.image?.map((item, index) => (
                <div key={index} className="image-carousel">
                  <img
                    src={item}
                    alt={`apercu du bien immo`} />
                </div>
              ))}
            </Carousel>

          </div>
          <div className="detail-description-container">

            {user.userType === "userType4" &&

              <Invest user={user} ann={announce} thisAnnRefresh={thisAnnRefresh} hardRefresh={hardRefresh} />}

            <h4>{announce?.title}</h4>
            <p>{announce?.type}</p>
            <p>{announce?.content}</p>
            <p>Nombre de chambres: {announce?.bedrooms}</p>
            <p>Surface habitable: {announce?.surface}m²</p>
            <p>Options:</p>
            <ul>
              {announce?.options?.map((options, index) => {
                return <li key={index}>{options}</li>;
              })}
            </ul>
          </div>
        </div>

        <div className="detail-lower-container">
          <div className="detail-economic-container">
            <p>Prix: {announce?.price?.toLocaleString()} €</p>
            <p>Prix du jeton: {announce?.share_price?.toLocaleString()} SC</p>
            <p>Nombre de jetons: {announce?.share_number?.toLocaleString()} </p>
          </div>

          <div className="detail-rent-container">
            <p>Loyer par an brut: {announce?.gross_rent_by_year?.toLocaleString()} €</p>
            <p>Loyer par mois brut: {(announce?.gross_rent_by_year / 12)?.toLocaleString()} €</p>
            <p>Coûts mensuels: {(announce?.monthly_cost?.toLocaleString())} €</p>
            <p> Loyer net par mois :
              {(announce?.gross_rent_by_year / 12 - announce?.monthly_cost)?.toLocaleString()} €
            </p>

            <p> Gain mensuel par jeton :
              {((announce?.gross_rent_by_year / 12 - announce?.monthly_cost) /
                announce?.share_number)}{" "}
              €
            </p>

          </div>
          <div className="detail-geographical-container">
            <p>Ville: {announce?.city}</p>
            <p>Département: {announce?.region}</p>
            <p>Code postal: {announce?.zip_code}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnounceDetail;
