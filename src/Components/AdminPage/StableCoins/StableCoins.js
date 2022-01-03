import React, { useContext, useEffect } from "react";
import "./StableCoins.css";
import URLcontext from '../../../Context/URLcontext';
import FormContext from '../../../Context/FormContext';

function StableCoins({ userdata, adminRefresh }) {

    const URLContextValue = useContext(URLcontext)
    const FormContextValue = useContext(FormContext)

    useEffect(() => {
        FormContextValue.handleURL(`${URLContextValue.url}/api/users/addCoins`)
        FormContextValue.handleData({ _id: userdata._id })
    }, [])

    useEffect(() => {
        adminRefresh()
    }, [])

    return (
        <div>
            <div
                className="stableC-container">
                <label>
                    Entrez le nombre de Stable Coins que {userdata.firstname} {userdata.lastname} à commandé
                </label>

                <form
                    className="stableC-input"
                    onSubmit={FormContextValue.handleSubmit}>
                    <input
                        values={FormContextValue.data.stableCoins || ""}
                        type="text"
                        name="stableCoins"
                        placeholder="Nombre de Stable coins commandés"
                        className="inputstable"
                        onChange={FormContextValue.handleChange}
                    />
                    <button
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

