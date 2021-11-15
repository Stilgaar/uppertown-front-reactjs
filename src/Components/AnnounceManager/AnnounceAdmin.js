import "./AllAnnounces.css"
import { Link } from "react-router-dom";

function Announce({ announce }) {

  return (
    <Link to={{
      pathname: '/announce-detail-admin',
      state: {
        data: announce
      },
    }}
      style={{ textDecoration: "none", color: "black" }}>
      <div className="announce-container" href="/announce-detail-admin">
        <div className="announce-upper-container">
          <div className="announce-container-image">
            <img src={announce?.image[0]} alt="decription alt (to be fixe)"/>
          </div>

          <div className="announce-container-title">
            <h3>{announce.title}</h3>
          </div>

          <div className="announce-container-content">
            <p>{announce.type}</p>
            <p>{announce.content}</p>
          </div>
        </div>
        <div className="announce-lower-container">
          <div className="announce-container-city">
            <p>Ville: {announce.city}</p>
            <p>Code postal: {announce.zip_code}</p>
            <p>Région: {announce.region}</p>
          </div>

          <div className="announce-container-price">
            <p>Prix total: {announce.price}€</p>
            <p>Prix de la part: {announce.share_price}€</p>
            <p>Nombre de parts: {announce.share_number}</p>
          </div>
        </div>
        <div><br/>
        <b>Annonce publiée le : {(announce?.created_at instanceof Date) ? announce?.created_at.toLocaleDateString() : new Date(announce?.created_at).toLocaleDateString()}</b>
        </div>
      </div>
    </Link>
  );
}

export default Announce;
