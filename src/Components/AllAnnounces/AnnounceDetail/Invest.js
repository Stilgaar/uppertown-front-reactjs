import FormContext from '../../../Context/FormContext'
import URLcontext from '../../../Context/URLcontext'
import { useContext } from 'react'

function Invest({ user, ann, thisAnnRefresh, hardRefresh }) {

    const FormContextValue = useContext(FormContext)
    const UrlContextvalue = useContext(URLcontext)

    return (
        <div className='card bg-primary-light-9 mt-2'>
            <form
                onSubmit={(e) => {
                    FormContextValue.handleSubmit(e);
                    setTimeout(() => {
                        thisAnnRefresh();
                        hardRefresh()
                    }, 50)
                }}
                onMouseEnter={() => FormContextValue.handleData({ lastname: user.lastname }, { id: user._id }, { annonceId: ann._id }, { share_price: ann.share_price })}>
                <p className='text-primary fw-br font-lg p-1 mb-1'>Combien de Tokens désirez vous acheter ?</p>
                <input value={FormContextValue.data.amount || ""}
                    type="number"
                    name="amount"
                    className='input mb-1'
                    onChange={(e) => {
                        FormContextValue.handleChange(e)
                    }} />

                {FormContextValue.data.amount && <div className='fw-b mt-1 mb-1'>
                    Vous désirez investir <span className='text-secondary fw-br'> {FormContextValue?.data?.amount} </span> Token <br />
                    Pour ce bien immobilier le prix du jeton s'éléve à <span className='text-secondary fw-br'>{ann.share_price}</span><br />
                    Votre investissement l'éléve à <span className='text-secondary fw-br'>{FormContextValue?.data?.amountStableCoins}</span> StableCoins
                </div>}

                {(FormContextValue?.data?.amountStableCoins < ann.share_number && FormContextValue?.data?.amountStableCoins < user.stableCoins) || (FormContextValue?.data?.amountStableCoins === undefined) ?
                    <button type="submit"
                        className='btn-outlined-primary text-hover-white font-md"'
                        onMouseEnter={() => { FormContextValue.handleURL(`${UrlContextvalue.url}/transac/transac`) }}>
                        Vous vous lancez ?
                    </button> :
                    <div className='text-error fw-br'>Le bien immobilier n'a pas autant de StableCoins <br />
                        ou vous ne disposez pas de suffisament de crédits.</div>
                }
            </form>
        </div>
    )
}

export default Invest;