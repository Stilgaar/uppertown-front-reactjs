import './UserTransac.css'
import { useState } from 'react';
import GetALlTransacs from './GetAllTransacs';

function UserTransac({ user, hardRefresh }) {

    // en cours de refonte, ya du taff ... 

    const [modalAcien, setModalAncien] = useState(false);
    const [modalAcienEuro, setModalAncienEuro] = useState(false);
    const [modalTransac, setModalTransac] = useState(false)
    const [modalImmo, setModalImmo] = useState(false)

    const ancien = () => {
        setModalAncien(current => !current)
        setModalImmo(false)
        setModalTransac(false)
        setModalAncienEuro(false)
    }

    const ancienEuro = () => {
        setModalAncien(false)
        setModalImmo(false)
        setModalAncienEuro(current => !current)
        setModalTransac(false)
    }

    const transac = () => {
        setModalTransac(current => !current)
        setModalImmo(false)
        setModalAncienEuro(false)
        setModalAncien(false)
    }

    const immo = () => {
        setModalImmo(current => !current)
        setModalAncienEuro(false)
        setModalAncien(false)
        setModalTransac(false)
    }

    return (

        <div className="usertransac-container-general">

            <h3>Historique de vos transactions</h3>
            <div className="usertransac-button-container">
                <button className="usertransac-button-validate" onClick={() => ancien()}><div> Historique de mes transactions en StableCoins</div></button >
                <button className="usertransac-button-validate" onClick={() => ancienEuro()}><div> Historique de mes transactions en Euro</div></button>
                <button className="usertransac-button-validate" onClick={() => transac()}> Toutes les transactions</button>
                <button className="usertransac-button-validate" onClick={() => immo()}>Parts de biens immobiliers</button>
            </div>

            {modalAcien && <div>{user.ancientMontants.map((argent, index) => <div className="usertransac-line">Transaction N#{index} {argent}</div>)}</div>}

            {modalAcienEuro && <div>{user.ancientMontantsEuro.map((argent, index) => <div className="usertransac-line">Transaction N#{index} {argent}</div>)}</div>}

            <div>

                <GetALlTransacs user={user} id={user._id} />

            </div>
        </div>


    )
}

export default UserTransac;