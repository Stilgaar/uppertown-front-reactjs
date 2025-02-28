import "./Infos.css"
import people from './people.svg';
import coin from './coin.svg';
import building from './building.svg';
import cart from './cart-plus.svg';
import useFetch from '../../../Hooks/useFetch';
import { useCon } from '../../../Hooks/useCon'

function Infos() {

  const { url } = useCon()
  const { data: ann, error: annerror, pending: annpending } = useFetch(`${url}/api/announces/allAnnounces`)
  const { data: users, error: uerror, pending: upending } = useFetch(`${url}/api/users/users`)

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
    <div className="mt-4 mb-3 pt-2 pb-5 pl-1 pr-1 bg-white">
      <h3 className="bg-primary text-white p-1 t-center font-xl p-1 br-xs" >Uppertown en quelques chiffres</h3>
      <div className="row ml-1 mr-1  gap-3">

        <div className="col-12-xs col-6-md col-3-lg z-6 ">
          <div className="card bg-primary-light-9 t-center font-lg">
            <div><img src={coin} alt="coin"
              className="infos-svg-coin" />
              <p className="card-title" >StableCoins échangés</p></div>
            {uerror && <p>{uerror}</p>}
            {upending && <p>Chargement ...</p>}
            {users && <div>{(clienttokens?.toLocaleString())}</div>}
          </div>
        </div>

        <div className="col-12-xs col-6-md col-3-lg z-6">
          <div className="card bg-primary-light-9 t-center font-lg">
            <div><img src={people} alt="people"
              className="infos-svg-people" />
              <p className=" card-title">Utilisateurs Inscrit</p></div>
            {uerror && <p>{uerror}</p>}
            {upending && <p>Chargement ...</p>}
            {users && <div>{(users?.length?.toLocaleString())}</div>}
          </div>
        </div>

        <div className="col-12-xs col-6-md col-3-lg z-6">
          <div className="card bg-primary-light-9 t-center font-lg">
            <div><img src={building} alt="building"
              className="infos-svg-building" />
              <p className=" card-title" >Biens Immobiliers</p></div>
            {annerror && <p>{annerror}</p>}
            {annpending && <p>Chargement ...</p>}
            {ann && <div>{(ann.length?.toLocaleString())}</div>}
          </div>
        </div>

        <div className="col-12-xs col-6-md col-3-lg z-6">
          <div className="card bg-primary-light-9 t-center font-lg">
            <div><img src={cart} alt="cart"
              className="infos-svg-cart" />
              <p className=" card-title">Tokens disponibles</p></div>
            {annerror && <p>{annerror}</p>}
            {annpending && <p>Chargement ...</p>}
            {ann && <div>{(freetokens?.toLocaleString())}</div>}
          </div>
        </div>
      </div>
    </div>
  );

}

export default Infos;
