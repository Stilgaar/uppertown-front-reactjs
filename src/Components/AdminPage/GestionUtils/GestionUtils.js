import { useEffect, useState } from 'react';
import UserLine from '../UserLine/UserLine';
import './GestionUtils.css'
const axios = require('axios');

function GestionUtils() {

    const [users, setUsers] = useState([]);
    const [usersType1Box, setUsersType1Box] = useState(false);
    const [usersType2Box, setUsersType2Box] = useState(false);
    const [usersType3Box, setUsersType3Box] = useState(false);
    const [usersType4Box, setUsersType4Box] = useState(false);
    const [adminBox, setAdminBox] = useState(false);
    const [awaitingBox, setAwaitingBox] = useState(false);

    const adminRefresh = () => {
        axios.get("http://localhost:1337/api/users/users")
            .then((res) => setUsers(res.data))}

    useEffect(() => {
    adminRefresh();
            },[])

    const allUser1 = users.filter(user => user.userType === "userType1")
    const allUser2 = users.filter(user => user.userType === "userType2")
    const allUser3 = users.filter(user => user.userType === "userType3")
    const allUser4 = users.filter(user => user.userType === "userType4")
    const allUserAdmin = users.filter(user => user.isAdmin === true)
    const transfertPending = users.filter(user => user.awaiting === true)

    return (

        <div className="gestionutilisateurs-container"> <h3>Utilisateurs par type</h3>

            <div className="gestionutilisateurs-container-section"> <button onClick={() => setAwaitingBox(current => !current)}><h3>Utilisateurs en attente de Stable Coins</h3> </button>
                {awaitingBox &&
                    <div>
                        {transfertPending.map((userdata) =>
                            <UserLine userdata={userdata} adminRefresh={adminRefresh} />
                        )}
                    </div>
                }
            </div>

            <div className="gestionutilisateurs-container-section"> <button onClick={() => setUsersType1Box(current => !current)}><h3>Utilisateurs sans aucune verifications</h3> </button>
                {usersType1Box &&
                    <div>
                        {allUser1.map((userdata) =>
                            <UserLine userdata={userdata} adminRefresh={adminRefresh}/>
                        )}
                    </div>
                }
            </div>

            <div className="gestionutilisateurs-container-section"> <button onClick={() => setUsersType2Box(current => !current)}><h3>Identité Verifié</h3> </button>
                {usersType2Box &&
                    <div>
                        {allUser2.map((userdata) =>
                            <UserLine userdata={userdata} adminRefresh={adminRefresh}/>
                        )}
                    </div>
                }
            </div>

            <div className="gestionutilisateurs-container-section"> <button onClick={() => setUsersType3Box(current => !current)}><h3> Adresses Verifié </h3> </button>
                {usersType3Box &&
                    <div>
                        {allUser3.map((userdata) =>
                            <UserLine userdata={userdata} adminRefresh={adminRefresh} />
                        )}
                    </div>
                }
            </div>

            <div className="gestionutilisateurs-container-section"> <button onClick={() => setUsersType4Box(current => !current)}><h3>Fiscalité verifié</h3> </button>
                {usersType4Box &&
                    <div>
                        {allUser4.map((userdata) =>
                            <UserLine userdata={userdata}adminRefresh={adminRefresh} />
                        )}
                    </div>
                }
            </div>

            <div className="gestionutilisateurs-container-section"> <button onClick={() => setAdminBox(current => !current)}><h3>Admins</h3> </button>
                {adminBox &&
                    <div>
                        {allUserAdmin.map((userdata) =>
                            <UserLine userdata={userdata} adminRefresh={adminRefresh} />
                        )}
                    </div>
                }
            </div>

        </div>
    )
}

export default GestionUtils;