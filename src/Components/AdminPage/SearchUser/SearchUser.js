import { useContext, useEffect, useState } from 'react';
import UserLine from '../UserLine/UserLine';
import useAxios from '../../../Hooks/useAxios';
import URLcontext from '../../../Context/URLcontext';


function SearchUser() {

    const URLContextValue = useContext(URLcontext)
    const [users, adminRefresh] = useAxios(`${URLContextValue.url}/api/users/users`)
    const [filterOne, setFilterOne] = useState("");
    const [filtrerdListOne, setFiltrerdListOne] = useState();

    useEffect(() => { adminRefresh() }, [])

    useEffect(() => {
        const filtrerdListOne = users.filter((userOne) =>
            verifiyOne(userOne)
        );
        setFiltrerdListOne(filtrerdListOne);
    }, [filterOne, users]);

    const verifiyOne = (userOne) => {
        let regex = new RegExp(filterOne.toLowerCase());
        if (
            regex.test(userOne?.lastname?.toLowerCase())
            || regex.test(userOne?.firstname?.toLowerCase())
            || regex.test(userOne?.email?.toLowerCase())
            || regex.test(userOne?._id?.toLowerCase())) {
            return userOne;
        }
    }

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

