import { useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Invest from "./Invest";
import { useContext, useEffect } from "react";
import URLcontext from "../../../Context/URLcontext";
import useFetch from "../../../Hooks/useFetch";

function AnnounceDetail({ user, hardRefresh }) {

  const location = useLocation();
  const id = location.state?.data;
  const URLContextValue = useContext(URLcontext)

  const { data: announce, refresh: thisAnnRefresh, pending, error } = useFetch(`${URLContextValue.url}/api/announces/${id}`)

  useEffect(() => { thisAnnRefresh() }, [thisAnnRefresh])

  return (

    <div className="global-container bg-white p-3 br-xs">
      <h3 className="bg-primary text-white t-center font-xl br-xs ml-5 mr-5  p-1">
        Salut {user.firstname}, ton portefeuille s'éléve à {user?.stableCoins?.toLocaleString()} stableCoins.</h3>

      {error && <div className="global-container bg-white br-xs p-2">{error}</div>}
      {pending && <div className="global-container bg-white br-xs p-2"> Loading </div>}
      {announce &&
        <div className="global-container bg-white br-xs p-2">


          <div className="row container-xl p-3">


            <div className="col-12-lg col-7-xl">
              <Carousel className="br-xs col-10-xl"
                infiniteLoop={true}
                autoPlay={true}
                interval="5000"
                showThumbs={false}
                showStatus={false}
                dynamicHeight={true}
                centerMode={true}
                centerSlidePercentage={100} >
                {announce?.image?.map((item) => (
                  <div key={item} className="col-12-xl">
                    <img
                      src={item}
                      alt={`apercu ${item} du bien immo`} />
                  </div>
                ))}
              </Carousel>

            </div>
            <div className="col-12-lg col-5-xl card t-center">

              {user.userType === "userType4" &&

                <Invest user={user} ann={announce} thisAnnRefresh={thisAnnRefresh} hardRefresh={hardRefresh} />}

              <div className="card mt-2 font-lg">
                <h4 className="p-1">{announce?.title}</h4>
                <p className="t-start ml-3"><span className="fw-b text-primary">Type :</span> {announce?.type}</p>
                <p className="t-start ml-3"><span className="fw-b text-primary">Description :</span> {announce?.content}</p>
                <p className="t-start ml-3"><span className="fw-b text-primary">Nombre de chambres :</span> {announce?.bedrooms}</p>
                <p className="t-start ml-3"><span className="fw-b text-primary">Surface habitable :</span> {announce?.surface}m²</p>
                <p className="t-start ml-3"><span className="fw-b text-primary">Options :</span></p>
                <ul>
                  {announce?.options?.map((options, index) => {
                    return <li className="t-start ml-3 text-secondary fw-l" key={index}>{options}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="row justify-center font-ml">
            <div className="col-3-xl">
              <div className="border-base p-3 m-2 br-xs">
                <p><span className="text-primary fw-br">Prix :</span> {announce?.price?.toLocaleString()} €</p>
                <p><span className="text-primary fw-br">Prix du jeton :</span> {announce?.share_price?.toLocaleString()} SC</p>
                <p><span className="text-primary fw-br">Nombre de jetons :</span> {announce?.share_number?.toLocaleString()} </p>
              </div>
            </div>

            <div className="col-3-xl">
              <div className="border-base p-3 m-2 br-xs">
                <p><span className="text-primary fw-br">Loyer par an brut :</span> {announce?.gross_rent_by_year?.toLocaleString()} €</p>
                <p><span className="text-primary fw-br">Loyer par mois brut :</span> {(announce?.gross_rent_by_year / 12)?.toLocaleString()} €</p>
                <p><span className="text-primary fw-br">Coûts mensuels :</span> {(announce?.monthly_cost?.toLocaleString())} €</p>
                <p><span className="text-primary fw-br"> Loyer net par mois :</span>
                  {(announce?.gross_rent_by_year / 12 - announce?.monthly_cost)?.toLocaleString()} €
                </p>

                <p> <span className="text-primary fw-br">Gain mensuel par jeton :</span>
                  {((announce?.gross_rent_by_year / 12 - announce?.monthly_cost) /
                    announce?.share_number)}{" "}
                  €
                </p>
              </div>
            </div>

            <div className="col-3-xl">
              <div className="border-base p-3 m-2 br-xs">
                <p><span className="text-primary fw-br">Ville:</span> {announce?.city}</p>
                <p><span className="text-primary fw-br">Département: </span>{announce?.region}</p>
                <p><span className="text-primary fw-br">Code postal: </span>{announce?.zip_code}</p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>


  );


}

export default AnnounceDetail;
