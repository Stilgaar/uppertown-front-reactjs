import FormContext from "../../../Context/FormContext";
import { useContext } from 'react';

function RibLine({ entry }) {

    const FormContextValue = useContext(FormContext);
    return (
        <div className="addrib-container-form">
            <label>{entry.label}</label>
            <input
                name={entry.name}
                type={entry.type}
                placeholder={entry.placeholder}
                onChange={FormContextValue.handleChange} />
        </div>
    )
}

export default RibLine;