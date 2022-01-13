import { useState, useContext } from 'react';
import './UserVirement.css'
import URLcontext from '../../../Context/URLcontext';
import FormContext from '../../../Context/FormContext'
import Rib from './Rib';


function UserVirement({ user, hardRefresh }) {

    const [acheter, setAcheter] = useState(false);
    const [vendre, setVendre] = useState(false);
    const [validation, setValidation] = useState(false);
    const [pending, setPending] = useState(false)

    const URLContextValue = useContext(URLcontext)
    const FormContexValue = useContext(FormContext)

    return (

        <div className="container-xl bg-white br-xl p-3">
            <div className="uservirement-container-params">
                <h3 className="bg-primary text-white t-center font-lg br-xs ml-3 mr-3 mb-3 p-1"> Acheter ou Vendre des Stable Coins </h3>
                <div> Vous disposez actuellement de {user.stableCoins?.toLocaleString()} Stable Coins</div>
            </div>
            <div>

                <button className="uservirement-button-validate"
                    onClick={() => setAcheter(current => !current)}>
                    Acheter
                </button>

                {acheter &&
                    <div className="uservirement-singlecontainer" >
                        <Rib />
                        <form onSubmit={(e) => {
                            FormContexValue.handleSubmit(e)
                            setValidation(true)
                            hardRefresh()
                        }}>
                            <label>Combien désirez vous transferer ?</label>
                            <input type="number"
                                name="montant"
                                placeholder="Montant"
                                onChange={(e) => {
                                    FormContexValue.handleChange(e)
                                    FormContexValue.handleURL(`${URLContextValue.url}/api/users/addMoney/${user._id}`)
                                }} />
                            <button className="uservirement-button-validate"
                                type="submit">
                                Valider
                            </button>
                        </form>

                        {validation &&
                            <div> <div>Code : " <span className="uservirement-span-id"> {user._id} Uppertown
                            </span>" </div> <div>
                                    Ce code permet d'associer votre dépôt à votre compte.
                                    <br /> Veuillez renseigner ce code en incluant "UpperTown" lors de l'envoi du virement bancaire.</div>
                            </div>}
                    </div>}
            </div>

            <div>
                <button className="uservirement-button-validate"
                    onClick={() => setVendre(current => !current)}>
                    Vendre
                </button>

                {vendre &&
                    <div className="uservirement-singlecontainer">
                        {user?.rib?.[0] !== undefined ? <div> Vous disposez de {user.stableCoins} StableCoins
                            <form onSubmit={(e) => {
                                FormContexValue.handleSubmit(e)
                                setPending(true)
                                hardRefresh()
                            }}>
                                <label>Sur quel compte désirez vous réaliser votre virement ?</label>
                                {user.rib.map((ribz, index) =>
                                    <div key={index} >
                                        <input type="radio"
                                            value={ribz}
                                            name="rib"
                                            onChange={(e) => {
                                                FormContexValue.handleURL(`${URLContextValue.url}/api/users/askMoney/${user._id}`)
                                                FormContexValue.handleChange(e, undefined, 'radio')
                                            }} />
                                        RIB #{index + 1} - {ribz}
                                    </div>
                                )}

                                <label>Combien de Stable Coin désirez vous échanger contre des Euros ?</label>
                                <input
                                    type="number"
                                    name="change"
                                    onChange={(e) => {
                                        FormContexValue.handleChange(e)
                                        FormContexValue.handleData({ currentStable: user.stableCoins })
                                    }} />
                                <button className="uservirement-button-vendre"
                                    type="submit">Valider</button>
                            </form>

                            {pending &&
                                <div>Votre demande à bien été prise en compte. <br />
                                    Nos équipes s'occupent de votre virement le plus rapidemende possible
                                </div>}
                        </div>
                            :
                            <div>Avant transférer de l'argent, veuillez indiquer un Relevé d'idendité bancaire
                            </div>}
                    </div>}
            </div >
        </div >
    )

}

export default UserVirement;