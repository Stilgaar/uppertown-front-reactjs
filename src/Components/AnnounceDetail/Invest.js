import FormContext from '../../Context/FormContext'
import URLcontext from '../../Context/URLcontext'
import { useContext } from 'react'

function Invest({ user, ann }) {

    const FormContextValue = useContext(FormContext)
    const UrlContextvalue = useContext(URLcontext)
    // console.log("INVEST USER", user)
    // console.log("INVEST ANN", ann)

    return (
        <div>
            <form onSubmit={FormContextValue.handleSubmit}>
                <input
                    values={FormContextValue.data.amountStableCoins || ""}
                    type="number"
                    name="amountStableCoins"
                    onChange={(e) => {
                        FormContextValue.handleChange(e)
                        FormContextValue.handleData({ lastname: user.lastname }, { id: user._id }, { annonceId: ann._id })
                    }} />
                <button
                    type="submit"
                    onMouseEnter={() => {
                        FormContextValue.handleURL(`${UrlContextvalue.url}/transac/transac`)
                    }
                    }>
                    Aller on y go ?!</button>
            </form>
        </div>
    )
}

export default Invest;