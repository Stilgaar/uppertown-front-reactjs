import axios from 'axios';
import { useState, useContext, useEffect } from 'react'
import URLContext from '../../../Context/URLcontext'
import FormContext from '../../../Context/FormContext'
import { userUpload } from '../../../JSON/Arrays';
import OneLineUpload from './OneLineUpload';

function Uploads({ user, hardRefresh }) {

    const UrlContextvalue = useContext(URLContext)
    const FormContextValue = useContext(FormContext)

    const handleDelete = (email, data) => {
        let sumbit = { email, data }
        axios.post(`${UrlContextvalue.url}/up/delete`, sumbit)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
            .then(() => hardRefresh())
    }

    useEffect(() => {
        FormContextValue.handleData({ email: user.email });
    }, [])

    return (

        <div className="userupdate-generalcontainer">
            <div className="userupdate-container-params">
                <div><h3> Uploads de vos documents </h3> </div>
            </div>

            {userUpload.map((entry, index) => (
                <OneLineUpload entry={entry} key={index} user={user} hardRefresh={hardRefresh}/>
            ))}
         </div>
    )
}


export default Uploads;