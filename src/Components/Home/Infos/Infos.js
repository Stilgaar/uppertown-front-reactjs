import "./Infos.css";
import people from './people.svg';
import coin from './coin.svg';
import building from './building.svg';
import cart from './cart-plus.svg';
import { useContext } from "react";
import URLContext from "../../../Context/URLcontext";
import useAxios from "../../../Hooks/useAxios";

function Infos() {

  const URLContextValue = useContext(URLContext)
  const [users] = useAxios(`${URLContextValue.url}/api/users/users`)
  const [ann] = useAxios(`${URLContextValue.url}/api/announces/allAnnounces`)

  let clienttokens = 0;
  for (let i = 0; i < users.length; i++) {
    clienttokens += users[i].stableCoins;
  }

  let freetokens = 0;
  for (let i = 0; i < ann.length; i++) {
    freetokens += ann[i].share_number;
  }

  //fonction trouver sur google pour espacer les chiffres des prix

  return (
    <div className="infos-container-general">
      <div className="infos-container-title">
        <h4>UpperTown en chiffres</h4>
      </div>
      <div className="infos-container-container">
        <div className="infos-container">
          <div><img src={coin} alt="coin" className="infos-svg-coin" /><p className="infos-coin">StableCoins échangés</p></div>
          <div>{(clienttokens?.toLocaleString())}</div>
        </div>

        <div className="infos-container">
          <div><img src={people} alt="people" className="infos-svg-people" /><p className="infos-people">Utilisateurs</p></div>
          <div>{(users?.length?.toLocaleString())}</div>
        </div>

        <div className="infos-container">
          <div><img src={building} alt="building" className="infos-svg-building" /><p className="infos-building">Biens Immobiliers</p></div>
          <div>{(ann.length?.toLocaleString())}</div>
        </div>

        <div className="infos-container">
          <div><img src={cart} alt="cart" className="infos-svg-cart" /><p className="infos-cart">Tokens disponibles</p></div>
          <div>{(freetokens?.toLocaleString())}</div>
        </div>
      </div>
    </div>
  );
}

export default Infos;
