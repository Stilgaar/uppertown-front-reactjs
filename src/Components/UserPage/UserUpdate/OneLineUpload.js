import URLContext from '../../../Context/URLcontext'
import FormContext from '../../../Context/FormContext'
import OneLineUploaded from './OneLineUploaded'
import { useState, useContext } from 'react'


function OneLineUpload({ user, entry, hardRefresh }) {

    const UrlContextvalue = useContext(URLContext)
    const FormContextValue = useContext(FormContext)
    const [box, setBox] = useState(false)

    return (
        <div className="display-f fd-r justify-space-between card mt-1 br-xs p-1">
            <div className="m-a">
                {box ? <></> :
                    <p className='text-primary fw-b'>{entry.title}</p>}
                {box &&
                    <div>
                        <form onSubmit={(e) => {
                            FormContextValue.handleForm(e);
                            hardRefresh();
                            setBox(c => !c)
                        }}>
                            <div className="display-f fd-c t-center">
                                <label className="label">{entry.label}</label>
                                <input className='input m-a br-xs'
                                    type={entry.type}
                                    name={entry.name}
                                    onChange={(e) => {
                                        FormContextValue.handleFile(e)
                                        FormContextValue.handleURL(`${UrlContextvalue.url}${entry.url}/${user._id}`);
                                    }} />
                            </div>
                            <div className="card m-a mt-1 t-center col-9-xl">{entry.update}</div>
                            <button
                                className="btn-outlined-primary text-hover-white font-sm ml-5"
                                type="submit">
                                Valider
                            </button>
                        </form>

                        {entry.name === "pieceidentite" && user?.pi?.[0] &&
                            <div className="container">
                                <p className="fw-b text-primary t-center"> {entry.title}</p>
                                {user.pi.map((data, index) =>
                                    <OneLineUploaded entry={entry} hardRefresh={hardRefresh} user={user} data={data} key={index} />)}
                            </div>}

                        {entry.name === "justificatifdomicile" && user?.JDD?.[0] &&
                            <div className="container">
                                <p className=" text-primary fw-b t-center"> {entry.title}</p>
                                {user.JDD.map((data, index) =>
                                    <OneLineUploaded entry={entry} hardRefresh={hardRefresh} user={user} data={data} key={index} />)}
                            </div>}

                        {entry.name === "avisFiscal" && user?.avisFiscal?.[0] &&
                            <div className="container">
                                <p className="text-primary fw-b mt-1 t-center"> {entry.title}</p>
                                {user.avisFiscal.map((data, index) =>
                                    <OneLineUploaded entry={entry} hardRefresh={hardRefresh} user={user} data={data} key={index} />)}
                            </div>}

                        {entry.name === "picrib" && user?.picrib?.[0] &&
                            <div className="container">
                                <p className=" text-primary fw-b mt-1 t-center"> {entry.title}</p>
                                {user.picrib.map((data, index) =>
                                    <OneLineUploaded entry={entry} hardRefresh={hardRefresh} user={user} data={data} key={index} />)}
                            </div>}

                    </div>}
            </div>
            <button className="btn-outlined-primary text-hover-white font-sm anul"
                onClick={() => setBox(current => !current)}>
                {box ? "Annuler" : "Envoyer"}</button>
        </div>

    )
}

export default OneLineUpload;