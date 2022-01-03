import { useState, useContext, useEffect } from 'react'
import FormContext from '../../../Context/FormContext'
import URLContext from '../../../Context/URLcontext'

function OneLineUpdate({ entry, user, hardRefresh }) {

    const UrlContextvalue = useContext(URLContext)
    const FormContextValue = useContext(FormContext)

    useEffect(() => {

        FormContextValue.handleData({ email: user.email })
    }, [])

    const [box, setBox] = useState(false)

    return (
        <div className="userupdate-singlecontainer">
            <div className="userupdate-container-modify">
                {box ? <div>
                </div> : <div
                    className="userupdate-container-container-ternaire">
                    <div>{entry.label}</div>
                    {entry.name === "firstname" && <div> Actuel : {user.firstname}</div>}
                    {entry.name === "lastname" && <div>Actuel : {user.lastname}</div>}
                    {entry.name === "email" && <div> Actuel : {user.email}</div>}
                    {entry.name === "tel" && <div> Actuel : {user.tel}</div>}
                    {entry.name === "brandname" && <div> Actuel : {user.brandname}</div>}
                    {entry.name === "adress" && <div> Actuel : {user.adress}</div>}
                    {entry.name === "rib" && <div>Actuel : {user.rib}</div>}
                </div>}
                {box &&
                    <form onSubmit={(e) => {
                        FormContextValue.handleSubmit(e);
                        setBox(c => !c)
                        hardRefresh()
                    }}>
                        <div className="userupdate-container-label" onClick={(e) => e.stopPropagation()}>
                            <label className="userupdate-label"> {entry.label} </label>
                            <input
                                className="userupdate-input"
                                type={entry.type}
                                placeholder={entry.placeholder}
                                onChange={(e) => {
                                    FormContextValue.handleURL(`${UrlContextvalue.url}/api/users/modifyUser`)
                                    FormContextValue.handleChange(e);
                                }}
                                name={entry.newinput} />
                        </div>
                        <div className="userupdate-container-warning"> {entry.update} </div>
                        <button
                            className="userupdate-button-validate"
                            type="submit">
                            Valider
                        </button>
                    </form>}
            </div>
            <button
                className="userupdate-button-modify"
                onClick={() => setBox(c => !c)}>
                {box ? "Annuler" : "Modifier"}
            </button>
        </div>

    )
}

export default OneLineUpdate;