import FormContext from "../../../Context/FormContext";
import { useContext } from 'react';

function RibLine({ entry }) {

    const FormContextValue = useContext(FormContext);
    return (
        <div>
            <label className="label">{entry.label}</label>
            <input className="input mt-1 mb-1"
                name={entry.name}
                type={entry.type}
                placeholder={entry.placeholder}
                onChange={FormContextValue.handleChange} />
        </div>
    )
}

export default RibLine;