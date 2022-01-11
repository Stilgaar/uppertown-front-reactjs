import './UserPage.css';
import './UserPage.scss';

import React, { useEffect, useState } from 'react'
import UserUpdate from './UserUpdate/UserUpdate';
import UserVirement from './UserVirement/UserVirement';
import UserTransac from './UserTransac/UserTransac';
import UserSplash from './UserSplash/UserSplash';
import UserUploads from './UserUpdate/UserUploads';

function UserPage({ user, hardRefresh }) {

    const [state, setState] = useState('splash')

    useEffect(() => {
        hardRefresh()
    }, [])

    return (
        <div className="user-page">
            <div className="userpage-buttons-list">
                {state !== 'splash' &&
                    < button onClick={() => setState('splash')}
                        className="userpage-button-validate">
                        Retours
                    </button>}
                <button onClick={() => setState('transac')}
                    className="userpage-button-validate">
                    Historique de vos Transactions
                </button>
                <button onClick={() => setState('money')}
                    className="userpage-button-validate">
                    Acheter ou Vendre Stable Coins
                </button>
                <button onClick={() => setState('params')}
                    className="userpage-button-validate">
                    Gèrer son compte
                </button>
                <button onClick={() => setState('upload')}
                    className="userpage-button-validate">
                    Upload Fichiers
                </button>
            </div>

            {
                state === 'splash' &&
                <UserSplash user={user} setState={setState} />
            }

            {
                state === 'transac' && <div>
                    {user?.userType === "userType4" ?
                        <div> <UserTransac
                            user={user}
                            hardRefresh={hardRefresh} />
                        </div>
                        :
                        <div className="userpage-warning">
                            Pour avoir accès aux Transactions : <br />
                            Vous devez d'abord procèder aux étapes de verifications avant de procéder à cette étape
                            <br />
                            <br />
                            <button onClick={() => setState('params')}
                                className="userpage-button-validate-gestion">
                                Gèrer son compte
                            </button>
                        </div>}
                </div>
            }

            {
                state === 'money' && <div>
                    {user?.userType === "userType4" ?
                        <div>
                            <UserVirement user={user} hardRefresh={hardRefresh} />
                        </div> :
                        <div className="userpage-warning">Pour pouvoir acheter ou vendre des Stable Coins : <br />
                            Vous devez d'abord procèder aux étapes de verifications avant de procéder à cette étape
                            <br /> <br />
                            <button onClick={() => setState('params')}
                                className="userpage-button-validate-gestion">
                                Gèrer son compte
                            </button>
                        </div>}
                </div>
            }

            {
                state === 'params' &&
                <UserUpdate user={user} hardRefresh={hardRefresh} />
            }

            {
                state === 'upload' &&
                <UserUploads user={user} hardRefresh={hardRefresh} />
            }
        </div >
    )
}
export default UserPage
