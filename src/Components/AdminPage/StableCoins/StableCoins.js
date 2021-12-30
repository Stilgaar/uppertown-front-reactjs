import React, { useState } from "react";
import axios from "axios";
import "./StableCoins.css";
import useURL from '../../../Hooks/useURL';



function StableCoins({ userdata, adminRefresh }) {

    const [coins, setCoins] = useState();
    const [url] = useURL()

    function handleInput(e) {
        setCoins(e.target.value);
    }
    function handleClick() {

        axios.post(`${url}/api/users/addCoins`, {
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
                <div
                    className="stableC-input">
                    <input
                        type="text"
                        name="stableCoins"
                        placeholder="Nombre de Stable coins commandés"
                        className="inputstable"
                        value={coins}
                        onInput={(e) => handleInput(e)}
                    />
                    <button
                        className="userline-button-validate"
                        onClick={handleClick}>
                        Valider
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StableCoins