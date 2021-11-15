import './Infos.css'


function Infos({users, ann}) {
                  

    let clienttokens = 0;
    for (let i = 0; i < users.length; i++) { clienttokens += users[i].stableCoins }

    let freetokens = 0;
    for (let i = 0; i < ann.length; i++) { freetokens += ann[i].share_number }

    return (
        <div className="infos-container-container">

            <div className="infos-container">
                <div className="info-element">Tokens Achetés</div>
                <div className="info-element">{clienttokens}</div>
            </div>

            <div className="infos-container">
                <div className="info-element">Utilisateurs</div>
                <div className="info-element">{users.length}</div>
            </div>

            <div className="infos-container">
                <div className="info-element">Biens Immobiliers</div>
                <div className="info-element">{ann.length}</div>
            </div>

            <div className="infos-container">
                <div className="info-element">Tokens Disponible</div>
                <div className="info-element">{freetokens}</div>
            </div>

        </div>
    )
}

export default Infos;