import { Link } from "react-router-dom";

function UserLine({ userdata }) {
    return (
        <Link to={{ pathname: `/user-detail/${userdata._id}` }}
            style={{ textDecoration: "none", color: "black" }}>
            <div className="card row">
                <div>

                    <div className="row">
                        <div className="m-a">
                            <span className="text-primary fw-br">
                                Nom de famille :
                            </span>
                            {userdata.lastname}
                        </div>

                        <div className="m-a">
                            <span className="text-primary fw-br">
                                Prénom :
                            </span>
                            {userdata.firstname}
                        </div>

                        <div className="m-a">
                            <span className="text-primary fw-br">
                                Email :
                            </span>
                            {userdata.email}
                        </div>

                        {userdata.pi[0] && <div className="row text-primary fw-br m-a">
                            <span className="m-a"> Pieces d'ID :</span>
                            {userdata.pi.map((data) =>
                                <img key={data} className="thumb p-1" src={data} alt="piece identité" />
                            )}</div>}

                        {userdata.JDD[0] && <div className="row text-primary fw-br m-a">
                            <span className="m-a"> Justificatifs de Domiciles :</span>
                            {userdata.JDD.map((data) =>
                                <div><img key={data} className="thumb  p-1" src={data} alt="justif" />
                                </div>
                            )}</div>}

                        {userdata.avisFiscal[0] && <div div className="row text-primary fw-br m-a">
                            <span className="m-a"> Avis d'impositions :</span>
                            {userdata.avisFiscal.map((data) =>
                                <div key={data} ><img className="thumb p-1" src={data} alt="avis fiscal" />
                                </div>
                            )}</div>}</div></div>
            </div >
        </Link>
    )
}

export default UserLine;