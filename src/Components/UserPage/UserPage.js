
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
        <div className="container-xl">
            <div className="display-f justify-center row">
                {state !== 'splash' &&
                    < button onClick={() => setState('splash')}
                        className="btn-outlined-primary text-hover-white font-sm col-3-lg col-2-xl">
                        Retours
                    </button>}
                <button onClick={() => setState('transac')}
                    className="btn-outlined-primary text-hover-white font-sm col-3-lg col-2-xl">
                    Historique de vos Transactions
                </button>
                <button onClick={() => setState('money')}
                    className="btn-outlined-primary text-hover-white font-sm  col-3-lg col-2-xl">
                    Acheter ou Vendre Stable Coins
                </button>
                <button onClick={() => setState('params')}
                    className="btn-outlined-primary text-hover-white font-sm  col-3-lgcol-2-xl">
                    Gèrer son compte
                </button>
                <button onClick={() => setState('upload')}
                    className="btn-outlined-primary text-hover-white font-sm  col-3-lg col-2-xl">
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

            {state === 'money' && <div>
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
