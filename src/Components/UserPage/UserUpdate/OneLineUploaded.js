import FormContext from '../../../Context/FormContext'
import URLcontext from '../../../Context/URLcontext'
import { useContext, useState } from 'react'

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
                    FormContextValue.handleURL(`${UrlContextvalue.url}/up/delete`)
                    FormContextValue.handleData({ email: user.email }, { pic: data })
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