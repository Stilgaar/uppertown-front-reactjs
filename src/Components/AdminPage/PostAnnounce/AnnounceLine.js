import FormContext from "../../../Context/FormContext";
import { useContext } from "react";

function AnnounceLine({ entry }) {
    const FormContextValue = useContext(FormContext)

    return (
        <div className="postannounce">

            {!entry.select && <>
                <label>{entry.label}</label>
                <input
                    type={entry.type}
                    placeholder={entry.placeholder}
                    name={entry.name}
                    onChange={FormContextValue.handleChange} />
            </>}

            {entry.select &&
                <> <label>{entry.label}</label>
                    <select onChange={(e) => FormContextValue.handleChange(e, entry.name)}>
                        <option disabled selected>--  Faites votre choix --</option>
                        {entry.list.slice(1).map((region, index) => (
                            <option
                                values={entry.name}
                                key={index}
                                name={entry.name}
                                type={entry.type}>
                                {region.label}
                            </option>
                        ))}
                    </select></>}
        </div>
    )
}

export default AnnounceLine;