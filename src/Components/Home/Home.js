import './Home.css';
import './Home.scss';

import React from 'react'
import Signup from './Signup/Signup'
import Login from './Login/Login';

// Afficher composant <About/> avec un lorem pseudo presentation de la societe
// Afficher un composant <Annonce/> qui affiche une annonce random
    //Requete vers BDD pour recup 1 annonce random

//Creer composant <FormCreate> qui sera un formulaire de creation de compte (voir infos a demander)
//Créer composant <FormLogin> qui sera un formulaire de connection (voir infos a demander)

//Event au click sur l'annonce
    //Avec un state qui viens de App genre formState, setFormState = create || login || ""
    //Affiche le <FormCreate>
        //Event au click "valider" -> requete pour creation de compte <- token (juste l'id) a mettre dans le localStorage
        //Et afficher le <FormLogin>

        //Event au click button "J'ai deja un compte" -> cache le <FormCreate> et mets a ca place le <FormLogin>
            // Event au click "Connection" -> requete de connection <- token (juste l'id) a mettre dans le localStorage
            //Et aller page annonces






function Home({formState, setFormState, hardRefresh}) {
    

    return (
        <div className="home">
            {formState === "signin" && <Signup formState={formState} setFormState={setFormState} />}
            {formState === "login" && <Login formState={formState} setFormState={setFormState} hardRefresh={hardRefresh}/>}
            <div className="about">
                <h1>Qui sommes nous ?</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa enim inventore dolor mollitia laudantium. Ex perferendis ipsa, temporibus molestiae alias excepturi est ullam in quos quam natus, ut necessitatibus, beatae aperiam voluptate! Saepe, vero provident! Assumenda corporis eaque aliquid repudiandae cupiditate explicabo praesentium nisi ex nulla. Asperiores, veritatis, voluptatem modi error eum vitae commodi illo, praesentium et tempore dignissimos cumque!</p>
            </div>
            
        </div>
    )
}

export default Home;