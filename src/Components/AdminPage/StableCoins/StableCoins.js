import React, { useContext, useEffect } from "react";
import "./StableCoins.css";
import URLcontext from '../../../Context/URLcontext';
import FormContext from '../../../Context/FormContext';

function StableCoins({ userdata, adminRefresh }) {

    const URLContextValue = useContext(URLcontext)
    const FormContextValue = useContext(FormContext)

    useEffect(() => {
        adminRefresh()
    }, [FormContextValue.resMsg])

    return (
        <div>
            <div className="stableC-container"
                onMouseLeave={() => {
                    FormContextValue.setClickData("")
                }}>
                <label>
                    Entrez le nombre de Stable Coins que {userdata.firstname} {userdata.lastname} à commandé
                </label>

                <form className="stableC-input"
                    onSubmit={(e) => {
                        FormContextValue.handleSubmit(e)
                        adminRefresh()
                    }}>
                    <input
                        values={FormContextValue.data.stableCoins || ""}
                        type="text"
                        name="stableCoins"
                        placeholder="Nombre de Stable coins commandés"
                        className="inputstable"
                        onChange={(e) => {
                            FormContextValue.handleChange(e)
                        }} />

                    <button
                        onMouseEnter={() => {
                            FormContextValue.handleURL(`${URLContextValue.url}/api/users/addCoins/${userdata._id}`)
                        }}
                        className="userline-button-validate"
                        type="submit">
                        Valider
                    </button>
                </form>
            </div>
        </div >
    )
}

export default StableCoins

