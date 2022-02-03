import { useContext } from "react";
import URLContext from "../../../Context/URLcontext";
import useFetch from "../../../Hooks/useFetch";

function OneAnnounce() {

  const URLContextValue = useContext(URLContext)
  const { data: ann, error, pending } = useFetch(`${URLContextValue.url}/api/announces/allAnnounces`)

  let announceRandom = ann[Math.floor(Math.random() * ann.length)];

  return (

    <div className=" mt-3 mb-4 pt-2 pb-5 pl-1 pr-1 bg-white">
      <h3 className="bg-primary text-white p-1 t-center font-xl p-1">UpperTown vous propose</h3>

      <div className="row gap-2 ml-2 mr-2">
        <div className="p-3 col-6-xl z-6 bg-white t-center font-lg p-1">
          {ann && <img className="br-xs" src={announceRandom?.image[0]} alt="announce random" />}
          {pending && <div>Chargement...</div>}
          {error && <div>{error}</div>}
          {ann && <p className="bg-primary text-white br-xs p-1"> {announceRandom?.region} / {announceRandom?.city}</p>}
          {pending && <p className="bg-primary text-white br-xs p-1"> Chargment ... </p>}
          {error && <p className="bg-primary text-white br-xs p-1"> {error} </p>}
        </div>
        <div className="oneanntext col-6-xl z-6 bg-white t-center font-lg">
          <p className="m-2 bg-primary text-white br-xs p-1">Vous desirez en voir plus ?</p>
          <p className="card font-lg">
            De nombreux biens sont disponible dans notre catalogue. Autant
            d'opportunités d'investissement en Crowd Funding vous attendent. <br /> <br />
            Pour voir nos annonces en détail et pouvoir investir,
            inscrivez-vous!
          </p>
        </div>
      </div>
    </div>

  );
}

export default OneAnnounce;
