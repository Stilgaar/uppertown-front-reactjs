import './UserUpdate.css';
import { userUpate } from '../../../JSON/Arrays';
import OneLineUpdate from './OneLineUpdate';

function UserUpdate({ user, hardRefresh }) {

    return (
        <div className="container-xl bg-white p-1">
            <div className="container-xl">
                <h3 className="bg-primary text-white t-center font-lg br-xs ml-3 mr-3 mb-3 p-1"> Paramètres généraux du compte </h3>
            </div>
            {userUpate.map((entry, index) => (
                <OneLineUpdate user={user} key={index} entry={entry} hardRefresh={hardRefresh} />
            ))}
        </div>
    )
}

export default UserUpdate;