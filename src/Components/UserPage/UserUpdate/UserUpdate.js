import './UserUpdate.css';
import { userUpate } from '../../../JSON/Arrays';
import OneLineUpdate from './OneLine';

function UserUpdate({ user, hardRefresh }) {

    return (

        <div className="userupdate-generalcontainer">
            <div className="userupdate-container-params">
                <div><h3> Paramètres généraux du compte </h3> </div>
            </div>

            {userUpate.map((entry, index) => (
                <OneLineUpdate user={user} key={index} entry={entry} hardRefresh={hardRefresh} />
            ))}
        </div>
    )
}

export default UserUpdate;