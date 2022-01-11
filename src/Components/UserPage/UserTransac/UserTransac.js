import './UserTransac.css'
import { useState } from 'react';
import GetALlTransacs from './GetAllTransacs';
import GetProps from './GellAllProps';

function UserTransac({ user }) {

    const [state, setState] = useState()

    return (

        <div className="usertransac-container-general">
            <h3>Historique de vos transactions</h3>
            <div className="usertransac-button-container">
                <button className="usertransac-button-validate"
                    onClick={() => setState('oldSc')}>
                    Historique de mes transactions en StableCoins
                </button >
                <button className="usertransac-button-validate"
                    onClick={() => setState('oldEuro')}>
                    Historique de mes transactions en Euro
                </button>
                <button className="usertransac-button-validate"
                    onClick={() => setState('allTrans')}>
                    Toutes les transactions
                </button>
                <button className="usertransac-button-validate"
                    onClick={() => setState('allProps')}>
                    Parts de biens immobiliers
                </button>
            </div>

            {state === 'oldSc' &&
                <div>{user.ancientMontants.map((argent, index) =>
                    <div key={index} className="usertransac-line">
                        Transaction N#{index + 1} <br /> {argent}
                    </div>)}</div>}

            {state === 'oldEuro' &&
                <div>{user.ancientMontantsEuro.map((argent, index) =>
                    <div key={index} className="usertransac-line">
                        Transaction N#{index + 1} {argent}
                    </div>)}</div>}

            <div>
                {state === 'allTrans' &&
                    <GetALlTransacs user={user} id={user._id} />}

                {state === 'allProps' &&
                    <GetProps user={user} id={user._id} />}
            </div>
        </div>


    )
}

export default UserTransac;