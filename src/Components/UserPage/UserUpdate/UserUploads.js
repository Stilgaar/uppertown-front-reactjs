import { userUpload } from '../../../JSON/Arrays';
import OneLineUpload from './OneLineUpload';

function Uploads({ user, hardRefresh }) {


    return (

        <div className="userupdate-generalcontainer">
            <div className="userupdate-container-params">
                <div><h3> Uploads de vos documents </h3> </div>
            </div>

            {userUpload.map((entry, index) => (
                <OneLineUpload entry={entry} key={index} user={user} hardRefresh={hardRefresh} />
            ))}
        </div>
    )
}


export default Uploads;