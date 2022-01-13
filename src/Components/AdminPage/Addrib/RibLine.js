import FormContext from "../../../Context/FormContext";
import { useContext } from 'react';

function RibLine({ entry }) {

    const FormContextValue = useContext(FormContext);
    return (
        <>
            <div><label className="label">{entry.label}</label></div>
            <input className="input mb-1"
                name={entry.name}
                type={entry.type}
                placeholder={entry.placeholder}
                onChange={FormContextValue.handleChange} />
        </>
    )
}

export default RibLine;