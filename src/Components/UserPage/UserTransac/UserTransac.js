import { useState } from 'react';
import GetALlTransacs from './GetAllTransacs';
import GetProps from './GellAllProps';

function UserTransac({ user }) {

    const [state, setState] = useState()

    return (

        <div className='container-xl bg-white p-4'>
            <h3 className="bg-primary text-white t-center font-lg br-xs ml-3 mr-3 mb-3 p-1">
                Historique de vos transactions
            </h3>


            <div className="justify-center row col-12-xl">
                <button className="btn-outlined-primary text-hover-white font-sm "
                    onClick={() => setState('oldSc')}>
                    Historique StableCoins
                </button >
                <button className="btn-outlined-primary text-hover-white font-sm"
                    onClick={() => setState('oldEuro')}>
                    Historique Euro
                </button>
                <button className="btn-outlined-primary text-hover-white font-sm"
                    onClick={() => setState('allTrans')}>
                    Toutes les transactions
                </button>
                <button className="btn-outlined-primary text-hover-white font-sm"
                    onClick={() => setState('allProps')}>
                    Parts de biens immobiliers
                </button>
            </div>

            {state === 'oldSc' &&
                <div>
                    <h3 className="bg-primary text-white t-center font-lg br-xs ml-3 mr-3 mb-3 p-1">
                        Historique de vos achats de Stable Coins
                    </h3>
                    {user.ancientMontants[0] ?
                        <div className='card bg-white'>
                            {user.ancientMontants.map((argent, index) =>
                                <div key={index} className="usertransac-line">
                                    Transaction N#{index + 1} {argent}
                                </div>)}
                        </div>
                        :
                        <div className='card bg-white text-black'> Vous n'avez pas encore réalisé de transactions </div>
                    }
                </div>
            }

            {state === 'oldEuro' &&
                <div>
                    <h3 className="bg-primary text-white t-center font-lg br-xs ml-3 mr-3 mb-3 p-1">
                        Historique de vos d'échange en Euro
                    </h3>
                    {user.ancientMontantsEuro[0] ?
                        <div className='card bg-white'>
                            {user.ancientMontantsEuro.map((argent, index) =>
                                <div key={index} className="usertransac-line">
                                    Transaction N#{index + 1} {argent}
                                </div>)}
                        </div>
                        :
                        <div className='card bg-white text-black'> Vous n'avez pas encore réalisé de transactions </div>
                    }
                </div>
            }

            <div>
                {state === 'allTrans' &&
                    <GetALlTransacs user={user} />}

                {state === 'allProps' &&
                    <GetProps user={user} />}
            </div>
        </div>


    )
}

export default UserTransac;