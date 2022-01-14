import { useState, useContext } from 'react'
import FormContext from '../../../Context/FormContext'
import URLContext from '../../../Context/URLcontext'

function OneLineUpdate({ entry, user, hardRefresh }) {

    const UrlContextvalue = useContext(URLContext)
    const FormContextValue = useContext(FormContext)
    const [box, setBox] = useState(false)

    return (
        <div className="display-f fd-r justify-space-between card mt-1 br-xs p-1">
            <div className="m-a">
                {box ? <div>
                </div> :
                    <div className="t-center">
                        <div className='label'>{entry.label}</div>
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
                        FormContextValue.handleSubmit(e)
                        hardRefresh()
                        setBox(c => !c)
                    }}>
                        <div className='display-f fd-c t-center'
                            onClick={(e) => e.stopPropagation()}>
                            <label className="label"> {entry.label}</label>
                            <input
                                className="input m-a"
                                type={entry.type}
                                placeholder={entry.placeholder}
                                onChange={(e) => {
                                    FormContextValue.handleURL(`${UrlContextvalue.url}/api/users/modifyUser/${user._id}`)
                                    FormContextValue.handleChange(e);
                                }}
                                name={entry.newinput} />
                        </div>
                        <div className="card m-a mt-1 t-center col-9-xl"> {entry.update} </div>
                        <button className="btn-outlined-primary text-hover-white font-sm ml-5 t-center"
                            type="submit">
                            Valider
                        </button>
                    </form>}
            </div>

            <button
                className="btn-outlined-primary text-hover-white font-sm anul"
                onClick={() => setBox(c => !c)}>
                {box ? "Annuler" : "Modifier"}
            </button>

        </div>

    )
}

export default OneLineUpdate;