import { userUpload } from '../../../JSON/Arrays';
import OneLineUpload from './OneLineUpload';

function Uploads({ user, hardRefresh }) {


    return (

        <div className="container-xl bg-white p-1">
            <div className="container-xl">
                <h3 className="bg-primary text-white t-center font-lg br-xs ml-3 mr-3 mb-3 p-1"> Uploads de vos documents </h3>
            </div>

            {userUpload.map((entry, index) => (
                <OneLineUpload entry={entry} key={index} user={user} hardRefresh={hardRefresh} />
            ))}
        </div>
    )
}


export default Uploads;