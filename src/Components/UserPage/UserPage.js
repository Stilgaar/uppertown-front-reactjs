import './UserPage.css';
import './UserPage.scss';

import React from 'react'
import UserUpdate from './UserUpdate/UserUpdate';
import UserVirement from './UserVirement/UserVirement';

function UserPage({user, hardRefresh}) {

    //recupere l'ID venant des props de App
    //fais une requete avec l'id et recupere toutes les infos 
    //pour apres les afficher
        //peut etre placeholder

    //voir pour faire un systeme de modif (button)

    //Et faire un bouton pour valider la modification
        //Requete update en bdd

    return (
        <div className="user-page">
            <UserVirement user={user} hardRefresh={hardRefresh}/>
            <UserUpdate user={user} hardRefresh={hardRefresh} />
        </div>
    )
}

export default UserPage
