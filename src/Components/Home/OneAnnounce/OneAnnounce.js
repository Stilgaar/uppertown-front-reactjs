import "./OneAnnounce.css";

function OneAnnounce({ ann }) {
  let announceRandom = ann[Math.floor(Math.random() * ann.length)];

  return (
    <div className="oneannounce-container-container">
      <div className="oneannounce-title-container">
        <h4>UpperTown vous propose</h4>
      </div>
      <div className="oneannounce-image-text-container">
        <div className="oneannounce-container">
          <img
            className="oneannounce-image-container"
            src={announceRandom?.image[0]}
            alt=""
          />
          <p className="onennounce-image-bottom-grey-bar">
            {announceRandom?.region} / {announceRandom?.city}
          </p>
        </div>
        <div className="oneannounce-container-text">
          <h4>Vous voulez en voir plus?</h4>
          <p>
            De nombreux biens sont disponible dans notre catalogue. Autant
            d'opportunités d'investissement en Crowd Funding vous attendent.
          </p>
          <p>
            Pour voir nos annonces en détail et pouvoir investir,
            inscrivez-vous!
          </p>
        </div>
      </div>
    </div>
  );
}

export default OneAnnounce;
