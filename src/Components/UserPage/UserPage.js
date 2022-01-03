import './UserPage.css';
import './UserPage.scss';

import React, { useEffect, useState } from 'react'
import UserUpdate from './UserUpdate/UserUpdate';
import UserVirement from './UserVirement/UserVirement';
import UserTransac from './UserTransac/UserTransac';
import UserSplash from './UserSplash/UserSplash';
import Uploads from './UserUpdate/Uploads';

function UserPage({ user, hardRefresh }) {

    const [showSplash, setShowSplash] = useState(true)
    const [showTransac, setShowTransac] = useState(false)
    const [showSell, setShowSell] = useState(false)
    const [showParam, setShowParam] = useState(false)
    const [showUp, setShowUp] = useState(false)

    useEffect(() => {
        hardRefresh()
    }, [])

    useEffect(() => {
        if (showTransac === true || showSell === true || showParam === true || showUp === true) { setShowSplash(false) }
        else { setShowSplash(true) }
    }, [showTransac, showSell, showParam, showUp])


    const transac = () => {
        setShowTransac(current => !current)
        setShowSell(false)
        setShowParam(false)
        setShowUp(false)
    }

    const virement = () => {
        setShowSell(current => !current)
        setShowTransac(false)
        setShowParam(false)
        setShowUp(false)
    }

    const param = () => {
        setShowParam(current => !current)
        setShowTransac(false)
        setShowSell(false)
        setShowUp(false)
    }

    const up = () => {
        setShowTransac(false)
        setShowSell(false)
        setShowParam(false)
        setShowUp(current => !current)
    }

    return (
        <div className="user-page">
            <div className="userpage-buttons-list">
                <button
                    onClick={() => transac()}
                    className="userpage-button-validate">
                    Historique de vos Transactions
                </button>
                <button
                    onClick={() => virement()}
                    className="userpage-button-validate">
                    Acheter ou Vendre Stable Coins
                </button>
                <button
                    onClick={() => param()}
                    className="userpage-button-validate">
                    Gèrer son compte
                </button>
                <button
                    onClick={() => up()}
                    className="userpage-button-validate">
                    Upload Fichiers
                </button>
            </div>

            {showSplash &&
                <UserSplash
                    user={user}
                    param={param} />}

            {showTransac &&
                <div>
                    {user?.userType === "userType4" ?
                        <div>
                            <UserTransac
                                user={user}
                                hardRefresh={hardRefresh} />
                        </div>
                        :
                        <div
                            className="userpage-warning">Pour avoir accès aux Transactions : <br />
                            Vous devez d'abord procèder aux étapes de verifications avant de procéder à cette étape
                            <br />
                            <br />
                            <button
                                onClick={() => param()}
                                className="userpage-button-validate-gestion">
                                Gèrer son compte
                            </button>
                        </div>}
                </div>}

            {showSell &&
                <div>
                    {user?.userType === "userType4" ?
                        <div>
                            <UserVirement user={user} hardRefresh={hardRefresh} />
                        </div> :
                        <div
                            className="userpage-warning">Pour pouvoir acheter ou vendre des Stable Coins : <br />  Vous devez d'abord procèder aux étapes de verifications avant de procéder à cette étape
                            <br /> <br />
                            <button
                                onClick={() => param()}
                                className="userpage-button-validate-gestion">
                                Gèrer son compte
                            </button>
                        </div>}
                </div>}

            {showParam &&
                <UserUpdate
                    user={user}
                    hardRefresh={hardRefresh} />}

            {showUp &&
                <Uploads
                    user={user}
                    hardRefresh={hardRefresh} />}
        </div>
    )
}
export default UserPage
