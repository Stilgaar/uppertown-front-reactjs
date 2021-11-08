import React, { useState, useEffect } from "react";
import "./StableCoins.css";


function StableCoins() {
    
    const [coins, setCoins] = useState();

    function handleInput(e) {
        setCoins(e.target.value);   
    }

    function handleClick() {
        setCoins("");
        alert(`Vous venez de créditer ${coins} stable coins!`)
    }

    return(
        <div>
            <h2>Changer des euros en stable coins</h2>
            <div className="stableC-container">
                <label>Entez un montant en euro pour créditer votre compte en stable coins</label>
                <div className="stableC-input">
                <input type="text" name="stable-coins" placeholder="Entrez votre montant en euro" value={coins} onInput={(e) => handleInput(e)} />
                <button onClick={handleClick}>valider</button>
                </div>
            </div>
        </div>
    )
}

export default StableCoins