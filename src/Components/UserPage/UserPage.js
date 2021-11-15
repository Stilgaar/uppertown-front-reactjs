import './UserPage.css';
import './UserPage.scss';

import React, { useEffect, useState } from 'react'
import UserUpdate from './UserUpdate/UserUpdate';
import UserVirement from './UserVirement/UserVirement';
import UserTransac from './UserTransac/UserTransac';

function UserPage({ user, hardRefresh }) {

    const [showTransac, setShowTransac] = useState(false)
    const [showSell, setShowSell] = useState(false)
    const [showParam, setShowParam] = useState(false)

    //recupere l'ID venant des props de App
    //fais une requete avec l'id et recupere toutes les infos 
    //pour apres les afficher
    //peut etre placeholder

    //voir pour faire un systeme de modif (button)

    //Et faire un bouton pour valider la modification
    //Requete update en bdd

    useEffect(() => {
        hardRefresh()
    }, [])


    const transac = () => {
        setShowTransac(current => !current)
        setShowSell(false)
        setShowParam(false)
    }

    const virement = () => {
        setShowTransac(false)
        setShowSell(current => !current)
        setShowParam(false)
    }

    const param = () => {
        setShowTransac(false)
        setShowSell(false)
        setShowParam(current => !current)
    }


    return (
        <div className="user-page">

            <div className="userpage-buttons-list">
                <button onClick={() => transac()} className="userpage-button-validate">Historique de vos Transactions</button>
                <button onClick={() => virement()} className="userpage-button-validate">Acheter ou Vendre Stable Coins</button>
                <button onClick={() => param()} className="userpage-button-validate">Gèrer son compte</button>
            </div>

            {showTransac &&
                <UserTransac user={user} hardRefresh={hardRefresh} />}

            {showSell &&
                <UserVirement user={user} hardRefresh={hardRefresh} />}

            {showParam &&
                <UserUpdate user={user} hardRefresh={hardRefresh} />}

        </div>
    )
}
export default UserPage
