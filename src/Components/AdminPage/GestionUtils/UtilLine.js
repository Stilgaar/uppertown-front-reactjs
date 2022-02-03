import UserLine from '../UserLine/UserLine';
import { useState } from 'react';

function UtilLine({ element, adminRefresh }) {

    const [box, setBox] = useState(false)

    return (
        <div className='container p-1'>
            <div className=" card container bg-white display-f noborder p-1"
                onClick={() => setBox(current => !current)
                }>
                <h3>{element?.label} </h3>
                {
                    element?.status?.length !== 0 ?
                        <div className="ml-1 badge-secondary text-white fw-br">
                            {element?.status?.length}
                        </div> : null
                }
            </div>
            {box &&
                <div className='m-1'> {element.status.map((userdata) =>
                    <UserLine key={userdata._id} userdata={userdata} adminRefresh={adminRefresh} />
                )}
                </div>
            }
        </div >
    )
}

export default UtilLine;