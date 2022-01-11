import FormContext from '../../../Context/FormContext'
import URLcontext from '../../../Context/URLcontext'
import { useContext } from 'react'

function OneLineUploaded({ user, data, hardRefresh, entry }) {

    const FormContextValue = useContext(FormContext)
    const UrlContextvalue = useContext(URLcontext)

    return (
        <div>
            <div className="userupdate-imagecontainer"><p>{entry.title}</p></div>
            <img className="userupdate-imageuser" src={data} alt="justificatif" />
            <button
                className="userupdate-button-delete"
                onMouseEnter={() => {
                    FormContextValue.handleURL(`${UrlContextvalue.url}/up/delete/${user._id}`)
                    FormContextValue.handleData({ pic: data })
                }}
                onClick={(e) => {
                    FormContextValue.handleEnvoi(e)
                    hardRefresh()
                }}
                onMouseLeave={() => {
                    FormContextValue.setClickData()
                }}>
                Supprimer
            </button>
            <br /> <br />


        </div >
    )
}

export default OneLineUploaded;