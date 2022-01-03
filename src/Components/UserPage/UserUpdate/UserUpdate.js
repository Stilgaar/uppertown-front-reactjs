import './UserUpdate.css';
import { userUpate } from '../../../JSON/Arrays';
import OneLine from './OneLine';

function UserUpdate({ user, hardRefresh }) {

    return (
        <div>
            <div
                className="userupdate-generalcontainer">
                <div
                    className="userupdate-container-params">
                    <div>
                        <h3>
                            Paramètres généraux du compte
                        </h3>
                    </div>
                </div>

                {userUpate.map((entry, index) => (
                    <OneLine
                        user={user}
                        key={index}
                        entry={entry}
                        hardRefresh={hardRefresh} />
                ))}
            </div>
        </div >

    )
}

export default UserUpdate;