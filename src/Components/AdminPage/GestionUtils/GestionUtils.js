import { useEffect, useState } from 'react';
import './GestionUtils.css'
const axios = require('axios');

function GestionUtils() {

const [users, setUsers] = useState([]);

console.log("CONSOLE LOG USERS", users)

useEffect(() => {
    axios.get("http://localhost:1337/api/users/users")
    .then((res) => setUsers(res.data))
},[])


    return (

        <div> pet foireux
            {users.map((data) => 
                <div>{data.firstname}</div>
            )}
    
             
             
       </div>
    )
}

export default GestionUtils;