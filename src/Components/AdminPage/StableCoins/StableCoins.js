import React, { useState, useContext } from "react";
import axios from "axios";
import "./StableCoins.css";
import URLcontext from '../../../Context/URLcontext';
import FormContext from '../../../Context/FormContext';

function StableCoins({ userdata, adminRefresh }) {

    const URLContextValue = useContext(URLcontext)
    const FormContextValue = useContext(FormContext)
    const [coins, setCoins] = useState();

    function handleInput(e) {
        setCoins(e.target.value);
    }
    function handleClick() {

        axios.post(`${URLContextValue.url}/api/users/addCoins`, {
            "stableCoins": coins,
            "id": userdata._id
        })
            .then(function (response) {
                console.log(response);

            }).then(() => adminRefresh())
            .catch(function (error) {
                console.log(error);
            });

        setCoins("");
    }

    return (
        <div>
            <div
                className="stableC-container">
                <label>
                    Entrez le nombre de Stable Coins que {userdata.firstname} {userdata.lastname} à commandé
                </label>
               
                <form className="stableC-input" onSubmit={FormContextValue.handleSumbit}>
                    <input
                        type="text"
                        name="stableCoins"
                        placeholder="Nombre de Stable coins commandés"
                        className="inputstable"
                        value={FormContextValue.data.coin || ""}
                        name="coin"
                        onChange={FormContextValue.handleChange} />
                    <button
                        className="userline-button-validate"
                        type="submit"
                        onClick={FormContextValue.handleData}>
                        Valider
                    </button>
                </form>
            </div>
        </div>
    )
}

export default StableCoins