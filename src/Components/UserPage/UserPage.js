import './UserPage.css';
import './UserPage.scss';

import React from 'react'
import UserUpdate from './UserUpdate/UserUpdate';

function UserPage( {user}) {

    //recupere l'ID venant des props de App
    //fais une requete avec l'id et recupere toutes les infos 
    //pour apres les afficher
        //peut etre placeholder

    //voir pour faire un systeme de modif (button)

    //Et faire un bouton pour valider la modification
        //Requete update en bdd

    return (
        <div className="user-page">
            <h1>User Page</h1>
            <UserUpdate user={user} />
        </div>
    )
}

export default UserPage
