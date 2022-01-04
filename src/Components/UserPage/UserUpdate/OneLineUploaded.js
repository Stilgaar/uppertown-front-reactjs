import FormContext from '../../../Context/FormContext'
import URLcontext from '../../../Context/URLcontext'
import { useContext, useState } from 'react'

function OneLineUploaded({ user, data, hardRefresh, entry }) {

    const FormContextValue = useContext(FormContext)
    const UrlContextvalue = useContext(URLcontext)
    const [box, setBox] = useState(false)

    return (
        <div>
            <div className="userupdate-imagecontainer"><p>{entry.title}</p></div>
            <img className="userupdate-imageuser" src={data} alt="justificatif" />
            <button
                className="userupdate-button-delete"
                onClick={(e) => {
                    e.preventDefault()
                    FormContextValue.handleURL(`${UrlContextvalue.url}/up/delete`)
                    FormContextValue.handleData({ email: user.email, pic: data })
                    FormContextValue.handleEnvoi()
                    setBox(c => !c)
                    hardRefresh()
                }}>
                Supprimer
            </button>
            <br /> <br />
            {box && <div>Êtes vous bien sur de vouloir supprimer votre justificatif ?
                <br /> Veuillez confirmer en cliquant à nouveau sur Supprimer</div>}
        </div>
    )
}

export default OneLineUploaded;