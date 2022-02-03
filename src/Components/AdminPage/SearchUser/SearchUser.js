import { useContext, useEffect, useState, useCallback } from 'react';
import UserLine from '../UserLine/UserLine';
import useFetch from '../../../Hooks/useFetch';
import URLcontext from '../../../Context/URLcontext';


function SearchUser() {

    const URLContextValue = useContext(URLcontext)
    const { data: users, refresh: adminRefresh } = useFetch(`${URLContextValue.url}/api/users/users`)
    const [filterOne, setFilterOne] = useState("");
    const [filtrerdListOne, setFiltrerdListOne] = useState();

    const verifiyOne = useCallback((userOne) => {
        let regex = new RegExp(filterOne.toLowerCase());
        if (
            regex.test(userOne?.lastname?.toLowerCase())
            || regex.test(userOne?.firstname?.toLowerCase())
            || regex.test(userOne?.email?.toLowerCase())
            || regex.test(userOne?._id?.toLowerCase())) {
            return userOne;
        }
    }, [filterOne])

    useEffect(() => { adminRefresh() }, [adminRefresh])

    useEffect(() => {
        const filtrerdListOne = users?.length > 0 && users.filter((userOne) =>
            verifiyOne(userOne)
        );
        setFiltrerdListOne(filtrerdListOne);
    }, [users, verifiyOne]);

    return (
        <div className="container-xl">
            <h3 className="bg-primary text-white t-center font-lg br-xs m-1 mb-3 p-1">Recherche dans tous les utilisateurs, par nom, prénom, email ou ID</h3>
            <div className='display-f fd-c m-3'>
                <label className='label'>Recherche</label>
                <input type="text"
                    className='input mb-2'
                    placeholder="Tappez votre recherche"
                    onChange={(e) => setFilterOne(e.target.value)} />
                <div>
                </div>
                {filtrerdListOne &&
                    filtrerdListOne.map((userdata, key) => {
                        return (
                            <UserLine key={key} userdata={userdata} />
                        )
                    })}


            </div>
        </div>
    )
}

export default SearchUser;

