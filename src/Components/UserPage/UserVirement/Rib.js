import { useContext } from 'react';
import useAxios from '../../../Hooks/useAxios'
import URLcontext from '../../../Context/URLcontext';

function Rib() {
    const URLContextValue = useContext(URLcontext)
    const [rib] = useAxios(`${URLContextValue.url}/admin/getRib`)
    return (
        <>
            <div>Pour acheter des Stable Coins, veuillez faire un virement sur le compte en banque suivant</div>
            <div>Virement SEPA</div>
            <div>Titulaire : {rib?.[0]?.titulaire}</div>
            <div>Domiciliation : {rib?.[0]?.domiciliation}</div>
            <div className="uservirement-container-totalRIB">
                <div className="uservirement-container-rib-iban-bic">
                    <div className="uservirement-container-rib">
                        RIB
                        <div className="uservirement-container-value">
                            <div>Code Banque</div>
                            <div>{rib?.[0]?.codeBanque}</div>
                        </div>
                        <div className="uservirement-container-value">
                            <div>Code Guichet</div>
                            <div>{rib?.[0]?.codeGuichet}</div>
                        </div>
                        <div className="uservirement-container-value">
                            <div>Numero de Compte</div>
                            <div>{rib?.[0]?.numeroCompte}</div>
                        </div>
                        <div className="uservirement-container-value">
                            <div>Clefs RIB</div>
                            <div>{rib?.[0]?.clefRib}</div>
                        </div>
                    </div>
                    <div className="uservirement-container-iban">
                        I.B.A.N
                        <div className="uservirement-container-value-iban-bic">
                            <div>
                                {rib?.[0]?.iban} {rib?.[0]?.codeBanque} {rib?.[0]?.codeGuichet} {rib?.[0]?.clefRib}</div>
                        </div>
                    </div>
                    <div className="uservirement-container-bic">
                        B.I.C / SWIFT
                        <div className="uservirement-container-value-iban-bic">
                            <div>{rib?.[0]?.bicSwift}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rib;