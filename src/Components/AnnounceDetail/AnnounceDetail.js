import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./AnnounceDetail.css";

function AnnounceDetail() {
  const [invest, setInvest] = useState();
  const [immo, setImmo] = useState();

  const location = useLocation();
  const announce = location.state?.data;

  useEffect(() => {
    setImmo(announce);
    announce.image.map((a) => {
      console.log(a)
    })
  }, [announce]);

  function handleInput(e) {
    setInvest(e.target.value);
  }

  function handleClick() {
    alert(`Vous souhaitez investir ${invest} jeton(s)`);
  }

  return (
    <>
      <h2>Annonce en détail</h2>
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
              centerSlidePercentage= {100}
            >
              {announce.image.map((item, index) => {
                return(
                  <div key={index}>
                    <img className="image-carousel" src={item} alt="photo" />
                  </div>
                )
                })}
              
            </Carousel>
          </div>
          <div className="detail-description-container">
            <div className="detail-input">
              <label>Investissement désiré en jetons:</label>
              <input
                type="number"
                placeholder="Investissement désiré"
                value={invest}
                onInput={(e) => handleInput(e)}
              />
              <button onClick={handleClick}>Valider</button>
            </div>
            <h3>{announce.title}</h3>
            <p>{announce.type}</p>
            <p>{announce.content}</p>
            <p>
              Non dolore fugiat et tempor velit consectetur cupidatat eu ea. Qui
              non consectetur in Lorem. Velit commodo ad dolor nulla dolore
              consectetur deserunt labore occaecat duis cupidatat dolore amet
              laboris. Exercitation ipsum Lorem reprehenderit amet nostrud
              dolore labore qui fugiat. Elit aliquip consequat mollit excepteur
              eu. Minim est ullamco ea et do dolore amet do minim eu anim. Lorem
              dolor laborum incididunt eiusmod veniam enim labore.
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
            <p>Prix: {announce.price} €</p>
            <p>Prix du jeton: {announce.share_price} SC</p>
            <p>Nombre de jetons: {announce.share_number}</p>
          </div>
          <div className="detail-rent-container">
            <p>Loyer par an brut: {announce.gross_rent_by_year} €</p>
            <p>Loyer par mois brut: {announce.gross_rent_by_year / 12} €</p>
            <p>Coûts mensuels: {announce.monthly_cost} €</p>
            <p>
              Loyer net par mois:{" "}
              {announce.gross_rent_by_year / 12 - announce.monthly_cost} €
            </p>
            <p>
              Gain mensuel par jeton:{" "}
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
    </>
  );
}

export default AnnounceDetail;
