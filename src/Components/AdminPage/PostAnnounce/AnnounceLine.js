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

            {entry.select && <>
                <label>{entry.label}</label>
                <select onChange={(e) => FormContextValue.handleChange(e)}>
                    {entry.list.map((region, index) => (
                        <option
                            values={FormContextValue.data.region || ""}
                            key={index}
                            name={entry.name}
                            type={entry.type}>
                            {region.label}
                        </option>
                    ))}
                </select>



            </>}
        </div>
    )
}

export default AnnounceLine;