import React, { useContext } from "react";
import URLcontext from '../../../Context/URLcontext';
import FormContext from '../../../Context/FormContext';

function StableCoins({ userdata, refreshUser }) {

    const URLContextValue = useContext(URLcontext)
    const FormContextValue = useContext(FormContext)

    return (
        <div>
            <div className="card container col-10-xl col-10-lg col-12-md col-12-sm col-12-xs t-start mt-1 mb-1"
                onMouseLeave={() => {
                    FormContextValue.setClickData("")
                }}>
                <label className="label mb-1">
                    Entrez le nombre de Stable Coins que {userdata.firstname} {userdata.lastname} à commandé
                </label>

                <form className="display-f fd-c mt-1"
                    onSubmit={(e) => {
                        FormContextValue.handleSubmit(e)
                        setTimeout(() => {
                            refreshUser()
                        }, 50)
                    }}>
                    <input
                        className='input'
                        values={FormContextValue.data.stableCoins || ""}
                        type="text"
                        placeholder="Nombre de Stable coins commandés"
                        className="input"
                        name="stableCoins"
                        onChange={(e) => {
                            FormContextValue.handleChange(e)
                        }} />

                    <button
                        onMouseEnter={() => {
                            FormContextValue.handleURL(`${URLContextValue.url}/api/users/addCoins/${userdata._id}`)
                        }}
                        className="btn-outlined-primary text-hover-white font-sm anul"
                        type="submit">
                        Valider
                    </button>
                </form>
            </div>
        </div >
    )
}

export default StableCoins

