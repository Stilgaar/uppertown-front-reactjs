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
        <div className="container-xl bg-white br-xs p-1">
            <div className="row justify-center">
                <button className="btn-outlined-primary text-hover-white font-sm"
                    onClick={() => setState('search')}>Recherche
                </button>
                <button className="btn-outlined-primary text-hover-white font-sm"
                    onClick={() => setState('gestion')}>Gestion Utilisateurs
                </button>
                <button className="btn-outlined-primary text-hover-white font-sm"
                    onClick={() => setState('rib')}>Ajouter/Modifier le Rib
                </button>
                <button className="btn-outlined-primary text-hover-white font-sm"
                    onClick={() => setState('ann')}>Poster une nouvelle annonce
                </button>
                <button className="btn-outlined-primary text-hover-white font-sm"
                    onClick={() => setState('perso')}>Personalisation du site
                </button>
                {state !== 'splash' &&
                    <button className="btn-outlined-primary text-hover-white font-sm"
                        onClick={() => setState('splash')}>Retours
                    </button>}


                <div className="container-xl ">
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
