import "./UserUpdate.css"
import FormContext from '../../../Context/FormContext'
import URLcontext from '../../../Context/URLcontext'
import { useContext } from 'react'

function OneLineUploaded({ user, data, hardRefresh, entry }) {

    const FormContextValue = useContext(FormContext)
    const UrlContextvalue = useContext(URLcontext)

    return (
        <>
            <img className="col-2-xl" src={data} alt="justificatif" />
            <button
                className="btn-outlined-primary text-hover-white font-sm anul"
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
        </>
    )
}

export default OneLineUploaded;