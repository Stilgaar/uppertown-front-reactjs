import URLContext from '../../../Context/URLcontext'
import FormContext from '../../../Context/FormContext'
import OneLineUploaded from './OneLineUploaded'
import { useState, useContext } from 'react'


function OneLineUpload({ user, entry, hardRefresh }) {

    const UrlContextvalue = useContext(URLContext)
    const FormContextValue = useContext(FormContext)
    const [box, setBox] = useState(false)

    return (
        <div className="userupdate-singlecontainer">
            <div className="userupdate-container-modify">{box ? <div></div> :
                <div className="userupdate-container-container-ternaire-avec-image"><div>{entry.title}</div></div>}
                {box && <div>
                    <form onSubmit={(e) => {
                        FormContextValue.handleForm(e);
                        setBox(c => !c)
                        hardRefresh();
                    }}>
                        <div className="userupdate-container-label">
                            <label className="userupdate-label">{entry.label}</label>
                            <input
                                type={entry.type}
                                name={entry.name}
                                onChange={(e) => {
                                    FormContextValue.handleFile(e)
                                    FormContextValue.handleURL(`${UrlContextvalue.url}${entry.url}`);
                                }} />
                        </div>
                        <div className="userupdate-container-warning">{entry.update}</div>
                        <button
                            className="userupdate-button-validate"
                            type="submit">
                            Valider
                        </button>
                    </form>

                    {entry.name === "pieceidentite" && user?.pi[0] && <div>
                        {user.pi.map((data, index) =>
                            <OneLineUploaded entry={entry} hardRefresh={hardRefresh} user={user} data={data} key={index} />)}
                    </div>}

                    {entry.name === "justificatifdomicile" && user?.JDD[0] && <div>
                        {user.JDD.map((data, index) =>
                            <OneLineUploaded entry={entry} hardRefresh={hardRefresh} user={user} data={data} key={index} />)}
                    </div>}

                    {entry.name === "avisFiscal" && user?.avisFiscal[0] && <div>
                        {user.avisFiscal.map((data, index) =>
                            <OneLineUploaded entry={entry} hardRefresh={hardRefresh} user={user} data={data} key={index} />)}
                    </div>}

                    {entry.name === "picrib" && user?.picrib[0] && <div>
                        {user.picrib.map((data, index) =>
                            <OneLineUploaded entry={entry} hardRefresh={hardRefresh} user={user} data={data} key={index} />)}
                    </div>}

                </div>}
            </div>
            <button className="userupdate-button-modify"
                onClick={() => setBox(current => !current)}>
                {box ? "Annuler" : "Envoyer"}</button>
        </div>

    )
}

export default OneLineUpload;