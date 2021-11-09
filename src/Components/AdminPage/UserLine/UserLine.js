import './UserLine.css';
import { Link } from "react-router-dom";

function UserLine({ userdata }) {


    return (
        <Link to={{
            pathname: '/user-detail',
            state: {
            data : userdata
            },
        }}
            style={{ textDecoration: "none", color: "black" }}>

            <div className="gestionutilisateurs-container-container">

                <div className="gestionutilistatuers-container-lastname"><span className="gestionutilisateurs-element-texte">Nom de famille :
                </span>{userdata.lastname}</div>

                <div className="gestionutilistatuers-container-firstname"><span className="gestionutilisateurs-element-texte">Prénom :
                </span>{userdata.firstname}</div>

                <div className="gestionutilistatuers-container-email"><span className="gestionutilisateurs-element-texte">Email :
                </span>{userdata.email}</div>

                {userdata.pi[0] && <div className="userupdate-mapped"> Pieces d'ID
                    {userdata.pi.map((data) =>
                        <div> <img className="userupdate-image" src={data} alt="" /></div>
                    )}
                </div>}
                {userdata.JDD[0] && <div className="userupdate-mapped"> Justificatif Domicile
                    {userdata.JDD.map((data) =>
                        <div> <img className="userupdate-image" src={data} alt="" /></div>
                    )}
                </div>}
                {userdata.avisFiscal[0] && <div div className="userupdate-mapped"> Avis Fiscaux
                    {userdata.avisFiscal.map((data) =>
                        <div> <img className="userupdate-image" src={data} alt="" /></div>
                    )}
                </div>}
            </div>
        </Link>

    )
}

export default UserLine;