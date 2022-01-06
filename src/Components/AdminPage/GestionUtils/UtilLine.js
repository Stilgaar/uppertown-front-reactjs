import UserLine from '../UserLine/UserLine';
import { useState } from 'react';

function UtilLine({ element, adminRefresh }) {
    const [box, setBox] = useState(false)
    return (
        <div className="gestionutilisateurs-container-section">
            <button className="gestion-utilisateurs-buttons"
                onClick={() => setBox(current => !current)}>
                <h3>{element.label} </h3>
                {element?.status?.length !== 0 ? <div className="gestionutil-notifs"> {element?.status?.length} </div> : null}
            </button>
            {box &&
                <div>
                    {element.status.map((userdata, index) =>
                        <UserLine key={index} userdata={userdata} adminRefresh={adminRefresh} />
                    )}
                </div>
            }
        </div>
    )
}

export default UtilLine;