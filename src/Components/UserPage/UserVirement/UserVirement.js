import { useEffect, useState, useContext } from 'react';
import './UserVirement.css'
import axios from 'axios';
import URLcontext from '../../../Context/URLcontext';

function UserVirement({ user, hardRefresh }) {


    const [acheter, setAcheter] = useState(false);
    const [vendre, setVendre] = useState(false);
    const [validation, setValidation] = useState(false);
    const [pending, setPending] = useState(false)

    const [rib, setRIB] = useState()
    const [montant, setMontant] = useState();
    const [change, setChange] = useState()
    const [theRib, setTheRib] = useState();
    const URLContextValue = useContext(URLcontext)

    let currentStable = user.stableCoins
    console.log('RIB', rib)

    useEffect(() => {
        axios.get(`${URLContextValue.url}/admin/getRib`)
            .then((res) => setRIB(res.data))
    }, [])

    const payement = (e, email) => {
        e.preventDefault();
        let sumbit = { email, montant }
        axios.post(`${URLContextValue.url}/api/users/addMoney`, sumbit)
            .then((res) => console.log(res.data))
            .then(() => setValidation(true))
    }

    const virement = (e, id) => {
        e.preventDefault()
        let submit = { change, theRib, id, currentStable }
        axios.post(`${URLContextValue.url}/api/users/askMoney`, submit)
            .then((res) => {
                if (res.data === 'error') { alert("Vous n'avez pas assez de Stable Coins") }
                else {
                    setPending(true);
                    hardRefresh()
                }
            }).catch((err) => console.log(err))
    }

    const handleInput = (e, setter) => { setter(e.target.value) }

    return (

        <div
            className="uservirement-container-general">
            <div
                className="uservirement-container-params">
                <div>
                    <h3> Acheter ou Vendre des Stable Coins </h3>
                </div>
                <div>
                    Vous disposez actuellement de {user.stableCoins} Stable Coins
                </div>
            </div>
            <div>

                <button
                    className="uservirement-button-validate"
                    onClick={() => setAcheter(current => !current)}>
                    Acheter
                </button>

                {acheter &&
                    <div
                        className="uservirement-singlecontainer" >
                        <div>Pour acheter des Stable Coins, veuillez faire un virement sur le compte en banque suivant</div>
                        <div>Virement SEPA</div>
                        <div>Titulaire : {rib?.[0]?.titulaire}</div>
                        <div>Domiciliation : {rib?.[0]?.domiciliation}</div>
                        <div
                            className="uservirement-container-totalRIB">

                            <div
                                className="uservirement-container-rib-iban-bic">
                                <div
                                    className="uservirement-container-rib">RIB


                                    <div
                                        className="uservirement-container-value">
                                        <div>Code Banque</div>
                                        <div>{rib?.[0]?.codeBanque}</div>
                                    </div>

                                    <div
                                        className="uservirement-container-value">
                                        <div>Code Guichet</div>
                                        <div>{rib?.[0]?.codeGuichet}</div>
                                    </div>

                                    <div
                                        className="uservirement-container-value">
                                        <div>Numero de Compte</div>
                                        <div>{rib?.[0]?.numeroCompte}</div>
                                    </div>

                                    <div
                                        className="uservirement-container-value">
                                        <div>Clefs RIB</div>
                                        <div>{rib?.[0]?.clefRib}</div>
                                    </div>
                                </div>
                                <div
                                    className="uservirement-container-iban">I.B.A.N
                                    <div
                                        className="uservirement-container-value-iban-bic">
                                        <div>
                                            {rib?.[0]?.iban} {rib?.[0]?.codeBanque} {rib?.[0]?.codeGuichet} {rib?.[0]?.clefRib}</div>
                                    </div>

                                </div>
                                <div
                                    className="uservirement-container-bic">B.I.C / SWIFT
                                    <div
                                        className="uservirement-container-value-iban-bic">
                                        <div>{rib?.[0]?.bicSwift}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form
                            onSubmit={(e) => payement(e, user.email)}>
                            <label>Combien désirez vous transferer ?</label>
                            <input
                                type="number"
                                placeholder="Montant"
                                onInput={(e) => handleInput(e, setMontant)} />
                            <button
                                className="uservirement-button-validate"
                                type="submit">
                                Valider
                            </button>
                        </form>

                        {validation &&
                            <div>
                                <div>Code : "
                                    <span
                                        className="uservirement-span-id">
                                        {user._id} Uppertown
                                    </span>" </div>
                                <div>
                                    Ce code permet d'associer votre dépôt à votre compte.
                                    <br /> Veuillez renseigner ce code en incluant "UpperTown" lors de l'envoi du virement bancaire.</div>
                            </div>
                        }
                    </div>}

            </div>

            <div>
                <button
                    className="uservirement-button-validate"
                    onClick={() => setVendre(current => !current)}>
                    Vendre
                </button>

                {vendre &&
                    <div
                        className="uservirement-singlecontainer">

                        {user?.rib?.[0] !== undefined ? <div> Vous disposez de {user.stableCoins} StableCoins

                            <form
                                onSubmit={(e) => virement(e, user._id)}>
                                <label>Sur quel compte désirez vous réaliser votre virement ?</label>
                                {user.rib.map((ribz, index) =>
                                    <div>
                                        <input
                                            type="radio"
                                            value="rib"
                                            name="rib"
                                            key={index}
                                            onChange={() => setTheRib(ribz)} />
                                        RIB #{index + 1} - {ribz}
                                    </div>
                                )}

                                <label>Combien de Stable Coin désirez vous échanger contre des Euros ?</label>
                                <input
                                    type="number"
                                    onInput={(e) => handleInput(e, setChange)} />
                                <button
                                    className="uservirement-button-vendre"
                                    type="submit">Valider</button>
                            </form>

                            {pending &&
                                <div>Votre demande à bien été prise en compte. <br />
                                    Nos équipes s'occupent de votre virement le plus rapidemende possible</div>}
                        </div>
                            :
                            <div>Avant transférer de l'argent, veuillez indiquer un Relevé d'idendité bancaire</div>}
                    </div>}


            </div>


        </div>
    )

}

export default UserVirement;