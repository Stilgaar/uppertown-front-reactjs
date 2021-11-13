import './UserTransac.css'
import { useState } from 'react';

function UserTransac({ user, hardRefresh }) {


    const [modalAcien, setModalAncien] = useState(false);
    const [modalAcienEuro, setModalAncienEuro] = useState(false);

    return (

        <div className="usertransac-container-general">

            <div className="usertransac-button-container">
                <button className="usertransac-button-validate" onClick={() => setModalAncien(current => !current)}><div> Historique de mes transactions en StableCoins
                </div></button > {modalAcien && <div>{user.ancientMontants.map((argent, index) => <div className="usertransac-line">Transaction N#{index} {argent}</div>)}</div>}

                <button className="usertransac-button-validate" onClick={() => setModalAncienEuro(current => !current)}><div> Historique de mes transactions en Euro
                </div></button> {modalAcienEuro && <div>{user.ancientMontantsEuro.map((argent, index) => <div className="usertransac-line">Transaction N#{index} {argent}</div>)}</div>}
            </div>

        </div>
    )
}

export default UserTransac;