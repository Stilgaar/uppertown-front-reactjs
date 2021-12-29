import './AdminPage.css';
import './AdminPage.scss';
import { useEffect, useState, useContext } from 'react';
import GestionUtils from './GestionUtils/GestionUtils';
import SearchUser from './SearchUser/SearchUser';
import AddRib from './Addrib/AddRib';
import PostAnnounce from './PostAnnounce/PostAnnounce';
import AdminText from './AdminText/AdminText';
import AdminSplash from './AdminSplash/AdminSplash';
import URLcontext from '../../Context/URLcontext';
import useAxios from '../../Hooks/useAxios';


function AdminPage() {

    const [showSearch, setShowSearch] = useState(false)
    const [showGestion, setShowGestion] = useState(false)
    const [showAddRib, setShowAddRib] = useState(false)
    const [showPostAnn, setShowPostAnn] = useState(false)
    const [showAdminText, setShowAdminText] = useState(false)
    const [splash, setSplash] = useState(true)
    const URLContextValue = useContext(URLcontext)

    const [users, adminRefresh] = useAxios(`${URLContextValue.url}/api/users/users`)

    useEffect(() => {
        adminRefresh();
    }, [])

    useEffect(() => {
        if (showSearch == true || showGestion == true || showAddRib == true || showPostAnn == true || showAdminText == true) { setSplash(false) }
        else { setSplash(true) }

    }, [showSearch, showGestion, showAddRib, showPostAnn, showAdminText])
    //a l'affichage requete qui recupere tous les users
    //a l'affichage requete qui recupere tous les biens

    //2 partie
    //1° avec une liste des users
    //2° avec une liste les annonces

    //sur chaque item des listes ouvre une page avec plus d'infos sur cette item

    const search = () => {
        setShowSearch(current => !current)
        setShowGestion(false)
        setShowAddRib(false)
        setShowPostAnn(false)
        setShowAdminText(false)
    }
    const gestion = () => {
        setShowSearch(false)
        setShowGestion(current => !current)
        setShowAddRib(false)
        setShowPostAnn(false)
        setShowAdminText(false)
    }
    const rib = () => {
        setShowSearch(false)
        setShowGestion(false)
        setShowAddRib(current => !current)
        setShowPostAnn(false)
        setShowAdminText(false)
    }
    const ann = () => {
        setShowSearch(false)
        setShowGestion(false)
        setShowAddRib(false)
        setShowPostAnn(current => !current)
        setShowAdminText(false)
    }

    const text = () => {
        setShowSearch(false)
        setShowGestion(false)
        setShowAddRib(false)
        setShowPostAnn(false)
        setShowAdminText(current => !current)
    }


    return (
        <div className="admin-page">
            <div className="admin-page-container">
                <div className="adminpage-boutons-admin">
                    <button
                        className="adminpage-button-validate"
                        onClick={() => search()}>Recherche
                    </button>
                    <button
                        className="adminpage-button-validate"
                        onClick={() => gestion()}>Gestion utilisteur
                    </button>
                    <button
                        className="adminpage-button-validate"
                        onClick={() => rib()}>Ajouter/Modifier le Rib
                    </button>
                    <button
                        className="adminpage-button-validate"
                        onClick={() => ann()}>Poster une nouvelle annonce
                    </button>
                    <button
                        className="adminpage-button-validate"
                        onClick={() => text()}>Personalisation du site
                    </button>
                </div>

                <div className="adminpage-components">
                    {showSearch &&
                        <SearchUser />}

                    {showGestion &&
                        <GestionUtils users={users} adminRefresh={adminRefresh} />}

                    {showAddRib &&
                        <AddRib />}

                    {showPostAnn &&
                        <PostAnnounce />}

                    {showAdminText &&
                        <AdminText />}

                    {splash &&
                        <AdminSplash />}
                </div>
            </div>
        </div>
    )
}

export default AdminPage;
