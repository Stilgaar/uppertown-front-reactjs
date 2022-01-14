import { useState, useContext } from 'react';
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

        <div className="container-xl bg-white br-xs">
            <div className="container-xl">
                <h3 className="bg-primary text-white t-center font-lg br-xs ml-3 mr-3 mb-3 p-1"> Acheter ou Vendre des Stable Coins </h3>
                <div className='fw-br'> Vous disposez actuellement de {user.stableCoins?.toLocaleString()} Stable Coins</div>
            </div>
            <div>

                <button className="btn-outlined-primary text-hover-white font-sm"
                    onClick={() => setAcheter(current => !current)}>
                    Acheter
                </button>

                {acheter &&

                    <div className="card display-f row" >


                        <Rib />

                        <form className='display-f fd-c col-6-xl col-12-lg'
                            onSubmit={(e) => {
                                FormContexValue.handleSubmit(e)
                                setValidation(true)
                                hardRefresh()
                            }}>
                            <label className='label'>Combien désirez vous transferer ?</label>
                            <input
                                className='input'
                                type="number"
                                name="montant"
                                placeholder="Montant"
                                onChange={(e) => {
                                    FormContexValue.handleChange(e)
                                    FormContexValue.handleURL(`${URLContextValue.url}/api/users/addMoney/${user._id}`)
                                }} />
                            <button className="btn-outlined-primary text-hover-white font-sm"
                                type="submit">
                                Valider
                            </button>

                            {validation &&
                                <div className='card'>
                                    <div> Code : " <span className="fw-b text-primary bg-primary-light-9 border-base br-xs p-025"> {user._id} Uppertown
                                    </span>"
                                    </div>
                                    <div className='mt-1'>
                                        Ce code permet d'associer votre dépôt à votre compte.
                                        <br /> Veuillez renseigner ce code en incluant "UpperTown" lors de l'envoi du virement bancaire.</div>
                                </div>}
                        </form>
                    </div>}
            </div>

            <div>
                <button className="btn-outlined-primary text-hover-white font-sm"
                    onClick={() => setVendre(current => !current)}>
                    Vendre
                </button>

                {vendre &&
                    <div className="card p-2">
                        {user?.rib?.[0] !== undefined ? <div> Vous disposez de {user.stableCoins} StableCoins
                            <form className='display-f fd-c'
                                onSubmit={(e) => {
                                    FormContexValue.handleSubmit(e)
                                    setPending(true)
                                    hardRefresh()
                                }}>
                                <label className='label'>Sur quel compte désirez vous réaliser votre virement ?</label>
                                {user.rib.map((ribz, index) =>
                                    <div key={index} >
                                        <input
                                            type="radio"
                                            value={ribz}
                                            name="rib"
                                            onChange={(e) => {
                                                FormContexValue.handleURL(`${URLContextValue.url}/api/users/askMoney/${user._id}`)
                                                FormContexValue.handleChange(e, undefined, 'radio')
                                            }} /> <span className='fw-b text-primary'> RIB #{index + 1} - {ribz}</span>
                                    </div>
                                )}
                                <div className='display-f fd-c card mt-2 mb-2'>
                                    <label className='label'>Combien de Stable Coin désirez vous échanger contre des Euros ?</label>
                                    <input
                                        placeholder='Montant'
                                        className='input'
                                        type="number"
                                        name="change"
                                        onChange={(e) => {
                                            FormContexValue.handleChange(e)
                                            FormContexValue.handleData({ currentStable: user.stableCoins })
                                        }} />
                                    <button className="btn-outlined-primary text-hover-white font-sm col-5-xl"
                                        type="submit">Valider</button>
                                </div>
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