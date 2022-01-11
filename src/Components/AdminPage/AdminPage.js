import './AdminPage.css';
import { useState } from 'react';
import GestionUtils from './GestionUtils/GestionUtils';
import SearchUser from './SearchUser/SearchUser';
import AddRib from './Addrib/AddRib';
import PostAnnounce from './PostAnnounce/PostAnnounce';
import AdminText from './AdminText/AdminText';
import AdminSplash from './AdminSplash/AdminSplash';

function AdminPage() {

    const [state, setState] = useState('splash')

    return (
        <div className="admin-page">
            <div className="admin-page-container">
                <div className="adminpage-boutons-admin">
                    <button className="adminpage-button-validate"
                        onClick={() => setState('search')}>Recherche
                    </button>
                    <button className="adminpage-button-validate"
                        onClick={() => setState('gestion')}>Gestion Utilisateurs
                    </button>
                    <button className="adminpage-button-validate"
                        onClick={() => setState('rib')}>Ajouter/Modifier le Rib
                    </button>
                    <button className="adminpage-button-validate"
                        onClick={() => setState('ann')}>Poster une nouvelle annonce
                    </button>
                    <button className="adminpage-button-validate"
                        onClick={() => setState('perso')}>Personalisation du site
                    </button>
                    {state !== 'splash' &&
                        <button className="adminpage-button-validate"
                            onClick={() => setState('splash')}>Retours
                        </button>}
                </div>

                <div className="adminpage-components">
                    {state === 'search' && <SearchUser />}
                    {state === 'gestion' && <GestionUtils />}
                    {state === 'rib' && <AddRib />}
                    {state === 'ann' && <PostAnnounce />}
                    {state === 'perso' && <AdminText />}
                    {state === 'splash' && <AdminSplash />}
                </div>
            </div>
        </div>
    )
}

export default AdminPage;
