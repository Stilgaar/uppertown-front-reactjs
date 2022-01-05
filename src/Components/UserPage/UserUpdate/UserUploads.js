import { useContext, useEffect } from 'react'
import FormContext from '../../../Context/FormContext'
import { userUpload } from '../../../JSON/Arrays';
import OneLineUpload from './OneLineUpload';

function Uploads({ user, hardRefresh }) {

    const FormContextValue = useContext(FormContext)

    useEffect(() => {
        FormContextValue.handleData({ email: user.email });
    }, [])

    return (

        <div className="userupdate-generalcontainer">
            <div className="userupdate-container-params">
                <div><h3> Uploads de vos documents </h3> </div>
            </div>

            {userUpload.map((entry, index) => (
                <OneLineUpload entry={entry} key={index} user={user} hardRefresh={hardRefresh} />
            ))}
        </div>
    )
}


export default Uploads;