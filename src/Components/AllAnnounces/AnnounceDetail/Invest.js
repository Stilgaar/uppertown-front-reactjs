import FormContext from '../../../Context/FormContext'
import URLcontext from '../../../Context/URLcontext'
import { useContext } from 'react'

function Invest({ user, ann }) {

    const FormContextValue = useContext(FormContext)
    const UrlContextvalue = useContext(URLcontext)

    return (
        <div>
            <form
                onSubmit={(e) => {
                    FormContextValue.handleSubmit(e)
                }}
                onMouseEnter={() => FormContextValue.handleData({ lastname: user.lastname }, { id: user._id }, { annonceId: ann._id }, { share_price: ann.share_price })}>
                <p>Combien de Tokens désirez vous acheter ?</p>
                <input value={FormContextValue.data.amount || ""}
                    type="number"
                    name="amount"
                    onChange={(e) => {
                        FormContextValue.handleChange(e)
                    }} />

                {FormContextValue.data.amount && <div>
                    {FormContextValue?.data?.amount} : StableCoins <br />
                    {ann.share_price} : Prix du Jeton<br />
                    Soit un investissement de <br />
                    {FormContextValue?.data?.amountStableCoins} StableCoins
                </div>}

                {FormContextValue?.data?.amountStableCoins < ann.share_number
                    && FormContextValue?.data?.amountStableCoins < user.stableCoins
                    || FormContextValue?.data?.amountStableCoins === undefined ?
                    <button type="submit"
                        onMouseEnter={() => { FormContextValue.handleURL(`${UrlContextvalue.url}/transac/transac`) }}>
                        Vous vous lancez ?
                    </button> :
                    <div>Le bien immobilier n'a pas autant de StableCoins ou vous ne disposez pas de suffisament de crédits.</div>
                }
            </form>
        </div>
    )
}

export default Invest;