import useFetch from '../../../Hooks/useFetch';
import { useCon } from '../../../Hooks/useCon';

function Rib() {
    const { url } = useCon()
    const { data: rib } = useFetch(`${url}/admin/getRib`)

    return (

        <div className='p-2 col-6-xl col-12-lg'>
            <div className='fw-b'>Pour acheter des Stable Coins, veuillez faire un virement sur le compte en banque suivant</div>
            <div><span className='fw-br text-primary'>Virement SEPA</span></div>
            <div><span className='fw-br text-primary'>Titulaire : </span>{rib?.[0]?.titulaire}</div>
            <div><span className='fw-br text-primary'>Domiciliation : </span>{rib?.[0]?.domiciliation}</div>
            <div className="card mt-2">
                <div>
                    <div className="row justify-center mb-1">
                        <span className='card fw-br text-primary'>RIB</span>
                        <div className="card col-2-xl p-1 br-xs">
                            <div className='fw-br text-primary'>Code Banque</div>
                            <div>{rib?.[0]?.codeBanque}</div>
                        </div>
                        <div className="card col-2-xl p-1 br-xs">
                            <div className='fw-br text-primary'>Code Guichet</div>
                            <div>{rib?.[0]?.codeGuichet}</div>
                        </div>
                        <div className="card col-2-xl p-1 br-xs">
                            <div className='fw-br text-primary'>Numero Compte</div>
                            <div>{rib?.[0]?.numeroCompte}</div>
                        </div>
                        <div className="card col-2-xl p-1 br-xs">
                            <div className='fw-br text-primary'>Clefs <br /> RIB</div>
                            <div>{rib?.[0]?.clefRib}</div>
                        </div>
                    </div>
                    <div className="card p-1 mb-1">
                        <span className='fw-br text-primary'> I.B.A.N </span>
                        <div>
                            <div>
                                {rib?.[0]?.iban} {rib?.[0]?.codeBanque} {rib?.[0]?.codeGuichet} {rib?.[0]?.clefRib}</div>
                        </div>
                    </div>
                    <div className="card p-1">
                        <span className='fw-br text-primary'>  B.I.C / SWIFT </span>
                        <div>
                            <div>{rib?.[0]?.bicSwift}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Rib;