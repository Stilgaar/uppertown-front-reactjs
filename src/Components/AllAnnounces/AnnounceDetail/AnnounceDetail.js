import "./AnnounceDetail.css";
import { useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { numberSpaces } from "../../../Func/numberSpace";
import Invest from "./Invest";

function AnnounceDetail({ user }) {

  const d = new Date();

  const location = useLocation();
  const announce = location.state?.data;

  return (

    <div className="announce-detail-page">
      <h5>Bonjour {user.firstname}, votre portefeuille s'éléve à {user?.stableCoins} stableCoins.</h5>
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
              {announce?.image.map((item) => (
                <div key={item._id}>
                  <img className="image-carousel"
                    src={item}
                    alt={`apercu du bien immo`} />
                </div>
              ))}
            </Carousel>

          </div>
          <div className="detail-description-container">

            {user.userType === "userType4" &&
              <Invest user={user} ann={announce} />}

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
            <p>Prix: {numberSpaces(announce.price)} €</p>
            <p>Prix du jeton: {(announce?.share_price).toFixed(2)} SC</p>
            <p>Nombre de jetons: {announce?.share_number} </p>
          </div>

          <div className="detail-rent-container">
            <p>Loyer par an brut: {numberSpaces(announce.gross_rent_by_year)} €</p>
            <p>Loyer par mois brut: {numberSpaces(announce.gross_rent_by_year / 12)} €</p>
            <p>Coûts mensuels: {numberSpaces(announce.monthly_cost)} €</p>
            <p> Loyer net par mois :
              {numberSpaces(announce.gross_rent_by_year / 12 - announce.monthly_cost)} €
            </p>

            <p> Gain mensuel par jeton :
              {((announce.gross_rent_by_year / 12 - announce.monthly_cost) /
                announce.share_number).toFixed(2)}{" "}
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
