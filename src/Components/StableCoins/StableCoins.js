import React, { useState } from "react";
import Axios from "axios";
import "./StableCoins.css";


function StableCoins() {
    
    const [coins, setCoins] = useState();

    function handleInput(e) {
        setCoins(e.target.value);   
    }

    function handleClick() {
        setCoins("");
        alert(`Vous venez de créditer ${coins} stable coins!`)

        Axios.post("http://localhost:1337/api/announces/stableCoins", {
            stableCoins: {coins}
        })
        .then(function (response) {
            console.log(response);
        }) 
        .catch(function (error) {
            console.log(error);
        })
            
    
}

    return(
        <div>
            <h2>Changer des euros en stable coins</h2>
            <div className="stableC-container">
                <label>Entez un montant en euro pour créditer votre compte en stable coins</label>
                <div className="stableC-input">
                <input type="text" name="stableCoins" placeholder="Entrez votre montant en euro" value={coins} onInput={(e) => handleInput(e)} />
                <button onClick={handleClick}>valider</button>
                </div>
            </div>
        </div>
    )
}

export default StableCoins