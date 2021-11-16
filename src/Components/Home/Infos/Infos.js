import "./Infos.css";
import people from './people.svg';
import coin from './coin.svg';
import building from './building.svg';
import cart from './cart-plus.svg';

function Infos({ users, ann }) {
  let clienttokens = 0;
  for (let i = 0; i < users.length; i++) {
    clienttokens += users[i].stableCoins;
  }

  let freetokens = 0;
  for (let i = 0; i < ann.length; i++) {
    freetokens += ann[i].share_number;
  }
  //fonction trouver sur google pour espacer les chiffres des prix
  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <div className="infos-container-general">
      <div className="infos-container-title">
        <h4>UpDownStreet en quelques chiffres</h4>
      </div>
      <div className="infos-container-container">
        <div className="infos-container">
          <div className="info-element"><img src={coin} alt="coin" className="infos-svg-coin" /><h4 className="infos-coin">StableCoins échangés</h4></div>
          <div className="info-element">{numberWithSpaces(clienttokens)}</div>
        </div>

        <div className="infos-container">
          <div className="info-element"><img src={people} alt="people" className="infos-svg-people" /><h4 className="infos-people">Utilisateurs</h4></div>
          <div className="info-element">{numberWithSpaces(users.length)}</div>
        </div>

        <div className="infos-container">
          <div className="info-element"><img src={building} alt="building" className="infos-svg-building" /><h4 className="infos-building">Biens Immobiliers</h4></div>
          <div className="info-element">{numberWithSpaces(ann.length)}</div>
        </div>

        <div className="infos-container">
          <div className="info-element"><img src={cart} alt="cart" className="infos-svg-cart" /><h4 className="infos-cart">Tokens disponibles</h4></div>
          <div className="info-element">{numberWithSpaces(freetokens)}</div>
        </div>
      </div>
    </div>
  );
}

export default Infos;
