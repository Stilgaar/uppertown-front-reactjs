import FormContext from '../../Context/FormContext'
import URLcontext from '../../Context/URLcontext'
import { useContext } from 'react'

function Invest() {

    const FormContextValue = useContext(FormContext)
    const UrlContextvalue = useContext(URLcontext)
    return (
        <div>

            <form onSubmit={FormContextValue.handleSubmit}>
                <input
                    values={FormContextValue.data.amountStableCoins || ""}
                    type="number"
                    name="amountStableCoins"
                    onChange={FormContextValue.handleChange}
                />
                <button
                    type="submit"
                    onMouseEnter={FormContextValue.handleURL(`${UrlContextvalue.url}/transac/transac`)}
                >Aller on y go ?!</button>
            </form>
        </div>
    )
}

export default Invest;